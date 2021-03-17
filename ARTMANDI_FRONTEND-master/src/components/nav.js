import React from 'react'
import {Nav,Navbar,NavDropdown,Button} from 'react-bootstrap'
import { BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import userServices from "../Services/UserServices";

  const nav = () => {
    // const isLogged = false
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand >ARTMANDI</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Link className="nav-link" to={"/"}>HOME</Link> 
      <Link className="nav-link" to={"/chatbox"}>MESSAGES</Link> 
     <Link className="nav-link" to={"/Seller"}>BECOME A SELLER</Link> 
     <Link className="nav-link" to={"/buyer"}>BECOME A BUYER</Link> 
     
    </Nav>
    <Nav>
    <Link className="nav-link" to={"/Login"}>LOGIN</Link>

      <Link className="nav-link" to={"/signup"}>SIGNUP</Link> 
        {/* <Button onClick={e=>{
              userServices.logout();
                window.location.href="/login"
            }}>Logout {userServices.getLoggedInUser()}</Button> */}
    </Nav>
  </Navbar.Collapse>
</Navbar>
        </div>

    )
}
export default nav;