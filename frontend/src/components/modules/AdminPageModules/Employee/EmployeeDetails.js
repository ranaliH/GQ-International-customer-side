import React, { Component } from 'react';
import axios from 'axios';

class EmployeeDetails extends Component {
    constructor(props){
        super(props);

        this.state={ 
            employee:{}
        };
    }

    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/employee/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    employee:res.data.employee
                });

                console.log(this.state.employee);
            }
        });
    }
    render() {

        const {FullName,Emp_ID,Address,Email,Phone} = this.state.employee;

        return (
            <div style={{marginTop:'20px'}}>
                <h4>{FullName}</h4>
                <hr/>

                <dl className='row'>
                    <dt className='col-sm-3'>Employee ID</dt>
                    <dd className='col-sm-9'>{Emp_ID}</dd>

                    <dt className='col-sm-3'>Address</dt>
                    <dd className='col-sm-9'>{Address}</dd>

                    <dt className='col-sm-3'>Email</dt>
                    <dd className='col-sm-9'>{Email}</dd>

                    <dt className='col-sm-3'>Phone</dt>
                    <dd className='col-sm-9'>{Phone}</dd>
                </dl>
            </div>
        );
    }
}

export default EmployeeDetails;