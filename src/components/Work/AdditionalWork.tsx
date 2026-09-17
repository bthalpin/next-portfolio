import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import styles from '../../styles/components/Work/work.module.css';
import Link from "next/link";

export default function AdditionalWork () {
    return (
        <div className={styles.work_section}>
            <div className={styles.work_section_header_container}>
                <h3>Other Professional Projects</h3>
            </div>

            <section className={styles.additional_work_section_card_container}>
                {workData.map(data => (
                    <div key={`additional-work-${data.header}`} className={styles.additional_work_section_card}>

                        <div className={styles.additional_work_card_header}>
                            <div className={styles.additional_work_card_header_icon}  style={{ borderColor: data.backgroundColor }}>
                                {data.headerIcon}
                            </div>
                            <div>
                                <p className={styles.additional_work_section_card_header}>{data.header}</p>
                            </div>
                        </div>
                        <p className={styles.additional_work_section_card_description}>{data.description}</p>

                        <div className={styles.additional_work_technology}>
                            {data.technology.length > 0 ? 
                                data.technology.map(tech => (
                                    // <div key={tech}>
                                    <p  key={tech} className={styles.skills}>{tech}</p>
                                    // </div>
                                ))
                            : null}
                        </div>
                    </div>
                ))}
                <div></div>
            </section>
        </div>
    )
}

const workData = [
    {
        headerIcon: <FaRegCheckCircle color={'#2160d4'}/>,
        backgroundColor: '#2160d4',
        header: 'Content Management System',
        description: 'A subscription management platform handling payments, billing, and customer management for multiple brands.',
        technology: [
            'Next.js',
            'TypeScript',
            'Prisma',
            // 'AWS',
            // 'MySQL'
        ]
    },
    {
        headerIcon: <FaRegCheckCircle color={'#4b3685'}/>,
        backgroundColor: '#4b3685',
        header: 'Marketing Automation Platform',
        description: 'Platform for dental professionals to access courses, live events, and certifications',
        technology: [
            'Next.js',
            'TypeScript',
            'Sequelize',
            // 'Zoom API',
            // 'MySQL'
        ]
    },
    {
        headerIcon: <FaRegCheckCircle color={'#253f25'}/>,
        backgroundColor: '#253f25',
        header: 'Internal Admin Dashboard',
        description: 'AI-powered helping companies evaluate manufacturers using conversational search and semantic understanding',
        technology: [
            'Next.js',
            'TypeScript',
            'PostgresSQL',
            // 'Claude AI',
            // 'Vercel AI SDK'
        ]
    },
    {
        headerIcon: <FaRegCheckCircle color={'#253f25'}/>,
        backgroundColor: '#253f25',
        header: 'API & Integration Services',
        description: 'AI-powered helping companies evaluate manufacturers using conversational search and semantic understanding',
        technology: [
            'Next.js',
            'TypeScript',
            'PostgresSQL',
            // 'Claude AI',
            // 'Vercel AI SDK'
        ]
    },
    
]