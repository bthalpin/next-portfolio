
import { IoCodeSlashOutline } from "react-icons/io5";
import styles from '@/styles/skills.module.css';
import SkillSection from "@/components/Skills/SkillSection";

export default function Page () {
    return (
        <div className={styles.skills_page}>
            <section className={styles.skills_header_section}>
                <div>
                    <p className={styles.skills_sub_header}>SKILLS</p>
                    <h3 className={styles.skills_header}>Technologies I Work With</h3>
                    <p>The technologies below represent the tools I use to build, deploy, and maintain scalable production applications.</p>
                </div>

                <div className={styles.skills_info}>
                    
                        <div className={styles.career_icon_container}>

                    <IoCodeSlashOutline />
                        </div>
                    <div>
                        <p className={styles.skills_sub_header}>CORE STACK</p>
                    
                        <p>These are the technologies I use daily to build and ship production applications.</p>

                    </div>
                </div>
            </section>

            <SkillSection sectionName="FRONTEND"/>
            <SkillSection sectionName="BACKEND"/>
        </div>
    )
}