import React, { Component } from 'react';  
import Container from 'react-bootstrap/Container'
import './PayForm.css'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
//import Row from 'react-bootstrap/esm/Row';
class Debtpay extends Component {  
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
        };
      }
      myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "amount") {
          if (!Number(val)) {
            alert("Amount must be a number");
          }
        }
        this.setState({[nam]: val});
      }
 
  render() {  
    return (  
    <div>
        <br></br> 
        <Container>
                <h1>Payment {this.state.username} {this.state.age}</h1>
                <form style={{paddingLeft:50, backgroundColor:'#ab001a'}}>
                <br></br>
                <Row>
                  <Col>
                    <p>ID</p>
                    <input
                        type='text'
                        name='username'
                        onChange={this.myChangeHandler}
                    /> <Button variant="secondary">Search</Button>
 
                    </Col>
                  </Row>
                  <p></p>     
                  <p>Name </p> 
                  <input
                      type='text'
                      name='username'
                      onChange={this.myChangeHandler}
                  />
                  <p></p> 
                  <p>Amount Due</p>
                  <input
                      type='text'
                      name='amount1'
                      value='Rs.xxxxxxx'
                      onChange={this.myChangeHandler}
                  />
                  <p></p> 
                  <p>Amount Paid</p> 
                  <input
                      type='text'
                      name='amount'
                      onChange={this.myChangeHandler}
                  />
                  <p></p> 
                  <p>Balance:</p>
                  <input
                      type='text'
                      name='amount2'
                      value='Rs.xxxxxxx'
                      onChange={this.myChangeHandler}
                  />
                  <p></p>
                  <br></br>
                      <input type="submit" value="Submit" /> 
                      <br></br> 
                      <br></br> 
                  </form>
                  <br></br> 
          </Container>
          <br></br> 
        </div>
      );  
    }  
  }  
  export default Debtpay;