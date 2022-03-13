import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import ErrorMessage from "../../modules/CustomerPageModules/Customer/ErrorMessage";
import Loading from "../../modules/CustomerPageModules/Customer/Loading";
import MainScreen from "../../modules/CustomerPageModules/Customer/MainScreen";
import "./LoginScreen.css";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/customerActions";

const LoginScreen = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const customerLogin = useSelector((state) => state.customerLogin);
  const { loading, error, customerInfo } = customerLogin;

  useEffect(() => {
    const customerInfo = localStorage.getItem("customerInfo");
    if (customerInfo) {
      history.push("/profile");
    }
  }, [history, customerInfo]);

  const submitHandler = async (e) => {
    e.preventDefault();

    dispatch(login(email, password));
  };

  return (
    <MainScreen title="LOGIN">
      <div className="loginContainer">
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        {loading && <Loading />}
        <Form onSubmit={submitHandler}>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <br />
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Row className="py-3">
          <Col>
            New Customer ? <Link to="/register">Register Here</Link>
          </Col>
        </Row>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <Button variant="primary" href="/Adminlogin">
          Admin login
        </Button>
      </div>
    </MainScreen>
  );
};

export default LoginScreen;
