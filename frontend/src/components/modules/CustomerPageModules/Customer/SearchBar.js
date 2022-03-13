import React from "react";
//import "../../../../bootstrap2.min.css";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

const Search = ({ setSearch }) => {
  return (
    <Navbar expand="lg" bg="primary">
      <Container style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto">
            <Form inline>
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                onChange={(e) => setSearch(e.target.value)}
              />
            </Form>
          </Nav>

          <Nav>
            <Nav.Link href="/">
              <Link to="/purchases">
                <b style={{ color: "red" }}>My purchases</b>
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Search;
