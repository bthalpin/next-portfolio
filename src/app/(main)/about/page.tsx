import ContactWrapper from '@/components/ContactWrapper';
import styles from '@/styles/about.module.css';
import Link from 'next/link';
import { Suspense } from 'react';

export default function Page () {
    return (
        <div className={styles.about_page}>
            <section className={styles.header}>
                <div className={styles.about_section}>
                    <div>

                        <p className={styles.header_top_text}>Hi, I'm</p>
                        <h2 className={styles.header_name}>Brian <span>Halpin</span></h2>
                        <div className={styles.header_skills}>
                            <p>Full Stack Developer</p>
                            <div></div>
                            <p>Next.js</p>
                            <div></div>
                            <p>TypeScript</p>
                            <div></div>
                            <p>AWS</p>
                        </div>
                    </div>


                    <p className={styles.about_text}>I build and maintain scalable production web applications that solve complex business problems.  Over the past 3+ years, I've taken on increasing responsibility - from junior developer to lead developer - overseeing architecture decisions, production deployments, and code quality across multiple live applications.</p>
                
                    <div className={styles.header_button_container}>
                        <Link href={'/work'}>
                            View My Work
                        </Link>

                        <a href={'/documents/Brian-Halpin-Resume.pdf'} download>
                            Download Resume
                        </a>
                    </div>

                    <div className={styles.header_icon_container}>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
                <div>
                    <div className={styles.portrait}>
                        <img src='/images/brian-main-portrait.png' alt="Brian Halpin portrait"></img>
                    </div>

                    <div className={styles.header_contact_container}>
                        <a href={'mailto:brian@bthalpin.com'}>
                            
                            <img className={styles.emailLink} src="/icons/mail_icon.png" alt="Email icon"></img> 
                            <p>brian@bthalpin.com</p>

                        </a>

                        <a href={'mailto:brian@bthalpin.com'}>
                            
                            <img className={styles.linkedInLogo} src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img> 
                            <p>LinkedIn</p>

                        </a>

                        <a href={'mailto:brian@bthalpin.com'}>
                            
                            <img className={styles.githubLogo} src="/images/github-logo.png" alt="GitHub Logo"></img> 
                            <p>GitHub</p>

                        </a>

                        <Suspense fallback={
                            <div>
                                <img className={styles.githubLogo} src="/icons/chat_icon.png" alt="GitHub Logo"></img> 
                                
                                <p>Let's Connect!</p>
                            </div>
                        }>
                            <ContactWrapper />
                        </Suspense>
                    </div>
                </div>
            </section>

        </div>
    )
}