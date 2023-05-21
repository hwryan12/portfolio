import React, { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import About from './About';
import styles from './Welcome.module.css'; 

const Welcome = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid className={`${styles.container} text-center`}>
            <div className={styles.textContainer}>
                <h1 className="display-3">Coding and design, done with love</h1>
                <p className="lead">Software Developer, Backend Engineer, and LEGO aficionado</p>
                <div className={styles.linksContainer}>
                    <Button variant="outline-light" className="m-2 custom-shadow" as={Link} to="/projects">My projects</Button>
                    <Button variant="outline-light" className="m-2 custom-shadow" onClick={handleShow}>About me</Button>
                </div>
            </div>
            <About show={show} handleClose={handleClose} />
        </Container>
    );
};

export default Welcome;

