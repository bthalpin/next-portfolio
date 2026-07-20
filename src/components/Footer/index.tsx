import React from 'react';

import ContactButton from '../ContactButton';
import { MdOutlineMail } from 'react-icons/md';

import styles from '@/styles/components/footer.module.css';

const Footer = () => {

    return (
        <div className={styles.footer}>
            <div className={styles.footer_container}>
                <div className={styles.footer_contact}>
                    <h3>HALPIN</h3>
                    <h4>Let's Connect</h4>
                    <p>I'm always open to discussing new opportunities on interesting projects.</p>
                    
                    <ContactButton />
                </div>
                <div className={styles.footerContainer}>
                    <a href="https://github.com/bthalpin">
                        <img className={styles.githubLogo} src="/images/github-logo.png" alt="GitHub Logo"></img> 
                    </a>
                    <a href="https://www.linkedin.com/in/brian-halpin/">
                        <img className={styles.linkedInLogo} src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img> 
                    </a>
                    <a href="mailto:brian@bthalpin.com" className={styles.emailLink}>
                        <MdOutlineMail   />
                        {/* <img className={styles.emailLink} src="/icons/mail_icon.png" alt="Email icon"></img>  */}
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Footer;