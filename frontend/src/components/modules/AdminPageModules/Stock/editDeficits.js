import React, { Component } from 'react'
import axios from 'axios';

export default class editDeficits extends Component {

    constructor(props){
        super(props);
        this.state={
            DeficitCode:"",
            Category:"",
            Color:"",
            RequiredQuantity:""
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

        const{DeficitCode,Category,Color,RequiredQuantity}= this.state;

        const data={
            DeficitCode:DeficitCode,
            Category:Category,
            Color:Color,
            RequiredQuantity:RequiredQuantity,
        }
            
        console.log(data);

        axios.put(`/deficit/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Deficit Details Updated Successfully!")
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
    }

    componentDidMount(){
        const id=this.props.match.params.id;

        axios.get(`/deficit/${id}`).then((res) =>{
            if(res.data.success){
                this.setState({
                    DeficitCode:res.data.deficit.DeficitCode,
                    Category:res.data.deficit.Category,
                    Color:res.data.deficit.Color,
                    RequiredQuantity:res.data.deficit.RequiredQuantity
                });

                console.log(this.state.deficit);
            }
        });
    }

    render() {
        return (
            <div className="container" style={{width:'1000px',backgroundColor:'rgba(217, 162, 204 ,0.5)',margin:'40px',borderRadius:'30px'}}>
            <div className="col-md-8 mt-4 mx-auto">
            <button class="btn btn-outline-danger" style={{marginLeft:'-160px'}}>
            <a href="/Deficit" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                View Deficits
            </a></button><br/><br/>

            <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#990000',fontWeight:'bolder'}} >Edit the details using the bellow form!</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Deficit Code</label>
                            <input type="text" className="form-control" name="DeficitCode" placeholder="Enter code" value={this.state.DeficitCode} onChange={this.handleInputChange} readOnly/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Category</label>
                            <input type="text" className="form-control" name="Category" placeholder="Enter code" value={this.state.Category} onChange={this.handleInputChange} readOnly/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Color</label>
                            <input type="text" className="form-control" name="Color" placeholder="Enter code" value={this.state.Color} onChange={this.handleInputChange}/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>RequiredQuantity</label>
                            <input type="text" className="form-control" name="RequiredQuantity" placeholder="Enter code" value={this.state.RequiredQuantity} onChange={this.handleInputChange}/>
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