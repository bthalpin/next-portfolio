import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FiMonitor } from "react-icons/fi";
import { LuDatabase } from "react-icons/lu";

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
        icon: <FiMonitor />,
        skills: [
            'Next.js',
            'React',
            'TypeScript',
            'Redux',
            'HTML5',
            'CSS3',
            'Redux Toolkit',
        ]
    },
    {
        header: 'Backend',
        icon: <IoSettingsOutline />,
        skills: [
            'Node.js',
            'Express',
            'REST APIs',
            'JWT / Auth',
            'WebSockets',
        ]
    },
    {
        header: 'Databases & ORM',
        icon: <LuDatabase />,
        skills: [
            'MySQL',
            'PostgresSQL',
            'PlanetScale',
            'Sequelize',
            'Prisma',
        ]
    },
    {
        header: 'Cloud/DevOps',
        icon: <CiCloudOn />,
        skills: [
            'AWS',
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