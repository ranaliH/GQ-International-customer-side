import React, { Component } from 'react';
import axios from 'axios';


export default class Item extends Component {
    constructor(props){
        super(props);

        this.state={
            items:[]
        };
    }

    componentDidMount(){
        this.retrieveItems();
    }

    retrieveItems(){
        axios.get("/items/get").then(res=>{
            if(res.data.success){
                this.setState({
                    items:res.data.existingItems
                });

                console.log(this.state.items)
            }
        });
    } 

    onDelete = (id) =>{
        axios.delete(`/item/delete/${id}`).then((res)=>{
            alert("Item Deleted Successfully!");
            this.retrieveItems();
        })
    }

    //Search bar
    filterData(items,searchKey){
        const result = items.filter((item)=>
            item.itemCode.toLowerCase().includes(searchKey)|| //toLowerCase() helps to filter the data using the lowercase letters.
            item.itemCode.toUpperCase().includes(searchKey)|| //toUpperCase() helps to filter the data using the Uppercase letters. 
            item.color.toUpperCase().includes(searchKey)||
            item.color.toLowerCase().includes(searchKey)
        )

        this.setState({items:result})
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;

        axios.get("/items/get").then(res=>{
            if(res.data.success){
                this.filterData(res.data.existingItems,searchKey)
            }
        });
    }

    render() {
        return (
            <div className="card" style={{backgroundColor:'white',width:'100%',border:'none',margin:'40px'}}>
            <div className="container">
                
                <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                
            

                    <h4 style={{color:'#B91717',fontSize:'40px',fontWeight:'bold',marginBottom:'-250px',textAlign:'center'}}>All Items</h4>
                </div>
                <br/><br/><br/>
                <div className="col-lg-9 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}
                        style={{width:'400px',backgroundColor:'rgb(238, 234, 202)'}}>
                    </input>
                    
                </div>
                <br/><br/><br/>
                
                <button class="btn btn-outline-danger" style={{marginRight:'300px', width:'150px'}}>
                <a href="/Stock" style={{textDecoration:'none',color:'black',fontWeight:'bold',}}>
                    View Stock
                </a></button> 
                    
         
            <button className="btn btn-success" style={{marginLeft:'-280px',width:'200px'}}>
                    <a href="/AddItem" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                    Create a New Item
                    </a>
                    </button> 
                    &nbsp;&nbsp;
                    <div className="card" style={{width:'500px',height:'40px',borderRadius:'50px',alignItems:'center',display:'flex'}}>
                    <h4 style={{color:'black',fontWeight:'bolder'}}> Total number of Items in the stock: {this.state.items.reduce(
                               (sum,item)=>item.countInStock+sum,0
                           )}
                    </h4></div>
                

                <table className="table table-hover" style={{marginTop:'40px',width:'100%'}}>
                   <thead>
                    <tr style={{fontWeight:'bold',color:'black',fontSize:'20px'}}>
                        <th scope="col">#</th>
                        <th scope="col">Item Code</th>
                        <th scope="col">Description</th>
                        <th scope="col">unitPrice</th>
                        <th scope="col">Color</th>
                        <th scope="col">CountInStock</th>
                        <th scope="col">image url</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.items.map((items,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/ItemDetails/${items._id}`} style={{textDecoration:'none'}}>
                                {items.itemCode}
                            </a>
                        </td>
                        <td>{items.description}</td>
                        <td>{items.unitPrice}</td>
                        <td>{items.color}</td>
                        <td>{items.countInStock}</td>
                        <td>{items.imageUrl}</td>
                        
                        <td></td>
                        <td>
                        <a className="btn btn-warning" href={`/EditItem/${items._id}`} style={{marginLeft:'-100px'}}>
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                          &nbsp;&nbsp;&nbsp;&nbsp;
                          
                
                            <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(items._id)} style={{width:'100px'}}>
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
