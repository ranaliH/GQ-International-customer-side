import React, {Component} from 'react';
import axios from'axios';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import './styleme.css';

import "react-datepicker/dist/react-datepicker.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "@material-ui/core";

class AddAttendance extends Component {

    constructor(props) {
        super(props);
        this.state={
            FullName:"",
            Emp_ID:"",
            Date: new Date(),
            Days:"",
            Time_IN:"",
            Time_OUT:"",
            errors:{},
            error:{},
            error1:{},
            error2:{},
            error3:{},
            error4:{}


        };
        this.handleChange = this.handleChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    handleChange(Date) {
        this.setState({
            Date: Date
        })
    }

    handleInputChange =(e) =>{
        const {name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    formValidation = () =>{

        const{FullName,Emp_ID,Date,Days,Time_IN,Time_OUT}=this.state;

        let isValid = true;

        const errors ={};

        const error = {};

        const  error1 = {};

        const  error2 = {};

        const  error3 = {};

        const  error4 = {};






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

        if(!Date){
            errors["DateInput"] = "Date Field is EMPTY!";
            isValid=false;
        }


        if(!Days){
            error4["DaysInput"] = "Days Field is EMPTY!";
            isValid=false;
        }


        if(!Time_IN){
            error2["Time_INInput"] = "Time_IN Field is EMPTY!";
            isValid=false;
        }

        if(!Time_OUT){
            error3["Time_OUTInput"] = "Time_OUT Field is EMPTY!";
            isValid=false;
        }



        this.setState({errors:errors,
            error:error,
            error1:error1,
            error2:error2,
            error3:error3,
            error4:error4,

            });
        return isValid;

    }

    onSubmit =(e) => {
        e.preventDefault();
        const isValid = this.formValidation();
        if (isValid) {
            const {FullName, Emp_ID, Date, Days, Time_IN, Time_OUT} = this.state;

            const data = {
                FullName: FullName,
                Emp_ID: Emp_ID,
                Date: moment(Date).format('MM/DD/YYYY'),
                Days: Days,
                Time_IN: Time_IN,
                Time_OUT: Time_OUT
            }

            console.log(data)
            axios.post("/attendance/save", data).then((res) => {
                if (res.data.success) {
                    alert("Attendance Added Successfully");

                    this.setState(
                        {
                            FullName: "",
                            Emp_ID: "",
                            Date: "",
                            Days: "",
                            Time_IN: "",
                            Time_OUT: ""
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
        const{error4}=this.state;
        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >

                <div className='col-md-8 mt-4 mx-auto'>
                    <h1 className='h3 mb-3 font-weight-normal'>Add Employee Attendance</h1>
                    <button className='btn-grad' style={{marginLeft:'670px'}} ><a href='/viewAttendance' style={{textDecoration:'none',textAlign:'center',color:'white'}}> View Attendances</a></button>&nbsp;&nbsp;
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
                            <label style={{marginBottom:'5px'}}>Employee_ID</label>
                            <input type='text'
                                   className='form-control'
                                   name='Emp_ID'
                                   placeholder='Enter Emp_ID '
                                   value={this.state.Emp_ID}
                                   onChange={this.handleInputChange}/>

                            {Object.keys(error).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })}
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Date</label>
                            <DatePicker

                                selected={ this.state.Date }
                                onChange={ this.handleChange }
                                name="Date"
                                mode = {'date'}
                                dateFormat="MMM d, yyyy"
                            />
                            {Object.keys(errors).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{errors[key]}</div>
                            })}
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>Days</label>&nbsp;<br/>
                            <select className="custom-select my-1 mr-sm-2"
                                    style={{width:'180px', borderRadius:'15px' }}
                                    id="inlineFormCustomSelectPref"
                                    name='Days'
                                    value={this.state.Days}
                                    onChange={this.handleInputChange}>
                                <option selected>Choose Day...</option>
                                <option value="Monday">Monday</option>
                                <option value="Tuesday">Tuesday</option>
                                <option value="Wednesday">Wednesday</option>
                                <option value="Wednesday">Thursday</option>
                                <option value="Wednesday">Friday</option>
                                <option value="Wednesday">Saturday</option>
                            </select>
                            {Object.keys(error4).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{error4[key]}</div>
                            })}
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>TIME_IN</label>&nbsp;<br/>
                            <select className="custom-select my-1 mr-sm-2"
                                    style={{width:'180px', borderRadius:'15px' }}
                                    id="inlineFormCustomSelectPref"
                                    name='Time_IN'
                                    value={this.state.Time_IN}
                                    onChange={this.handleInputChange}>
                                <option selected>Choose TIME...</option>
                                <option>08 : 30 AM</option>
                                <option >09 : 00 AM</option>
                                <option>09 : 30 AM</option>
                                <option >10 : 00 AM</option>
                                <option>10 : 30 AM</option>
                                <option >11 : 00 AM</option>
                            </select>
                            {Object.keys(error2).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{error2[key]}</div>
                            })}
                        </div>

                        <div className='form-group' style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px'}}>TIME_OUT</label>&nbsp;<br/>
                            <select className="custom-select my-1 mr-sm-2"
                                    style={{width:'180px', borderRadius:'15px' }}
                                    id="inlineFormCustomSelectPref"
                                    name='Time_OUT'
                                    value={this.state.Time_OUT}
                                    onChange={this.handleInputChange}>
                                <option selected>Choose TIME...</option>
                                <option >12 : 00 PM</option>
                                <option>12 : 30 PM</option>
                                <option >13 : 00 PM</option>
                                <option>13 : 30 PM</option>
                                <option >14 : 00 PM</option>
                                <option>14 : 30 PM</option>
                                <option>15 : 00 PM</option>
                                <option >15 : 50 PM</option>
                                <option>16 : 00 PM</option>
                                <option >16 : 30 PM</option>
                                <option>17 : 00 PM</option>
                            </select>
                            {Object.keys(error3).map((key)=>{
                                return <div style={{color:'red'}} key={key}>{error3[key]}</div>
                            })}
                        </div>

                        <div  style={{alignItems:'center',marginLeft:'350px'}}>
                            <button className='btn-grad3' type='submit' style={{marginTop:'10px',marginBottom:'10px',color:'black',fontWeight:'bold'}} onClick={this.onSubmit}>
                                  <i className='far fa-check-square'>
                                    &nbsp; Save
                                </i>
                            </button></div>
                    </form>
                </div>
            </div>

        );
    }
}

export default AddAttendance;