import React, { Component } from 'react'
import axios from 'axios';
export default class Salary extends Component {

    constructor(props) {
        super(props);

        this.state={
            esals:[]
        };
    }

    componentDidMount() {
        this.retrieveposts();
    }
    retrieveposts(){
        axios.get("/esals").then(res =>{
            if(res.data.success){
                this.setState({esals:res.data.existingEsals});
                console.log(this.state.esals);
            }
        });
    }


    onDelete = (id) =>{
        axios.delete(`/esal/delete/${id}`).then((res)=>{
            alert("Deleted Successfully");
            this.retrieveposts();
        })
    }

    filterData(esals,searchKey){
        const result = esals.filter((esal) =>
            esal.FullName.toLowerCase().includes(searchKey))
        this.setState({esals:result})
    }

    handleSearchArea =(e) =>{
        const searchKey =   e.currentTarget.value;
        axios.get("/esals").then(res =>{
            if(res.data.success){
                this.filterData(res.data.existingEsals,searchKey)
            }
        });

    }

    render() {
        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >
            <div className='container'>

                <div className='row'>

                    <div className='col-lg-9 mt-2 mb-2'>
                        <h3 style={{textTransform:'uppercase',textAlign:'center'}}>All Employee Salaries</h3>
                    </div>

                    <div className='col-lg-3 mt-2 mb-2'  style={{width:'100%'}}>
                        <input className='form-control'
                               type='search'
                               placeholder='Search'
                               name='SearchQuery'
                               onChange={this.handleSearchArea}>
                        </input><br/>
                        <button className="btn-grad4"> <a href='/addSalary' style={{textDecoration:'none',color:'white'}}> Add Salary</a></button>&nbsp;&nbsp;
                        <button className="btn-grad4"> <a href='/' style={{textDecoration:'none',color:'white'}}> View Employees</a></button>

                    </div>

                </div>



                <table className="table table-hover">
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">FullName</th>
                        <th scope="col">Date</th>
                        <th scope="col">Work_Hours</th>
                        <th scope="col">Hourly_Rate</th>
                        <th scope="col">Total_Amount</th>
                        <th scope="col">Action</th>
                    </tr>
                    </thead>

                    <tbody>
                    {this.state.esals.map((esals,index) =>(

                        <tr key={index}>
                            <th scope="row">{index+1}</th>
                            <td>
                                <a href={`/esal/${esals._id}`} style={{ textDecoration:'none'}}>
                                    {esals.FullName}
                                </a>
                            </td>
                            <td>{esals.Date}</td>
                            <td>{esals.Work_Hours}</td>
                            <td>{esals.Hourly_Rate}</td>
                            <td>{esals.Total_Amount}</td>

                            <td>
                                <a className="btn btn-warning" style={{width:'40px', height:'40px', borderRadius:'30px',marginRight:'10px'}} href={`/editSalary/${esals._id}`}>
                                    <i className="fas fa-edit"/>&nbsp;&nbsp;&nbsp;
                                </a>
                                &nbsp;
                                <a className="btn btn-danger" href="#" style={{width:'40px', height:'40px', borderRadius:'30px'}} onClick={()=> this.onDelete(esals._id)}>
                                    <i className="far fa-trash-alt"/>&nbsp;
                                </a>
                            </td>
                        </tr>

                    ))}
                    </tbody>
                </table>


            </div></div>

        );
    }
}


