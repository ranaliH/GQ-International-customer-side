import React, {Component} from 'react';
import axios from'axios';
import DatePicker from 'react-datepicker';
import './styleme.css';
class EditAttendance extends Component {

    constructor(props) {
        super(props);
        this.state={
            FullName:"",
            Emp_ID:"",
            Days:"",
            Time_IN:"",
            Time_OUT:""
        };

        this.onSubmit = this.onSubmit.bind(this);

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
        const id = this.props.match.params.id;
        const {FullName,Emp_ID,Days,Time_IN,Time_OUT} = this.state;

        const data = {
            FullName:FullName,
            Emp_ID:Emp_ID,
            Days:Days,
            Time_IN:Time_IN,
            Time_OUT:Time_OUT
        }

        console.log(data)
        axios.put(`/attendance/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Attendance Updated Successfully");
                this.setState(
                    {
                        FullName:"",
                        Emp_ID:"",
                        Days:"",
                        Time_IN:"",
                        Time_OUT:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/attendance/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    FullName:res.data.attendance.FullName,
                    Emp_ID:res.data.attendance.Emp_ID,
                    Days:res.data.attendance.Days,
                    Time_IN:res.data.attendance.Time_IN,
                    Time_OUT:res.data.attendance.Time_OUT

                });

                console.log(this.state.attendance);
            }
        });
    }



    render() {
        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal' style={{textAlign:'center', textTransform:'uppercase'}}>Edit Employee Attendances</h1>
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
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Employee_ID</label>
                        <input type='text'
                               disabled
                               className='form-control'
                               name='Emp_ID'
                               placeholder='Enter Emp_ID '
                               value={this.state.Emp_ID}
                               onChange={this.handleInputChange}/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Date</label>
                        <DatePicker
                            selected={ this.state.Date }
                            onChange={ this.handleChange }
                            name="Date"
                            mode = {'date'}
                            dateFormat="MMM d, yyyy"
                            disabled
                        />
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} >Days</label>&nbsp;<br/>
                        <select className="custom-select my-1 mr-sm-2"
                                style={{width:'180px'}}
                                id="inlineFormCustomSelectPref"
                                name='Days'
                                value={this.state.Days}
                                onChange={this.handleInputChange}
                                disabled
                        >
                            <option selected>Choose Day...</option>
                            <option value="Monday">Monday</option>
                            <option value="Tuesday">Tuesday</option>
                            <option value="Wednesday">Wednesday</option>
                            <option value="Wednesday">Thursday</option>
                            <option value="Wednesday">Friday</option>
                            <option value="Wednesday">Saturday</option>
                        </select>

                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>TIME_IN</label>&nbsp;<br/>
                        <select className="custom-select my-1 mr-sm-2"
                                style={{width:'180px'}}
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
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>TIME_OUT</label>&nbsp;<br/>
                        <select className="custom-select my-1 mr-sm-2"
                                style={{width:'180px'}}
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
                    </div>

                    <button className='btn-grad1' type='submit' style={{marginTop:'15px',marginBottom:'10px',color:'black',marginLeft:'350px'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'>
                            &nbsp; Update
                        </i>
                    </button>
                </form>

            </div>
            </div>
        );
    }
}

export default EditAttendance;