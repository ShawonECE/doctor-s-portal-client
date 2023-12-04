import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Navbar expand="lg" >
            <Container>
                <Navbar.Brand>Doctor's Portal</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link className='ms-3'>Home</Nav.Link>
                        <Nav.Link className='ms-3'>About</Nav.Link>
                        <Nav.Link className='ms-3'>Appointment</Nav.Link>
                        <Nav.Link className='ms-3'>Reviews</Nav.Link>
                        <Nav.Link className='ms-3'>Contact Us</Nav.Link>
                        <Nav.Link className='ms-3'>Log in</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;