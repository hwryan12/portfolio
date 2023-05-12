import React from 'react';

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-dark text-white">
            <div className="container d-flex justify-content-between">
                Contact Information: <a href="mailto:harrisonwilliamryan@gmail.com" style={{color: "inherit"}}>harrisonwilliamryan@gmail.com</a>
                <a href="https://github.com/hwryan12" target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>GitHub</a>
                <a href="https://www.linkedin.com/in/harrison-ryan-2b987725a/" target="_blank" rel="noopener noreferrer" style={{color: "inherit"}}>Linkedin</a>
            </div>
        </footer>
    );
};

export default Footer;

