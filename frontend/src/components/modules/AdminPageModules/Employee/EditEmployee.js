import React, { Component } from 'react';
import axios from 'axios';
import './styleme.css';

class EditEmployee extends Component {
    constructor(props) {
        super(props);
        this.state={
            FullName:"",
            Emp_ID:"",
            Address:"",
            Email:"",
            Phone:""
        }
    }

    handleInputChange =(e) =>{
        const {name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit =(e) =>{
        e.preventDefault();
        if (this.props.match && this.props.match.params.id){

        const id = this.props.match.params.id;
        const {FullName,Emp_ID,Address,Email,Phone} = this.state;

        const data = {
            FullName:FullName,
            Emp_ID:Emp_ID,
            Address:Address,
            Email:Email,
            Phone:Phone
        }

        console.log(data)
        axios.put(`/employee/update/${id}`,data).then((res)=>{
            if(res.data.success){

                alert("Employee Details Updated Successfully");

                this.setState(
                    {
                        FullName:"",
                        Emp_ID:"",
                        Address:"",
                        Email:"",
                        Phone:""
                    }
                )
            }
        })
    }}


    componentDidMount(){
        if (this.props.match && this.props.match.params.id){

            const id = this.props.match.params.id;

            axios.get(`/employee/${id}`).then((res)=>{
                if (res.data.success){
                    this.setState({

                        FullName:res.data.employee.FullName,
                        Emp_ID:res.data.employee.Emp_ID,
                        Address:res.data.employee.Address,
                        Email:res.data.employee.Email,
                        Phone:res.data.employee.Phone

                    });

                    console.log(this.state.employee);
                }
            });

        }

    }


    render() {
        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'style={{textAlign:'center',textTransform:'uppercase'}}>Edit Employee Details</h1>
                <button className="btn-grad4"  style={{marginLeft:'640px'}} > <a href='/' style={{textDecoration:'none',color:'white'}}> View Employees</a></button>
                <form className='needs-validation' noValidate>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type='text'
                               className='form-control'
                               name='FullName'
                               placeholder='Enter Employee Name '
                               value={this.state.FullName}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Employee ID</label>
                        <input type='text'
                               disabled
                               className='form-control'
                               name='Emp_ID'
                               placeholder='Enter Employee ID '
                               value={this.state.Emp_ID}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type='text'
                               className='form-control'
                               name='Address'
                               placeholder='Enter Employee Address '
                               value={this.state.Address}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type='text'
                               className='form-control'
                               name='Email'
                               placeholder='Enter Employee Email '
                               value={this.state.Email}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Phone</label>
                        <input type='text'
                               className='form-control'
                               name='Phone'
                               placeholder='Enter Employee Phone '
                               value={this.state.Phone}
                               onChange={this.handleInputChange}/>
                    </div>

                    <button className='btn-grad1' type='submit' style={{marginTop:'15px',marginBottom:'10px',color:'black',marginLeft:'350px'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'>
                            &nbsp; Update
                        </i>
                    </button>
                </form>


            </div></div>
        );
    }
}

export default EditEmployee;