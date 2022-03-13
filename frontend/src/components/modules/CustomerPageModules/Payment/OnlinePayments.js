import React, { Component } from 'react';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import './OnlinePayment.css';
import {Container, Row, Col, Form} from 'react-bootstrap'
import { Button } from 'react-responsive-button';
import axios from 'axios';
import DatePicker from 'react-date-picker'
import 'react-responsive-button/dist/index.css';
import BG from "../../../../images/addexpense.jpg";

import { useLocation } from 'react-router-dom'


class OnlinePayment extends Component {

  constructor(props){
    super(props);
    this.state={
      date:new Date(),
      orderID:"",
      cusID:"",
      productCode:"",
      amount:"",
      paySlip:"",
      url:"",

      error:{},
      error1:{}
    }
  }
  

  handleInputChange =(e) =>{
    const {name,value}=e.target;
    this.setState({
        ...this.state,
        [name]:value
    })
  }


  postDetails = () =>{
    const data = new FormData()

    data.append("file","paySlip")
    data.append("upload_preset","onlinePayments")
    data.append("cloud_name","djpn8saoa")

    fetch("	https://api.cloudinary.com/v1_1/djpn8saoa/paySlip/upload",{
      method:"post",
      body:data
    })
    .then(res=>res.json())
    .then(data=>{
      this.setUrl(data.url)
      console.log(data)
    })
    .catch(err=>{
      console.log(err)
    })
  }

  formValidation = () =>{
    const{orderID,cusID,productCode,amount}=this.state;
    let isValid = true;
    const error = {};
    const error1 = {};

    if(!orderID){
      error["orderEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    if(!cusID){
      error["cusIDEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    if(!productCode){
      error["productCodeEmpty"] = "This field cannot be empty!";
      isValid=false;
    }

    // if(!amount){
    //   error["amountEmpty"] = "This field cannot be empty!";
    //   isValid=false;
    // }

    this.setState({error:error});
        return isValid;
  }

onChange = date => this.setState({ date })

onSubmit =(e) =>{
  e.preventDefault();

  const isValid = this.formValidation();
        if(isValid){

  const {date,orderID,cusID,productCode,amount,paySlip,url} = this.state;

  const data = {
      date:date,
      orderID:orderID,
      cusID:cusID,
      productCode:productCode,
      amount:amount,
      paySlip:paySlip,
      url:url
  }

  console.log(data)

  axios.post("/pay/save",data).then((res)=>{
      if(res.data.success){
        alert("Payment Slip Uploaded");
          this.setState(
              {
                  date:"",
                  orderID:"",
                  cusID:"",
                  productCode:"",
                  amount:"",
                  paySlip:""
              }
          )
      }
  })
  }
  console.log("inside on submit")

}  
   

  render() {
    
    const { data } = this.props.location
    this.state.amount = data;

    const{error}=this.state;

        return (
          <div class="centered">
          <div className="paymentbg">
           
            

              <div className="form-bg">

                <div className="namelables">
                <Container style={{backgroundColor:'rgba(0, 0, 0, 0.6)', marginTop:'20px' , height:'500px',
                    backgroundImage: `url(${BG})`,
                    backgroundAttachment: "fixed",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover" }}>

                <br/>
                <div>
                    <h2 style={{textAlign:'center', color:'rgba(207, 0, 15, 1)', fontWeight:'bold', fontSize:'40px'}}><b>Pay Online</b></h2>
                </div>
                <br/>
                  <Form>

                  <Form.Group as={Row} className="lable-opay" controlId="orderId">
                      <Form.Label column sm={5} style={{marginLeft:'150px', color:'white', fontSize:'24px'}}><b>Date</b></Form.Label>
                      <Col sm={5}>
                      <input type="date" style={{marginLeft:'-150px'}}
                        className='form-control'
                        name='date'
                        value={this.state.date}
                        onChange={this.handleInputChange} required/>
                        <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>

                    <br/>

                  <Form.Group as={Row} className="lable-opay" controlId="orderId">
                      <Form.Label column sm={5} style={{marginLeft:'150px', color:'white', fontSize:'24px'}}><b>Customer Name</b></Form.Label>
                      <Col sm={5}>
                      <input type='text' style={{marginLeft:'-150px', width:'445px', borderRadius:'0px'}}
                               className='form-control'
                               name='orderID'
                               placeholder='xxxxx'
                               value={this.state.orderID}
                               onChange={this.handleInputChange} required/>
                              <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="lable-opay" controlId="cusId">
                      <Form.Label column sm={5} style={{marginLeft:'150px', color:'white', fontSize:'24px'}}><b>Customer ID</b></Form.Label>
                      <Col sm={5}>
                      <input type='text' style={{marginLeft:'-150px', width:'445px', borderRadius:'0px'}}
                               className='form-control'
                               name='cusID'
                               placeholder='XXXX'
                               value={this.state.cusID}
                               onChange={this.handleInputChange} required/>
                               <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>

                    <Form.Group as={Row} className="lable-opay" controlId="productCode">
                      <Form.Label column sm={5} style={{marginLeft:'150px', color:'white', fontSize:'24px'}}><b>Number of Items</b></Form.Label>
                      <Col sm={5}>
                      <input type='text' style={{marginLeft:'-150px', width:'445px', borderRadius:'0px'}}
                               className='form-control'
                               name='productCode'
                               placeholder='XXXX'
                               //value={getCartCount()}
                               onChange={this.handleInputChange} required/>
                               <div className="text-danger">{this.state.error.orderEmpty}</div>
                      </Col>
                    </Form.Group>
                  
                    <Form.Group as={Row} className="lable-opay" controlId="amount">
                      <Form.Label column sm={5} style={{marginLeft:'150px', color:'white', fontSize:'24px'}}><b>Amount</b></Form.Label>
                        <Col sm={5}>
                        <input type='number' min="1" style={{marginLeft:'-150px'}}
                               className='form-control'
                               name='amount'
                               placeholder='000000.00'
                               value={data}
                               onChange={this.handleInputChange} 
                                readOnly/>
                               
                        </Col>
                    </Form.Group>
                  
                    <Form.Group as={Row} className="lable-opay" controlId="paySlip">
                      <Form.Label column sm={5} style={{marginLeft:'150px', color:'white', fontSize:'24px'}} ><b>Pay Slip</b></Form.Label>
                        <Col sm={5}>
                        <div>
                        <input type='file' style={{marginLeft:'-150px'}}
                               className='form-control'
                               name='paySlip'
                               value={this.state.paySlip}
                               onChange={this.handleInputChange} required/>
                        </div>
                         
                        </Col>
                    </Form.Group>
            
                    <Form.Group as={Row} className="btn-submit">
                      <Col sm={{ span: 10, offset: 2 }}>
                      <Button type="submit" variant="outline-dark" style={{marginBottom : "10px", marginLeft: "650px", borderRadius: "6px" ,background:'rgba(207, 0, 15, 0.6)'}} onClick={this.onSubmit} >&nbsp;Submit&nbsp;</Button>
                      </Col>
                    </Form.Group>

                  </Form>
                  </Container>

                  <br/>
                  <br/>
                </div>

              </div>
            </div> 
          </div>  
        );
  }
}

export default OnlinePayment;