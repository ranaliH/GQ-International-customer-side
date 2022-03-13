
import React, {Component} from 'react';
import axios from 'axios';
import './styleme.css';
import './overview.css';
export default class Employee extends Component {

    constructor(props) {
        super(props);

        this.state={
            employees:[]
        };
    }

    componentDidMount() {
        this.retrieveemployees();
    }
    retrieveemployees(){
        axios.get("/employees").then(res =>{
            if(res.data.success){
                this.setState({employees:res.data.existingEmployees});
                console.log(this.state.employees);
            }
        });
    }


    onDelete = (id) =>{
        axios.delete(`/employee/delete/${id}`).then((res)=>{
            alert("Employee Deleted Successfully");
            this.retrieveemployees();
        })
    }

    filterData(employees,searchKey){
        const result = employees.filter((employee) =>
        employee.FullName.toLowerCase().includes(searchKey)||
        employee.FullName.toUpperCase().includes(searchKey)||
        employee.Emp_ID.toLowerCase().includes(searchKey)||
        employee.Emp_ID.toUpperCase().includes(searchKey)
        )

        this.setState({employees:result})
    }

    handleSearchArea =(e) =>{
      const searchKey =   e.currentTarget.value;
        axios.get("/employees").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingEmployees,searchKey)
            }
        });

    }
    render() {
        return (

        <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >

            <div className='container'>

                <div className='row'>
                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3 style={{color:'black',textAlign:'center',width:'100%',textTransform:'uppercase',marginLeft:'100px'}}>All Employees</h3>
                    </div>

                    <div className='col-lg-3 mt-2 mb-2'>

                        <input className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}
                               style={{width:'300px',marginTop:'80px'}}>
                        </input>
                    </div>
                </div>


                <div style={{marginTop:'-50px'}}>
                <button className='btn-grad' > <a href='/add' style={{textDecoration:'none',textAlign:'center',color:'white'}}> ADD New Employee</a></button>&nbsp;&nbsp;
                <button className='btn-grad' ><a href='/viewAttendance' style={{textDecoration:'none',textAlign:'center',color:'white'}}> View Attendances</a></button>&nbsp;&nbsp;
                <button className='btn-grad' ><a href='/viewSalary' style={{textDecoration:'none',textAlign:'center',color:'white'}}> View Salary</a></button></div>&nbsp;&nbsp;


                <table className="table table-striped table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Employee ID</th>
                        <th scope="col">Address</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.employees.map((employees,index) =>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                               <a href={`/employee/${employees._id}`} style={{ textDecoration:'none'}}>
                                    {employees.FullName}
                               </a>
                            </td>
                            <td>{employees.Emp_ID}</td>
                            <td>{employees.Address}</td>
                            <td>{employees.Email}</td>
                            <td>{employees.Phone}</td>

                            <td><button className='btn-grad1'>
                                <a href={`/edit/${employees._id}`} style={{textDecoration:'none',color:'black'}}>
                                    <i className="fas fa-edit"/>&nbsp;EDIT
                                </a></button>
                                &nbsp;<button className='btn-grad2'>
                                <a  href="#" onClick={()=> this.onDelete(employees._id)} style={{textDecoration:'none',color:'black'}}>
                                    <i className="far fa-trash-alt"/>&nbsp;DELETE
                                </a></button>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>


            </div>
        </div>
        );

    }
}


