import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
// import '../../styles/NavbarStyle.css'

export default function NavbarComponent() {
    return (
        <div className='NavbarContainer'>
            <Navbar expand="lg" className='navbar-dark'>
                <Container>
                    <Navbar.Brand href="#home">Logo</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Link href="#home">Work</Nav.Link>
                            <Nav.Link href="#link">Service</Nav.Link>
                            <Nav.Link href="#contact">Contact</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
