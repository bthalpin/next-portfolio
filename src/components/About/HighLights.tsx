import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { GoRocket } from "react-icons/go";

import styles from '../../styles/components/About/highlights.module.css';

export default function Highlights () {
    return (
        <div className={styles.highlight_section}>
            <h3>CAREER HIGHLIGHTS</h3>
            <section className={styles.highlight_section_card_container}>
                {hightLightData.map(data => (
                    <div key={data.header} className={styles.highlight_section_card}>
                        <div className={styles.highlight_section_card_header}>
                            {data.icon}
                            <p>{data.header}</p>
                        </div>
                        <p className={styles.highlight_section_card_sub_header}>{data.sub_header}</p>
                        <p  className={styles.highlight_section_card_description}>{data.description}</p>
                    </div>
                ))}
                <div></div>
            </section>
        </div>
    )
}

const hightLightData = [
    {
        header: '8+',
        sub_header: 'Production Applications',
        description: 'Built and maintained across multiple domains',
        icon: <HiOutlineSquare3Stack3D />
    },
    {
        header: '3+',
        sub_header: 'Years of Experience',
        description: 'Growing from junior to lead developer',
        icon: <CiCloudOn />
    },
    {
        header: '15+',
        sub_header: 'Third-Party Integrations',
        description: 'APIs, webhooks, and external services',
        icon: <IoCodeSlashOutline  />
    },
    {
        header: '5+',
        sub_header: 'Developers Mentored',
        description: 'Code reviews, guidance, and team collaboration',
        icon: <RxPeople  />
    },
    {
        header: '100%',
        sub_header: 'Production Focused',
        description: 'Applications used by thousands of users',
        icon: <GoRocket  />
    },
]