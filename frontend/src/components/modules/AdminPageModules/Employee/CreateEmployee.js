import React, { Component } from 'react';
import axios from 'axios';
import './styleme.css';

class CreateEmployee extends Component {
    constructor(props) {
        super(props);
        this.state={
            FullName:"",
            Emp_ID:"",
            Address:"",
            Email:"", 
            Phone:"",
            errors:{},
            error:{},
            error1:{},
            error2:{},
            error3:{}

        }
    }

    handleInputChange =(e) =>{

        const {name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    formValidation = () =>{

        const{FullName,Emp_ID,Address,Email,Phone}=this.state;

        let isValid = true;

        const errors ={};

        const error = {};

        const  error1 = {};

        const  error2 = {};

        const  error3 = {};



        if(Emp_ID.trim().length<9){
            error["Emp_IDLength"]= "Emp_ID must be in length 9 or higher";
            isValid=false;
        }

        if(!Emp_ID.match(/^[E][M][P][G][Q][0-9]{4}$/)){
            error["Emp_IDPattern"]="Emp_ID should start with EMPGQ and at lease 4 numbers";
            isValid=false;
        }

        if(!Emp_ID){
            error["Emp_IDInput"] = "Emp_ID  Field is EMPTY!";
            isValid=false;
        }

        if(!FullName.match(/^[a-z A-Z]*$/)){
            error1["FullNamePattern"]="FullNameD should contain characters only";
            isValid=false;
        }

        if(!FullName){
            error1["FullNameInput"] = "FullName Field is EMPTY!";
            isValid=false;
        }

        if(!Address){
            errors["AddressInput"] = "Address Field is EMPTY!";
            isValid=false;
        }



        if(!Email.match(/^[a-z][a-zA-Z0-9_]*(\.[a-zA-Z][a-zA-Z0-9_]*)?@[a-z][a-zA-Z-0-9]*\.[a-z]+(\.[a-z]+)?$/)){
            error2["EmailPattern"]="Email Pattern Is Invalid";
            isValid=false;
        }

        if(!Email){
            error2["EmailInput"] = "Email Field is EMPTY!";
            isValid=false;
        }

        if(!Phone.match(/^[0-9]{10}$/)){
            error3["PhonePattern"]="Phone should contain ten numbers";
            isValid=false;
        }

        if(!Phone){
            error3["PhoneInput"] = "Phone Field is EMPTY!";
            isValid=false;
        }



        this.setState({errors:errors,error:error,error1:error1,error2:error2,error3:error3});
        return isValid;

    }


    onSubmit =(e) =>{
        e.preventDefault();

        const isValid = this.formValidation();
        if(isValid){
        const {FullName,Emp_ID,Address,Email,Phone} = this.state;

        const data = {
            FullName:FullName,
            Emp_ID:Emp_ID,
            Address:Address,
            Email:Email,
            Phone:Phone
        }

        console.log(data)
        axios.post("/employee/save",data).then((res)=>{
            if(res.data.success){
                alert("New Employee Added Successfully...!");
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
    }
    }

    render() {
        const{errors}=this.state;
        const{error}=this.state;
        const{error1}=this.state;
        const{error2}=this.state;
        const{error3}=this.state;

        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:'center', textTransform:'uppercase'}}>Create New Employee</h1>
                <button className="btn-grad4"  style={{marginLeft:'670px'}} > <a href='/' style={{textDecoration:'none',color:'white'}}> View Employees</a></button>
                <form className='needs-validation' noValidate>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type='text'
                               className='form-control'
                               name='FullName'
                               placeholder='Enter Employee Name '
                               value={this.state.FullName}
                               onChange={this.handleInputChange}/>

                        {Object.keys(error1).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{error1[key]}</div>
                        })}
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Employee ID</label>
                        <input type='text'
                               className='form-control'
                               name='Emp_ID'
                               placeholder='Enter Employee ID '
                               value={this.state.Emp_ID}
                               onChange={this.handleInputChange}/>

                        {Object.keys(error).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{error[key]}</div>
                        })}
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Address</label>
                        <input type='text'
                               className='form-control'
                               name='Address'
                               placeholder='Enter Employee Address '
                               value={this.state.Address}
                               onChange={this.handleInputChange}/>

                        {Object.keys(errors).map((key)=>{
                            return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                        })}
                    </div>

                     <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Email</label>
                        <input type='text'
                               className='form-control'
                               name='Email'
                               placeholder='Enter Employee Email '
                               value={this.state.Email}
                               onChange={this.handleInputChange}/>

                         {Object.keys(error2).map((key)=>{
                             return <div style={{color:'red'}} key={key}>{error2[key]}</div>
                         })}

                    </div>

                     <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Phone</label>
                        <input type='text'
                               className='form-control'
                               name='Phone'
                               placeholder='Enter Employee Phone '
                               value={this.state.Phone}
                               onChange={this.handleInputChange}/>

                         {Object.keys(error3).map((key)=>{
                             return <div style={{color:'red'}} key={key}>{error3[key]}</div>
                         })}

                    </div>

                </form>
                <div  style={{alignItems:'center',marginLeft:'350px'}}>
                    <button className='btn-grad3' type='submit' style={{marginTop:'10px',marginBottom:'10px',color:'black',fontWeight:'bold'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'>
                            &nbsp; Save
                        </i>
                    </button></div>
            </div>
            </div>
        );
    }
}

export default CreateEmployee;