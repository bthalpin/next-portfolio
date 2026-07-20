import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { GoRocket } from "react-icons/go";

import styles from '../../styles/components/About/career.module.css';

export default function Career () {
    return (
        <div className={styles.career_section}>
            <h3>CAREER JOURNEY</h3>
            <section className={styles.career_section_card_container}>
                {hightLightData.map(data => (
                    <div key={data.header} className={styles.career_section_card}>
                        <div className={styles.career_icon_container}>
                            {data.icon}
                        </div>
                        <p>{data.header}</p>
                        
                        <p className={styles.career_section_card_sub_header}>{data.sub_header}</p>
                        <p  className={styles.career_section_card_description}>{data.description}</p>
                    </div>
                ))}
                <div></div>
            </section>
        </div>
    )
}


const hightLightData = [
    {
        header: '2022',
        sub_header: 'Junior Developer',
        description: 'Began my career after earning my Full Stack Web Development certificate from Rutgers Coding Bootcamp.',
        icon: <HiOutlineSquare3Stack3D />
    },
    {
        header: '2022 - 2023',
        sub_header: 'Building & Learning',
        description: 'Built and maintained web applications while expanding my skills across the full stack.',
        icon: <CiCloudOn />
    },
    {
        header: '2023 - 2025',
        sub_header: 'Growing Responsibility',
        description: 'Became the primary developer on multiple projects and took on more complex architecture decisions.',
        icon: <IoCodeSlashOutline  />
    },
    {
        header: '2025 - Present',
        sub_header: 'Lead Developer',
        description: 'Orversee code quality, mentor developers, manage production infrastructure, and drive technical decisions.',
        icon: <RxPeople  />
    },
    {
        header: 'Future',
        sub_header: "Building What's Next",
        description: 'Focused on AI-powered applications, automation, and creating impact at scale.',
        icon: <GoRocket  />
    },
]