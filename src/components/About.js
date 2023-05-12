import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const About = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Howdy! I'm Harrison, a former Alaskan boat captain turned software developer. I've traded the icy waves for a different kind of adventure; navigating the uncharted territories of being a new dad.
                  When I'm not reminiscing about my seafaring days, you'll find me enjoying the outdoors hiking, or masterfully orchestrating epic adventures in a game of D&D. My voyage from the helm to the home has taught me so much about teamwork and clear communication.</p>
                <p>Nowadays, I'm keen on bringing my unique set of experiences to new arenas. If you're ever in need of a storied former boat captain who's equally comfortable leading a team or hosting a D&D campaign, well, you've found him.
                  When I'm not savouring a cup of my favorite coffee, re-watching The Office for the umpteenth time, or cherishing moments with my family, I'm always up for making new connections and exploring fresh opportunities. Don't be a stranger, feel free to reach out! We can swap tales - from sailing adventures to Star Wars theories. Cheers, and may the Force (or the Coffee) be with you!</p>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default About;