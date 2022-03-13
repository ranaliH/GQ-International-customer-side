import React, { Component } from 'react'
import axios from 'axios';

export default class createStock extends Component {

    constructor(props){
        super(props);
        this.state={
            ItemCode:"",
            Category:"",
            Quantity:"",
           
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
        const{ItemCode,Category,Quantity}=this.state;
        let isValid = true;
        const errors ={};
        const error = {};

        if(ItemCode.trim().length<7){
            error["itemCodeLength"] = "Item code must be in length 8 or higher";
            isValid=false;
        }

        if(!ItemCode.match(/^[A-Z]{4,}[0-9]{3,}$/)){
            error["itemCodePattern"]="Code should include at least 4 uppercase letters and at least 3 numbers";
            isValid=false;
        }

        if(!ItemCode){
            error["itemCodeInput"] = "Item code Field is EMPTY!";
            isValid=false;
        }

        if(!Category){
            errors["categoryInput"] = "Category Field is EMPTY!";
            isValid=false;
        }

        if(!Quantity){
            errors["QuantityInput"] = "Quantity Field is EMPTY!";
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


    const{ItemCode,Category,Quantity/*,TotalNumberOfItems*/}= this.state;

        const data={
            ItemCode:ItemCode,
            Category:Category,
            Quantity:Quantity,
           // TotalNumberOfItems:0
        }
            
        console.log(data);

        axios.post("/stock/save",data).then((res)=>{
            if(res.data.success){
                alert("Data Inserted Successfully!");
                this.setState(
                    {
                        ItemCode:"",
                        Category:"",
                        Quantity:"",
                      // TotalNumberOfItems:""
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
                <div className="container" style={{width:'1000px',backgroundColor:'rgba(176, 186, 103 ,0.5)',borderRadius:'40px',margin:'40px'}}>
                <div className="col-md-8 mt-4 mx-auto"><br/>
                <button class="btn btn-outline-danger" style={{marginLeft:'-160px'}}>
                    <a href="/Stock" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                        View Stocks
                    </a></button><br/><br/>
                    <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#990000',fontWeight:'bolder'}} >Create new Stock!</h1>
                        <form className="needs-validation" onSubmit={this.onSubmit}>
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Item Code</label>
                                <input type="text" className="form-control" name="ItemCode" placeholder="Enter code" value={this.state.ItemCode} onChange={this.handleInputChange}/>
                                {Object.keys(error).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })}
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Category</label>
                                <input type="text" className="form-control" name="Category" placeholder="Enter code" value={this.state.Category} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.categoryInput}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Quantity</label>
                                <input type="text" className="form-control" name="Quantity" placeholder="Enter code" value={this.state.Quantity} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.QuantityInput}</div>
                            </div>
                            {/*
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Total Items</label>
                                <input type="text" className="form-control" name="TotalNumberOfItems" placeholder="Enter code" value={this.state.TotalNumberOfItems} onChange={this.handleInputChange} autoComplete/>
                            </div>
                            */}
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
