import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";

import styles from '../../styles/components/About/skills.module.css';

export default function TechnicalSkills () {
    return (
        <div className={styles.skills_section}>
            <h3>TECHNICAL SKILLS</h3>
            <section className={styles.skills_section_card_container}>
                {skillData.map(data => (
                    <div key={data.header} className={styles.skills_section_card}>
                        <div className={styles.skills_section_card_header}>
                            {data.icon}
                            <p>{data.header}</p>
                        </div>
                        <div className={styles.skills_list}>
                            {data.skills.length > 0 ? 
                                data.skills.map(skill => (
                                    <p className={styles.skills} key={skill}>{skill}</p>
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

const skillData = [
    {
        header: 'Frontend',
        icon: <HiOutlineSquare3Stack3D />,
        skills: [
            'Next.js',
            'React',
            'TypeScript',
            'Redux',
            'HTML5',
            'CSS3',
        ]
    },
    {
        header: 'Backend',
        icon: <HiOutlineSquare3Stack3D />,
        skills: [
            'Node.js',
            'Express',
            'Prisma',
            'Sequelize',
            'REST APIs',
            'WebSockets',
        ]
    },
    {
        header: 'Databases',
        icon: <HiOutlineSquare3Stack3D />,
        skills: [
            'MySQL',
            'PostgresSQL',
            'PlanetScale',
            'Prisma ORM',
        ]
    },
    {
        header: 'Cloud/DevOps',
        icon: <CiCloudOn />,
        skills: [
            'AWS (EC2, S3, RDS, IAM)',
            'Vercel',
            'Linux',
            'Git & GitHub',
            'CI/CD',
            'Nginx',
        ]
    },
    {
        header: 'Integrations',
        icon: <HiOutlineSquare3Stack3D />,
        skills: [
            'Stripe',
            'PayPal',
            'Authorize.net',
            'HubSpot',
            'SendGrid',
            'Zoom',
            'Asana',
        ]
    },
    
]