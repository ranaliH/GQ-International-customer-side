import React, { Component } from 'react'
import axios from 'axios';

export default class stockDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            stock:{}
        };
    }

    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/stock/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    stock:res.data.stock
                });

                console.log(this.state.stock);
            }
        });
    }

    render() {
        const {ItemCode,Category,Quantity/*,TotalNumberOfItems*/} = this.state.stock;
        return (
            <div style={{marginTop:'20px',marginLeft:'250px'}}>
             <button class="btn btn-outline-danger">
                <a href="/Stock" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                   View Stocks
                </a></button><br/><br/>
                <h4 style={{color:'black',fontSize:'36px'}}>{ItemCode} - Summarized Details</h4>
                <hr/>

            <dl className="row" style={{color:'black',fontSize:'24px'}}>
                <dt className="col-sm-3">Category</dt>
                <dd className="col-sm-9">{Category}</dd>

                <dt className="col-sm-3">Quantity</dt>
                <dd className="col-sm-9">{Quantity}</dd>
                {/*
                <dt className="col-sm-3">Total</dt>
                <dd className="col-sm-9">{TotalNumberOfItems}</dd>*/}
            </dl>
            </div>
        )
    }
}
