import React, { Component } from 'react';
import axios from 'axios';
//import deficits from '../../../../../../BACKEND/models/Stock_admin/deficits';
import './stock.css';

export default class Deficit extends Component {
    constructor(props){
        super(props);

        this.state={
            deficits:[]
        };
    }

    componentDidMount(){
        this.retrieveDeficits();
    }

    retrieveDeficits(){
        axios.get("/deficits").then(res=>{
            if(res.data.success){
                this.setState({
                    deficits:res.data.existingDeficits
                });

                console.log(this.state.deficits)
            }
        });
    } 

    onDelete = (id) =>{
        axios.delete(`/deficit/delete/${id}`).then((res)=>{
            alert("Deficit Deleted Successfully!");
            this.retrieveDeficits();
        })
    }

    //Search bar
    filterData(deficits,searchKey){
        const result = deficits.filter((deficit)=>
            deficit.DeficitCode.toLowerCase().includes(searchKey)|| //toLowerCase() helps to filter the data using the lowercase letters.
            deficit.DeficitCode.toUpperCase().includes(searchKey)|| //toUpperCase() helps to filter the data using the Uppercase letters. 
            deficit.Category.toLowerCase().includes(searchKey)||
            deficit.Category.toUpperCase().includes(searchKey)
        )

        this.setState({deficits:result})
    }
    handleSearchArea = (e)=>{
        const searchKey = e.currentTarget.value;

        axios.get("/deficits").then(res=>{
            if(res.data.success){
                this.filterData(res.data.existingDeficits,searchKey)
            }
        });
    }

    render() {
        return (
            <div className="container" style={{backgroundColor:'rgba(162, 217, 172 ,0.3)',margin:'40px',alignItems:'center',marginLeft:'20px',borderRadius:'40px'}}>
                
                <div className="row">
                <div className="col-lg-9 mt-2 mb-2">
                    <h4 style={{color:'#B91717',fontSize:'30px',fontWeight:'bold',marginBottom:'-250px',textAlign:'center'}}>All Deficits</h4>
                </div>
                <br/>
                <br/>
                <br/>
                <button class="btn btn-outline-danger" style={{width:'150px',marginRight:'230px',marginLeft:'50px'}}>
                    <a href="/Stock" style={{textDecoration:'none',color:'black',fontWeight:'bold'}}>
                       View Stocks
                    </a></button>
                       
                        <button className="btn-grad" style={{width:'250px',marginLeft:'-200px'}}>
                    <a href="/AddDeficit" style={{textDecoration:'none',color:'white',fontWeight:'bold'}}>
                        Inform new Deficits
                    </a>
                    </button>

                    <br/><br/>

                <div className="col-lg-9 mt-2 mb-2">
                    <input
                        className="form-control"
                        type="search"
                        placeholder="Search"
                        name="searchQuery"
                        onChange={this.handleSearchArea}
                        style={{width:'450px',marginLeft:'750px',marginTop:'-50px'}}>
                    </input>
                </div>
                   
                    <h4 style={{color:'black',fontWeight:'bolder',marginTop:'50px'}}> Total number of Required quantities: {this.state.deficits.reduce(
                           (sum,deficit)=>deficit.RequiredQuantity+sum,0
                       )}
                </h4>
                <br/>
                <table className="table table-hover" style={{marginTop:'40px'}}>
                   <thead>
                    <tr  style={{fontWeight:'bold',color:'black',fontSize:'20px'}}>
                        <th scope="col">#</th>
                        <th scope="col">Deficit Code</th>
                        <th scope="col">Category</th>
                        <th scope="col">Color</th>
                        <th scope="col">Required Quantity</th>
                        <th scope="col">Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.deficits.map((deficits,index)=>(
                    <tr key={index}>
                        <th scope="row">{index+1}</th>
                        <td>
                            <a href={`/DeficitDetails/${deficits._id}`} style={{textDecoration:'none'}}>
                                {deficits.DeficitCode}
                            </a>
                        </td>
                        <td>{deficits.Category}</td>
                        <td>{deficits.Color}</td>
                        <td>{deficits.RequiredQuantity}</td>
                        <td>
                       <a className="btn btn-warning" href={`/EditDeficit/${deficits._id}`}>
                                <i className="fas fa-edit"></i>&nbsp;Edit
                            </a>
                            &nbsp;
                            <a className="btn btn-danger" href="#" onClick={()=>this.onDelete(deficits._id)}>
                                <i className="far fa-trash-alt"></i>&nbsp;Delete
                            </a>

                        </td>
                       
                    </tr>
                    ))}
                    </tbody>
               </table><br/>
             
            </div>
                

            </div>
            
            
        )
    }
}
