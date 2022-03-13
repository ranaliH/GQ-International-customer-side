import React, { Component } from 'react'
import axios from 'axios';

export default class CreateDeficits extends Component {

    constructor(props){
        super(props);
        this.state={
            DeficitCode:"",
            Category:"",
            Color:"",
            RequiredQuantity:"",

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
        const{DeficitCode,Category,Color,RequiredQuantity}=this.state;
        let isValid = true;
        const errors ={};
        const error = {};

        if(DeficitCode.trim().length<8){
            error["DeficitCodeLength"]= "Deficit code must be in length 8 or higher";
            isValid=false;
        }

        if(!DeficitCode.match(/^[D][A-Z]{4,}[0-9]{3,}$/)){
            error["DeficitCodePattern"]="Code should start with D then at least 4 uppercase letters and at least 3 numbers";
            isValid=false;
        }

        if(!DeficitCode){
            error["DeficitCodeInput"] = "Deficit code Field is EMPTY!";
            isValid=false;
        }
        if(!Category){
            errors["CategoryInput"] = "Category Field is EMPTY!";
            isValid=false;
        }
        if(!Color){
            errors["ColorInput"] = "Color Field is EMPTY!";
            isValid=false;
        }

        if(!RequiredQuantity){
            errors["RequiredQuantityInput"] = "Required quantity Field is EMPTY!";
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

        
        /** */
        const{DeficitCode,Category,Color,RequiredQuantity}= this.state;

        const data={
            DeficitCode:DeficitCode,
            Category:Category,
            Color:Color,
            RequiredQuantity:RequiredQuantity,
           
        }

        console.log(data);

        axios.post("/deficit/save",data).then((res)=>{
            if(res.data.success){
                alert("Data Inserted Successfully!");
                this.setState(
                    {
                        DeficitCode:"",
                        Category:"",
                        Color:"",
                        RequiredQuantity:""
                    }
                )
            }
        })
    
    }}


    

    render() {
        const{errors}=this.state;
        const{error}=this.state;
        return (

            <div className="container" style={{width:'1000px',backgroundColor:'rgba(217, 214, 162, 0.5)',margin:'40px',borderRadius:'30px'}}>
            <div className="col-md-8 mt-4 mx-auto"><br/>
            <button className="btn btn-outline-danger" style={{marginLeft:'-160px'}}>
                <a href="/Deficit" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                    View Deficits
                </a></button><br/><br/>

                <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#990000',fontWeight:'bolder'}} >Add Deficits!</h1>
                        <form className="needs-validation" onSubmit={this.onSubmit}>
                            <div className="form-group"
                                style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Deficit Code</label>
                                <input type="text" className="form-control" name="DeficitCode" placeholder="Enter code" value={this.state.DeficitCode} onChange={this.handleInputChange} required/>
                                {Object.keys(error).map((key)=>{
                                    return <div style={{color:'red'}} key={key}>{error[key]}</div>
                            })}
                                
                            </div>

                                
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Category</label>
                                <input type="text" className="form-control" name="Category" placeholder="Enter category" value={this.state.Category} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.CategoryInput}</div>
                            </div>
                        
                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Color</label>
                                <input type="text" className="form-control" name="Color" placeholder="Enter color" value={this.state.Color} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.ColorInput}</div>
                            </div>

                            <div className="form-group" style={{marginBottom:'15px'}}>
                                <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Required Quantity</label>
                                <input type="text" className="form-control" name="RequiredQuantity" placeholder="Enter qty" value={this.state.RequiredQuantity} onChange={this.handleInputChange}/>
                                <div className="text-danger">{this.state.errors.RequiredQuantityInput}</div>
                            </div>

                          <button className="btn btn-success" type="submit" style={{marginTop:'15px'}}  onClick={this.onSubmit}>
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