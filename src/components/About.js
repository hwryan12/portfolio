import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import styles from './About.module.css';

const About = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose} className={styles.aboutModal}>
            <Modal.Header closeButton>
                <Modal.Title>About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <img src="path-to-your-image.jpg" alt="Harrison Ryan" className={styles.aboutImage} />
                <p>Howdy! I'm Harrison, a former Alaskan boat captain turned software developer. I've traded the icy waves up north for navigating a new kind of adventure; being a dad.</p>
                <p>When I'm not reminiscing about my seafaring days, you'll find me enjoying the outdoors hiking, learning random facts that are only useful at bar trivia nights, or orchestrating epic adventures as a Dungeon Master in a game of D&D.</p>
                <p>Nowadays, I'm keen on bringing my unique set of experiences to new arenas. If you're ever in need of a storied former boat captain who's equally comfortable leading a team or hosting a D&D campaign, well, you've found him.</p>
                <p>When I'm not savouring a cup of my favorite coffee, re-watching The Office for the umpteenth time, or cherishing moments with my family, I'm always up for making new connections and exploring fresh opportunities. Don't be a stranger, feel free to reach out! We can swap tales - from sailing adventures to Star Wars fan theories. Cheers!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className={styles.closeButton}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default About;