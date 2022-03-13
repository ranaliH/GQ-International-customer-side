import React, { Component } from 'react'
import axios from 'axios';

export default class editStocks extends Component {

    constructor(props){
        super(props);
        this.state={
            ItemCode:"",
            Category:"",
            Quantity:"",
            //TotalNumberOfItems:""
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

        const{ItemCode,Category,Quantity/*,TotalNumberOfItems*/}= this.state;

        const data={
            ItemCode:ItemCode,
            Category:Category,
            Quantity:Quantity,
           // TotalNumberOfItems:0
        }
            
        console.log(data);

        axios.put(`/stock/update/${id}`,data).then((res)=>{
            if(res.data.success){
                alert("Stock Details Updated Successfully!")
                this.setState(
                    {
                        ItemCode:"",
                        Category:"",
                        Quantity:"",
                      //  TotalNumberOfItems:""
                    }
                )
            }
        })
    }

    componentDidMount(){
        if(this.props.match && this.props.match.params.id){

            const id=this.props.match.params.id;

            axios.get(`/stock/${id}`).then((res) =>{
                if(res.data.success){
                    this.setState({
                        ItemCode:res.data.stock.ItemCode,
                        Category:res.data.stock.Category,
                        Quantity:res.data.stock.Quantity,
                      //  TotalNumberOfItems:res.data.stock.TotalNumberOfItems
                    });
    
                    console.log(this.state.stock);
                }
            });

        }
       
       
    }




    render() {
        return (
            <div className="container" style={{width:'1000px',backgroundColor:'rgba(238, 183, 147 ,0.5)',borderRadius:'40px',margin:'40px'}}>
            <div className="col-md-8 mt-4 mx-auto"><br/><br/>
            <button class="btn btn-outline-danger" style={{marginLeft:'-160px'}}>
            <a href="/Stock" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                View Stocks
            </a></button><br/><br/>
                <h1 className="h3 mb-3 font-weight-normal" style={{marginTop:'-50px',color:'#990000',fontWeight:'bolder'}} >Edit the stock details using the bellow form!</h1>
                    <form className="needs-validation" noValidate>
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Item Code</label>
                            <input type="text" className="form-control" name="ItemCode" placeholder="Enter code" value={this.state.ItemCode} onChange={this.handleInputChange} readOnly/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Category</label>
                            <input type="text" className="form-control" name="Category" placeholder="Enter code" value={this.state.Category} onChange={this.handleInputChange} readOnly/>
                        </div>

                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Quantity</label>
                            <input type="text" className="form-control" name="Quantity" placeholder="Enter code" value={this.state.Quantity} onChange={this.handleInputChange}/>
                        </div>
                        {/*
                        <div className="form-group" style={{marginBottom:'15px'}}>
                            <label style={{marginBottom:'5px',fontWeight:'bold',color:'black',fontSize:'20px'}}>Total Items</label>
                            <input type="text" className="form-control" name="TotalNumberOfItems" placeholder="Enter code" value={this.state.TotalNumberOfItems} onChange={this.handleInputChange}/>
                        </div>
                        */}
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
