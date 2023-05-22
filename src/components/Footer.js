import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={`${styles.footer} mt-auto py-3`}>
            <div className={styles.container}>
                <div>Contact Information: <a href="mailto:harrisonwilliamryan@gmail.com" className={styles['link-style']}>harrisonwilliamryan@gmail.com</a></div>
                <div>
                    <a href="https://github.com/hwryan12" target="_blank" rel="noopener noreferrer" className={`${styles['link-style']} ${styles['link-spacing']}`}>GitHub</a>
                    <a href="https://www.linkedin.com/in/harrison-ryan-2b987725a/" target="_blank" rel="noopener noreferrer" className={styles['link-style']}>LinkedIn</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;