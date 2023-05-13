import React, { useState } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from './About';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
                <Navbar.Brand as={Link} to="/">Portfolio</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link as={Link} to="/school-projects">School Projects</Nav.Link>
                        <Nav.Link as={Link} to="/personal-projects">Personal Projects</Nav.Link>
                        <Nav.Link onClick={handleShow}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <About show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;