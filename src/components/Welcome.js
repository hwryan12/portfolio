import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import About from './About';
import styles from './Welcome.module.css'; 

const Welcome = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className={styles.container}>
            <div className={styles.textContainer}>
                <h1>Coding and design, done with love</h1>
                <h3>Software Developer, Backend Engineer, and LEGO aficionado</h3>
                <div className={styles.linksContainer}>
                    <Button className="bg-dark text-white m-2 custom-shadow" as={Link} to="/projects">My projects</Button>
                    <Button className="bg-dark text-white m-2 custom-shadow" onClick={handleShow}>About me</Button>
                    <Button className="bg-dark text-white m-2 custom-shadow" as={Link} to="/projects">Thoughts</Button>
                </div>
            </div>
            <About show={show} handleClose={handleClose} />
        </div>
    );
};

export default Welcome;