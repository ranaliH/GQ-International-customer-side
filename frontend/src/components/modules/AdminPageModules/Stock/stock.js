import React, { Component } from 'react';
import axios from 'axios';
import './stock.css';

export default class Stock extends Component {
    constructor(props){
        super(props);

        this.state={
            stocks:[]
        };
    }

    componentDidMount(){
        this.retrieveStocks();
    }

    retrieveStocks(){
        axios.get("/stocks").then(res=>{
            if(res.data.success){
                this.setState({
                    stocks:res.data.existingStocks
                });

                console.log(this.state.stocks)
            }
        });
    } 

    onDelete = (id) =>{
        axios.delete(`/stock/delete/${id}`).then((res)=>{
            alert("Item Deleted Successfully!");
            this.retrieveStocks();
        })
    }

    //Search bar
    filterData(stocks,searchKey){
        const result = stocks.filter((stock)=>
            stock.ItemCode.toLowerCase().includes(searchKey)|| //toLowerCase() helps to filter the data using the lowercase letters.
            stock.ItemCode.toUpperCase().includes(searchKey)|| //toUpperCase() helps to filter the data using the Uppercase letters. 
            stock.Category.toLowerCase().includes(searchKey)||
            stock.Category.toUpperCase().includes(searchKey)
        )

        this.setState({stocks:result})
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;

        axios.get("/stocks").then(res=>{
            if(res.data.success){
                this.filterData(res.data.existingStocks,searchKey)
            }
        });
    }

    
        
    render() {
        return (
            <div className='card' style={{borderRadius:'30px',marginTop:'5px',background: 'linear-gradient(180deg, #AFA8A8 0%, #fafafa 100%)',width:'100%',alignItems:'center',marginLeft:'20px'}} >
            <div className="container">

                <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h4 style={{color:'#B91717',fontSize:'48px',fontWeight:'bold',marginBottom:'-250px',textAlign:'center'}}>All Stocks</h4>
                </div>
                <br/>
                <br/>
                <div className="col-lg-9 mt-2 mb-2"><br/><br/>
                <button className="btn-grad" style={{width:'200px'}}>
                    <a href="/AddStock" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    Create New Stock
                    </a>
                    </button>

            &nbsp;&nbsp;&nbsp;
            <button className="btn-grad" style={{width:'160px'}}>
                    <a href="/viewItem" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    View Items
                    </a>
                    </button>
                  

                    &nbsp;&nbsp;&nbsp;
            <button className="btn-grad" style={{width:'160px'}}>
                    <a href="/Deficit" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    Deficits
                    </a>
                    </button>
                    <br/><br/>
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}
                        style={{width:'350px',marginLeft:'700px',marginTop:'-60px'}}>
                    </input>
                </div>

                <h4 style={{color:'black',fontWeight:'bolder',marginTop:'50px'}}> Total number of Stocks: {this.state.stocks.reduce(
                           (sum,stock)=>stock.Quantity+sum,0
                       )}
                </h4>
            
               <table className="table table-hover" style={{marginTop:'40px'}}>
                   <thead>
                    <tr  style={{fontWeight:'bold',color:'black',fontSize:'20px'}}>
                        <th scope="col">#</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Category</th>
                        <th scope="col">Quantity</th>
                        {/*<th scope="col">Total number of Items</th>*/}
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                <tbody>
                    {this.state.stocks.map((stocks,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/StockDetails/${stocks._id}`} style={{textDecoration:'none'}}>
                                {stocks.ItemCode}
                            </a>
                        </td>
                        <td>{stocks.Category}</td>
                        <td>{stocks.Quantity}</td>
                        {/*<td>{getTotal().toFixed(2)}</td>*/}
                        <td>
                       <a className="btn btn-warning" href={`/EditStock/${stocks._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(stocks._id)}>
                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </a>

                        </td>
                    </tr>
                    ))}
                </tbody>
               </table>
                    
            </div>
            
            </div>
            </div>
            
        )
    }
}