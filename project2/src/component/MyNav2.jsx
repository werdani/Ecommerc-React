import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from "react-router-dom";
import { CounterContext } from "../context/countercntext";
import CounterProvider from "../context/CounterProvider";

export default function MyNav2() {
   let {count} = useContext(CounterContext)
    return(
        <div>
        <Navbar bg="dark" variant="dark">
         <Container>
            <Navbar.Brand>VITTORIO STORE</Navbar.Brand>
            <Nav className="me-auto">
               <NavLink className="nav-link" to="/">Home</NavLink>
               <NavLink className="nav-link" to="/products">Products</NavLink>
               <NavLink className="nav-link" to="/about">About</NavLink>
               <NavLink className="nav-link" to="/users">Users</NavLink>
               <NavLink className="nav-link" to="/counter">Counter</NavLink>
               <NavLink className="nav-link" to="">Count {count}</NavLink>
               <NavLink className="nav-link" to="/login">LogIn</NavLink>
            </Nav>
         </Container>
         </Navbar>

        </div>
    )
}
