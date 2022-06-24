import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";

export default function MyNav2() {
    return(
        <div>
        <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand href="#home">VITTORIO STORE</Navbar.Brand>
            <Nav className="me-auto">
               <NavLink className="nav-link" to="/">Home</NavLink>
               <NavLink className="nav-link" to="/products">Products</NavLink>
               <NavLink className="nav-link" to="/profile">Profile</NavLink>
               <NavLink className="nav-link" to="/about">About</NavLink>
               <NavLink className="nav-link" to="/login">LogIn</NavLink>
            </Nav>
         </Container>
         </Navbar>

        </div>
    )
}
