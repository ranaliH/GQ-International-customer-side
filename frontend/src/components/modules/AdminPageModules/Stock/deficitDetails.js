import React, { Component } from 'react'
import axios from 'axios';

export default class deficitDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            deficit:{}
        };
    }
    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/deficit/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    deficit:res.data.deficit
                });

                console.log(this.state.deficit);
            }
        });
    }

    render() {
        const {DeficitCode,Category,Color,RequiredQuantity} = this.state.deficit;
        return (
            <div style={{marginTop:'20px',marginLeft:'350px'}}>
             <button class="btn btn-outline-danger">
                <a href="/Stock" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                   View Deficits
                </a></button><br/><br/>
                <h4 style={{color:'black',fontSize:'36px'}}>{DeficitCode} - Summarized Details</h4>
                <hr/>

                <dl className="row" style={{color:'black',fontSize:'24px'}}>
                <dt className="col-sm-3">Category</dt>
                <dd className="col-sm-9">{Category}</dd>

                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">{Color}</dd>

                <dt className="col-sm-3">Required Quantity</dt>
                <dd className="col-sm-9">{RequiredQuantity}</dd>
                
            </dl>
            </div>
        )
    }
}

