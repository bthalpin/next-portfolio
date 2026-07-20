import Link from 'next/link';

import { RiNextjsLine } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { DiNodejs } from "react-icons/di";
import { FaAws } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import styles from '@/styles/about.module.css';

export default function AboutSection () {
    return (
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
                <div><RiNextjsLine /></div>
                <div><FaReact /></div>
                <div><BsTypescript /></div>
                <div><DiNodejs /></div>
                <div><FaAws /></div>
                <div><GrMysql /></div>
                <div><BiLogoPostgresql /></div>
            </div>
        </div>
    )
}