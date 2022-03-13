import React, {Component} from 'react';
import axios from 'axios';

class AttendanceDetails extends Component {
    constructor(props){
        super(props);

        this.state={
            attendance:{}
        };
    }
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/attendance/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    attendance:res.data.attendance
                });

                console.log(this.state.attendance);
            }
        });
    }
    render() {

        const {FullName,Emp_ID,Date,Days,Time_IN,Time_OUT} = this.state.attendance;

        return (
            <div style={{marginTop:'20px'}}>
                <h4>{FullName}</h4>
                <hr/>



                <dl className='row'>
                    <dt className='col-sm-3'>Emp_ID</dt>
                    <dd className='col-sm-9'>{Emp_ID}</dd>

                    <dt className='col-sm-3'>Date</dt>
                    <dd className='col-sm-9'>{Date}</dd>

                    <dt className='col-sm-3'>Days</dt>
                    <dd className='col-sm-9'>{Days}</dd>

                    <dt className='col-sm-3'>Time_IN</dt>
                    <dd className='col-sm-9'>{Time_IN}</dd>

                    <dt className='col-sm-3'>Time_OUT</dt>
                    <dd className='col-sm-9'>{Time_OUT}</dd>
                </dl>
            </div>
        );
    }
}

export default AttendanceDetails;