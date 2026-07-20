import Highlights from '@/components/About/HighLights';
import AboutSection from '@/components/About/AboutSection';
import ContactSection from '@/components/About/ContactSection';

import TechnicalSkills from '@/components/About/TechnicalSKills';
import Career from '@/components/About/Career';

import styles from '@/styles/about.module.css';
import FeaturedWork from '@/components/About/FeaturedWork';

export default function Page () {
    return (
        <div className={styles.about_page}>
            <section className={styles.header}>
                <AboutSection />
                <ContactSection />
            </section>

            <Highlights />
            <FeaturedWork />
            <TechnicalSkills />
            <Career />
        </div>
    )
}