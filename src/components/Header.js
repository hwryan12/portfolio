import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from './About';
import styles from './Header.module.css';

const Header = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="p-3">
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                    <Navbar.Text className={`${styles.ml3} ${styles.mr3} ${styles.boldText}`}>Harrison Ryan</Navbar.Text>
                        <NavDropdown title="Portfolio" id="collasible-nav-dropdown">
                            <NavDropdown.Item as={Link} to="/school-projects">School Projects</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/personal-projects">Personal Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={handleShow}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <About show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
