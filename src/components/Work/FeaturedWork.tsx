import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";

import styles from '../../styles/components/Work/work.module.css';
import Link from "next/link";

export default function FeaturedWork () {
    return (
        <div className={styles.work_section}>
            <div className={styles.work_section_header_container}>
                <h3>FEATURED WORK</h3>
            </div>

            <section className={styles.work_section_card_container}>
                {workData.map(data => (
                    <div key={`featured-work-${data.header}`} className={styles.work_section_card}>
                        {data.image ? 
                            <div className={styles.work_image_container}>
                                <img src={data.image} alt={data.header} />
                            </div>
                        : null}

                        <div>
                            <div className={styles.work_card_header}>
                                <div className={styles.work_card_header_icon} style={{ backgroundColor: data.iconBackground }}>
                                    {data.headerIcon}
                                </div>
                                <div>
                                    <p className={styles.work_section_card_header}>{data.header}</p>
                                    <p className={styles.work_section_card_sub_header}>{data.subHeader}</p>
                                </div>
                            </div>
                            

                            <div className={styles.work_key_points}>
                                {data.keyPoints.length > 0 ? 
                                    data.keyPoints.map(keyPoint => (
                                        <div key={keyPoint}>
                                            <FaRegCheckCircle />
                                            <p className={styles.skills}>{keyPoint}</p>
                                        </div>
                                    ))
                                : null}
                            </div>

                            <div className={styles.work_technology}>
                                {data.technology.length > 0 ? 
                                    data.technology.map(tech => (
                                        // <div key={tech}>
                                        <p  key={tech} className={styles.skills}>{tech}</p>
                                        // </div>
                                    ))
                                : null}
                            </div>
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
        headerIcon: <FaRegCheckCircle />,
        iconBackground: '#2160d4',
        header: 'Enterprise Subscription Platform',
        subHeader: 'A subscription management platform handling payments, billing, and customer management for multiple brands.',
        description: 'A subscription management platform handling payments, billing, and customer management for multiple brands.',
        image: '/images/project_placeholder.png',
        keyPoints: [
            'Stripe, PayPal & Authorize.net integration',
            'Subscription lifecycle & proration logic',
            'AWS EC2, S3, RDS, CloudWatch',
            'Admin dashboards & reporting',
            'Prisma, MySQL, Next.js, TypeScript',
            'Role-based access & permissions',
            'Deployed with Vercel & AWS'
        ],
        technology: [
            'Next.js',
            'TypeScript',
            'Prisma',
            'AWS',
            'MySQL'
        ]
    },
    {
        headerIcon: <FaRegCheckCircle />,
        iconBackground: '#4b3685',
        header: 'Continuing Education Platform',
        image: '/images/project_placeholder.png',
        subHeader: 'Platform for dental professionals to access courses, live events, and certifications',
        description: 'Platform for dental professionals to access courses, live events, and certifications',
        keyPoints: [
            'Zoom Events integration',
            'SendGrid email automation',
            'HubSpot CRM integration',
            'Stripe payments & invoicing',
            'Content management system',
            'User management & permissions',
            'Certificates & course tracking',
            'Deployed with Vercel'
        ],
        technology: [
            'Next.js',
            'TypeScript',
            'Sequelize',
            'Zoom API',
            'MySQL'
        ]
    },
    {
        headerIcon: <FaRegCheckCircle />,
        iconBackground: '#253f25',
        header: 'AI Manufacturer Evaluation Platform',
        image: '/images/project_placeholder.png',
        subHeader: 'AI-powered helping companies evaluate manufacturers using conversational search and semantic understanding',
        description: 'AI-powered helping companies evaluate manufacturers using conversational search and semantic understanding',
        keyPoints: [
            'Claude API & embeddings',
            'Vector search with PostgresSQL',
            'Dynamic forms & conversational UI',
            'File uploads & data analysis',
            'Role-based dashboards',
            'Next.js, TypeScript, PostgresSQL'
        ],
        technology: [
            'Next.js',
            'TypeScript',
            'PostgresSQL',
            'Claude AI',
            'Vercel AI SDK'
        ]
    },
    
]