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
            <Navbar collapseOnSelect expand="lg" variant="dark" className={`p-3 ${styles.blackBackground}`}>
                <Navbar.Text className={`${styles.ml3} ${styles.mr3} ${styles.boldText}`}>Harrison Ryan</Navbar.Text>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                    <Nav>
                        <NavDropdown title="Portfolio" id="collasible-nav-dropdown" className={styles.navbarItem}>
                            <NavDropdown.Item as={Link} to="/school-projects" className={styles.dropdownItem}>School Projects</NavDropdown.Item>
                            <NavDropdown.Item as={Link} to="/personal-projects" className={styles.dropdownItem}>Personal Projects</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link onClick={handleShow} className={styles.navbarItem}>About Me</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
            <About show={show} handleClose={handleClose} />
        </>
    );
};

export default Header;
