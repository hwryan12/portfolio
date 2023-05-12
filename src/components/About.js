import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const About = ({ show, handleClose }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>About Me</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>Howdy! I'm Harrison, a former Alaskan boat captain turned... well, something entirely different! I've traded the icy waves for a different kind of adventure - but don't worry, it's not all tech and code, it's more about navigating the uncharted territories of life.
                  When I'm not reminiscing about my seafaring days, you'll find me in the thick of family life as a husband and dad, or masterfully orchestrating epic adventures in a game of D&D. My voyage from the helm to the home has taught me so much about teamwork and clear communication - skills that are as crucial in daily life as they are in any professional environment.</p>
                <p>Nowadays, I'm keen on bringing my unique set of experiences to new arenas. If you're ever in need of a storied former boat captain who's equally comfortable leading a team or hosting a D&D campaign, well, you've found him.
                  When I'm not savouring a cup of my favorite coffee, re-watching Star Wars for the umpteenth time, or cherishing moments with my family, I'm always up for making new connections and exploring fresh opportunities. Don't be a stranger, feel free to reach out! We can swap tales - from sailing adventures to Star Wars theories, or even our favorite coffee brews. Cheers, and may the Force (or the Coffee) be with you!</p>
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