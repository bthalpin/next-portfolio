import AdditionalWork from '@/components/Work/AdditionalWork';
import FeaturedWork from '@/components/Work/FeaturedWork';
import Highlights from '@/components/Work/HighLights';
import { CiCloudOn } from "react-icons/ci";

import styles from '@/styles/work.module.css';
import ContactButton from '@/components/ContactButton';

export default function Page () {
    return (
        <div className={styles.work_page}>
            <section className={styles.header}>
                <div className={styles.work_section}>
                    <div>

                        <p className={styles.header_top_text}>MY WORK</p>
                        <h2 className={styles.header_name}>Projects That Drive Impact</h2>
                        
                    </div>


                    <p className={styles.contact_text}>Here are some of the professional projects I've led or contributed to.  These platforms are used in production and server real customers every day.</p>
        
                </div>
            </section>

            <Highlights />
            <FeaturedWork />
            <AdditionalWork />

            <div className={styles.work_disclaimer}>
                <CiCloudOn />
                <div>
                    <p>All projects are proprietary and can't be shared publicly.</p>
                    <p>I'm happy to discuss additional work and responsibilities in more detail.</p>
                </div>
                <ContactButton />
            </div>
        </div>
    )
}
