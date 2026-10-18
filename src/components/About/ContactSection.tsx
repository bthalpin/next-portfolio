import ContactWrapper from '@/components/ContactWrapper';

import { MdOutlineMail } from "react-icons/md";

import styles from '@/styles/about.module.css';

export default function ContactSection () {
    return (
        <div className={styles.header_container}>
            {/* <div className={styles.portrait}>
                <img src='/images/brian-main-portrait.png' alt="Brian Halpin portrait"></img>
            </div> */}

            <div className={styles.header_contact_container}>
                <a href={'mailto:brian@bthalpin.com'} target={'_blank'}>
                    <MdOutlineMail />
                    <p>brian@bthalpin.com</p>
                </a>

                <a href={'https://linkedin.com/in/bthalpin/'} target={'_blank'}>
                    
                    <img className={styles.linkedInLogo} src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img> 
                    <p>LinkedIn</p>

                </a>

                <a href={'"https://github.com/bthalpin'} target={'_blank'}>
                    
                    <img className={styles.githubLogo} src="/images/github-logo.png" alt="GitHub Logo"></img> 
                    <p>GitHub</p>

                </a>
                
                <ContactWrapper />
            </div>
        </div>
    )
}