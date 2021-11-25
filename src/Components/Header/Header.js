import React,{useState} from 'react'
import "./Header.css";
import { Nav, Navbar, NavDropdown, Container, Button, FormControl, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import {filterData,searchProduct} from "../../redux/action"
const Header = () => {
  let history = useHistory();
  const [ input ,setInput ] = useState("")

  const search = (e) => {
    let {value} = e.target

    setInput(value)
    searchProduct(value,(callback) => {
      
    })
  }
  
  let details = useSelector((state)=> state);
  console.log("details.cartProducts",details.cartProducts)
  let dispatch = useDispatch();
    return (<>

        <Navbar bg="light" expand="lg">
            <Container fluid>
                <Navbar.Brand href="#">Telus International</Navbar.Brand>
              
                <Form className="d-flex">
                        <FormControl
                            type="search"
                            value={input}
                            onChange={search}
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                        />
                      
                    </Form>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse className="justify-content-end">
                    {/* <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Cart [{details && details.cartProducts.length}]</NavDropdown.Item>
         
          <NavDropdown.Divider />
          <NavDropdown.Item  onClick={()=>history.push("Login")}>
          Logout
          </NavDropdown.Item>
        </NavDropdown> */}
        
      <Navbar.Text>
        <div className="cartDetails d-inline position-relative me-2">
          <span className="position-absolute">{details.cartProducts.length}</span>
            <i className="fa fa-shopping-cart" onClick={() => history.push("/Cart")}></i>
          </div>
        
        Signed in as: <a href="#login">{details.username}</a>
        <span onClick={() => history.push("/Charts")}>Charts</span>

        <span onClick={()=>history.push("Login")} className="ms-2">
        Logout
        </span>
      </Navbar.Text>
    </Navbar.Collapse>

   
            </Container>
        </Navbar>
    </>);
}

export default Header;