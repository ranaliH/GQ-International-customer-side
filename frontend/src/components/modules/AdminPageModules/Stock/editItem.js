import React, { Component } from 'react'
import axios from 'axios';

export default class editItem extends Component {

    constructor(props){
        super(props);
        this.state={
            itemCode:"",
            description:"",
            unitPrice:"",
            color:"",
            countInStock:"",
            imageUrl:""
        }
    }

    handleInputChange=(e)=>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    onSubmit=(e)=>{
        e.preventDefault();
        const id=this.props.match.params.id;

        const{itemCode,description,unitPrice,color,countInStock,imageUrl}= this.state;

        const data={
            itemCode:itemCode,
            description:description,
            unitPrice:unitPrice,
            color:color,
            countInStock:countInStock,
            imageUrl:imageUrl
        }
            
        console.log(data);

        axios.put(`/item/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Item Details Updated Successfully!")
                this.setState(
                    {
                        itemCode:"",
                        description:"",
                        unitPrice:"",
                        color:"",
                        countInStock:"",
                        imageUrl:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/item/get/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    itemCode:res.data.item.itemCode,
                    description:res.data.item.description,
                    unitPrice:res.data.item.unitPrice,
                    color:res.data.item.color,
                    countInStock:res.data.item.countInStock,
                    imageUrl:res.data.item.imageUrl,
                });

                console.log(this.state.item);
            }
        });
    }

    render() {
        return (
            <div className="container" style={{width:'1000px',backgroundColor:'rgba(103, 158, 138 ,0.5)',margin:'40px',borderRadius:'30px'}}>
            <div className="col-md-8 mt-4 mx-auto">
            <button class="btn btn-outline-danger" style={{marginLeft:'-160px'}}>
            <a href="/viewItem" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                View Items
            </a></button><br/><br/>

            <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#990000',fontWeight:'bolder'}} >Edit the item details using the bellow form!</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Item Code</label>
                            <input type="text" className="form-control" name="itemCode" placeholder="Enter code" value={this.state.itemCode} onChange={this.handleInputChange} readOnly/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Description</label>
                            <input type="text" className="form-control" name="description" placeholder="Enter description" value={this.state.description} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Unit Price</label>
                            <input type="text" className="form-control" name="unitPrice" placeholder="Enter Unit Price" value={this.state.unitPrice} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Color</label>
                            <input type="text" className="form-control" name="color" placeholder="Enter color" value={this.state.color} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Coount in stock</label>
                            <input type="text" className="form-control" name="countInStock" placeholder="Enter color" value={this.state.countInStock} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image url</label>
                            <input type="text" className="form-control" name="imageUrl" placeholder="Enter color" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                        </div>

                        <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                            <i className="far fa-check-square"></i>
                                &nbsp;Update
                        </button>
                        <br/><br/>
                    </form>


            </div>
            </div> 
    )
    }
}

