import React, {Component} from 'react';
import axios from "axios";

class SalaryDeatils extends Component {

    constructor(props){
        super(props);

        this.state={
            esal:{}
        };
    }
    componentDidMount(){
        const id = this.props.match.params.id;

        axios.get(`/esal/${id}`).then((res)=>{
            if (res.data.success){
                this.setState({
                    esal:res.data.esal
                });

                console.log(this.state.esal);
            }
        });
    }
    render() {

        const {FullName,Date,Work_Hours,Hourly_Rate,Total_Amount} = this.state.esal;

        return (
            <div style={{marginTop:'20px'}}>
                <h4>{FullName}</h4>
                <hr/>



                <dl className='row'>
                    <dt className='col-sm-3'>Date</dt>
                    <dd className='col-sm-9'>{Date}</dd>

                    <dt className='col-sm-3'>Work_Hours</dt>
                    <dd className='col-sm-9'>{Work_Hours}</dd>

                    <dt className='col-sm-3'>Hourly_Rate</dt>
                    <dd className='col-sm-9'>{Hourly_Rate}</dd>

                    <dt className='col-sm-3'>Total_Amount</dt>
                    <dd className='col-sm-9'>{Total_Amount}</dd>


                </dl>
            </div>
        );
    }
}

export default SalaryDeatils;