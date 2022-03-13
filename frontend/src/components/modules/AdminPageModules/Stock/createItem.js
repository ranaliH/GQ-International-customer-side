import React, { Component } from 'react'
import axios from 'axios';

export default class createItem extends Component {

    constructor(props){
        super(props);
        this.state={
            itemCode:"",
            description:"",
            unitPrice:"",
            color:"",
            countInStock:"",
            imageUrl:"",
            
            /** */
            errors:{},
            error:{}
        }
    }

    handleInputChange=(e)=>{
        const {name,value} = e.target;

        this.setState({
            ...this.state,
            [name]:value
        })
    }

    /** */
    formValidation = () =>{
        const{itemCode,description,unitPrice,color,countInStock,imageUrl}=this.state;
        let isValid = true;
        const errors ={};
        const error = {};

        if(itemCode.trim().length<7){
            error["itemCodeLength"] = "Item code must be in length 7 or higher";
            isValid=false;
        }

        if(!itemCode.match(/^[A-Z]{4,}[0-9]{3,}$/)){
            error["itemCodePattern"]="Code should include at least 4 uppercase letters and at least 3 numbers";
            isValid=false;
        }

        if(!itemCode){
            error["itemCodeInput"] = "Item code Field is EMPTY!";
            isValid=false;
        }

        if(!description){
            errors["descriptionInput"] = "Description Field is EMPTY!";
            isValid=false;
        }

        if(!unitPrice){
            errors["unitPriceInput"] = "unitPrice Field is EMPTY!";
            isValid=false;
        }

        if(!color){
            errors["colorInput"] = "color Field is EMPTY!";
            isValid=false;
        }

        if(!countInStock){
            errors["countInStockInput"] = "countInStock Field is EMPTY!";
            isValid=false;
        }

        if(!imageUrl){
            errors["imageUrlInput"] = "imageUrl Field is EMPTY!";
            isValid=false;
        }

        this.setState({errors:errors,error:error});
        return isValid;
    }
    /** */
        

    onSubmit=(e)=>{
        e.preventDefault();

        /** */
        const isValid = this.formValidation();
        if(isValid){

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

        axios.post("/item/save",data).then((res)=>{
            if(res.data.success){
                alert("Data Inserted Successfully!");
                this.setState(
                    {
                        itemCode:"",
                        description:"",
                        unitPrice:"",
                        color:"",
                        countInStock:"",
                        imageUrl:"",
                    }
                )
            }
        })
    }
}

    render() {
        const{errors}=this.state;
        const{error}=this.state;
        return (
            <div className="container" style={{width:'1000px',backgroundColor:'rgba(111, 158, 103  ,0.5)',margin:'40px',borderRadius:'40px',}}>
            <div className="col-md-8 mt-4 mx-auto"><br/>
            <button class="btn btn-outline-danger" style={{marginLeft:'-160px'}}>
                <a href="/viewItem" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                    View Items
                </a></button><br/><br/>

                <br/><nr/>
                <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#990000',fontWeight:'bolder'}} >Create an Item!</h1>
                        <form className="needs-validation" onSubmit={this.onSubmit}>
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Item Code</label>
                                <input type="text" className="form-control" name="itemCode" placeholder="Enter code" value={this.state.itemCode} onChange={this.handleInputChange}/>
                                {Object.keys(error).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })}
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Description</label>
                                <input type="text" className="form-control" name="description" placeholder="Enter description" value={this.state.description} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.descriptionInput}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Unit Price</label>
                                <input type="text" className="form-control" name="unitPrice" placeholder="Enter unit price" value={this.state.unitPrice} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.unitPriceInput}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Color</label>
                                <input type="text" className="form-control" name="color" placeholder="Enter color" value={this.state.color} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.colorInput}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Count in stock</label>
                                <input type="text" className="form-control" name="countInStock" placeholder="Enter count" value={this.state.countInStock} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.countInStockInput}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Image Url</label>
                                <input type="text" className="form-control" name="imageUrl" placeholder="Enter count" value={this.state.imageUrl} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.imageUrlInput}</div>
                            </div>

                            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
                                <i className="far fa-check-square"></i>
                                    &nbsp;Save
                            </button>
                            <br/><br/>
                            
                        </form>


                </div>
                </div>
        )
    }
}