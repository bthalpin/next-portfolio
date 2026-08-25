import Highlights from '@/components/About/HighLights';
import AboutSection from '@/components/About/AboutSection';
import ContactSection from '@/components/About/ContactSection';

import TechnicalSkills from '@/components/About/TechnicalSKills';
import Career from '@/components/About/Career';

import styles from '@/styles/contact.module.css';
import FeaturedWork from '@/components/About/FeaturedWork';
import ContactOptions from '@/components/Contact/ContactOptions';
import ContactButton from '@/components/ContactButton';
import { MdOutlineMail } from 'react-icons/md';
import LookingFor from '@/components/Contact/LookingFor';
import FAQ from '@/components/Contact/FAQ';
import { IoConstructOutline } from "react-icons/io5";

export default function Page () {
    return (
        <div className={styles.contact_page}>
            
            <section className={styles.header}>
                <div className={styles.contact_section}>
                    <div>

                        <p className={styles.header_top_text}>CONTACT</p>
                        <h2 className={styles.header_name}>Let's Work Together</h2>
                        
                    </div>


                    <p className={styles.contact_text}>I'm always open to discussing new opportunities or working on interesting projects.</p>
        
                </div>

                <div className={styles.portrait}>
                    <img src='/images/brian-main-portrait.png' alt="Brian Halpin portrait"></img>
                </div>

            </section>

            <section className={styles.contact_get_in_touch}>
                <p>Get In Touch</p>
                <div className={styles.contact_get_in_touch_container}>
                    <ContactOptions />

                    <div className={styles.contact_availability_container}>
                        <div className={styles.contact_availability_container_top_card}>
                            <p>Availability</p>
                            <p>Open to Opportunities</p>
                            <p>I'm currently open to full-time opportunities where I can contribute, grow, and help build impactful software.</p>
                            <ContactButton />
                            
                        </div>

                        <div className={styles.contact_availability_container_bottom_card}>
                            <p>Response Time</p>
                            <div className={styles.contact_availability_timing}>
                                <MdOutlineMail />
                                <p>Usually within 24 hours</p>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            <LookingFor />

            <section className={styles.faq_section}>
                <FAQ />

                <div className={styles.faq_supplemental_text}>
                    <p>Let's build something great together.</p>
                    <p>Whether you have a question, a project in mind, or just want to connect.  I'd love to hear from you!</p>
                    <IoConstructOutline  />
                </div>
            </section>
        </div>
    )
}