import React, { Component } from 'react'
import axios from 'axios';

export default class itemDetails extends Component {

    constructor(props){
        super(props);

        this.state={
            item:{}
        };
    }

    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/item/get/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    item:res.data.item
                });

                console.log(this.state.item);
            }
        });
    }

    render() {
        const {itemCode,description,unitPrice,color,countInStock,imageUrl} = this.state.item;
        return (
            <div style={{marginTop:'20px',marginLeft:'350px'}}>
             <button class="btn btn-outline-danger">
                <a href="/viewItem" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                   View Items
                </a></button><br/><br/>
                <h4 style={{color:'black',fontSize:'36px'}}>{itemCode} - Summarized Details</h4>
                <hr/>

                <dl className="row" style={{color:'black',fontSize:'24px'}}>
                <dt className="col-sm-3">Description</dt>
                <dd className="col-sm-9">{description}</dd>

                <dt className="col-sm-3">Unit Price</dt>
                <dd className="col-sm-9">{unitPrice}</dd>

                <dt className="col-sm-3">Color</dt>
                <dd className="col-sm-9">{color}</dd>

                <dt className="col-sm-3">Count in stock</dt>
                <dd className="col-sm-9">{countInStock}</dd>

                <dt className="col-sm-3">Image url</dt>
                <dd className="col-sm-9">{imageUrl}</dd>
                
            </dl>
            </div>
        )
    }
}