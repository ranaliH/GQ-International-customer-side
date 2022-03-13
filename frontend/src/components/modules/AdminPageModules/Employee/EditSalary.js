import React, { Component } from 'react'
import axios from 'axios';
import { Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import './styleme.css';
export default class EditSalary extends Component {

    constructor(props) {
        super(props);
        this.state={
            FullName:"",
            Date:"",
            Work_Hours:"",
            Hourly_Rate:"",
            Total_Amount:0
        };
        this.onSubmit = this.onSubmit.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);

        this.handleHourRate = this.handleHourRate.bind(this);
        this.handleWorkHours = this.handleWorkHours.bind(this);
    }

    componentWillMount(){
        const id = this.props.match.params.id;

        axios.get(`/esal/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    FullName:res.data.esal.FullName,
                    Date:res.data.esal.Date,
                    Work_Hours:res.data.esal.Work_Hours,
                    Hourly_Rate:res.data.esal.Hourly_Rate,
                    Total_Amount:res.data.esal.Total_Amount

                });

                console.log(this.state.esal);
            }
        });

    }

    handleInputChange =(e) =>{
        const {name,value}=e.target;
        this.setState({
            ...this.state,
            [name]:value
        })
    }

    handleFullName(e){
        this.setState(
            {
                FullName:e.target.value
            });
    }

    handleDate(e){
        this.setState(
            {
                Date:e.target.value
            });
    }

    handleHourRate(e){
        this.setState(
            {Hourly_Rate:e.target.value}
        );
    }

    handleWorkHours(e){
        this.setState(
            {Work_Hours:e.target.value}
        );
    }

    onSubmit(e){
        e.preventDefault();
        const id = this.props.match.params.id;
        let FullName = this.state.FullName;
        let Date = this.state.Date;
        let Work_Hours = this.state.Work_Hours;
        let Hourly_Rate = this.state.Hourly_Rate;
        let Total_Amount = Hourly_Rate * Work_Hours;
        console.log(Total_Amount);
        const self = this;
        axios.put(`/esal/update/${id}`,{
            FullName:FullName,
            Date:Date,
            Work_Hours:Work_Hours,
            Hourly_Rate:Hourly_Rate,
            Total_Amount:Total_Amount

        }).then(function(response){
            alert("Salary Updated.!");
            console.log(response);
            self.setState({
                FullName: '',
                Date: '',
                Work_Hours: '',
                Hourly_Rate:'',
                Total_Amount:''
            });
        }).catch(function(error){
            console.log(error.response.data);
        });
    }

    render() {
        const Total_Amount = this.state.Work_Hours * this.state.Hourly_Rate;
        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'10px',background: 'linear-gradient(180deg, #b5c6ff 0%, #fafafa 100%)',width:'100%',alignItems:'center'}} >
            <div className='col-md-8 mt-4 mx-auto'>
                <h1 className='h3 mb-3 font-weight-normal'>Add Employee Salary</h1>
                <button className='btn-grad' style={{marginLeft:'670px'}} ><a href='/viewSalary' style={{textDecoration:'none',textAlign:'center',color:'white'}}> View Salary</a></button>
                <form className='needs-validation' noValidate>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Full Name</label>
                        <input type='text'
                               className='form-control'
                               name='FullName'
                               placeholder='Enter Employee Name '
                               value={this.state.FullName}
                               onChange={this.handleInputChange} required/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <Label for="exampleDate">Date</Label>
                        <input type='text'
                               className='form-control'
                               name='Date'
                               id="exampleDate"
                               value={this.state.Date}
                               onChange={this.handleInputChange} disabled/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Work_Hours</label>
                        <input type='text'
                               className='form-control'
                               name='Work_Hours'
                               placeholder='Enter Work_Hours '
                               value={this.state.Work_Hours}
                               onChange={this.handleWorkHours}required/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}}>Hourly_Rate</label>
                        <input type='text'
                               className='form-control'
                               name='Hourly_Rate'
                               placeholder='Enter Hourly_Rate '
                               value={this.state.Hourly_Rate}
                               onChange={this.handleHourRate}required/>
                    </div>

                    <div className='form-group' style={{marginBottom:'15px'}}>
                        <label style={{marginBottom:'5px'}} hidden> Total_Amount</label>
                        <input type='text'
                               className='form-control'
                               name='Total_Amount'
                               placeholder='Enter Hourly_Rate '
                               value={Total_Amount}
                        />
                    </div>

                    <button className='btn-grad1' type='submit' style={{marginTop:'15px',marginBottom:'10px',color:'black',marginLeft:'350px'}} onClick={this.onSubmit}>
                        <i className='far fa-check-square'>
                            &nbsp; Update
                        </i>
                    </button>
                </form>

            </div>
            </div>
        )
    }
}

