import { HiOutlineSquare3Stack3D } from "react-icons/hi2";
import { CiCloudOn } from "react-icons/ci";
import { IoCodeSlashOutline } from "react-icons/io5";
import { RxPeople } from "react-icons/rx";
import { GoRocket } from "react-icons/go";

import styles from '../../styles/components/Work/highlights.module.css';
import DEFAULTS from "@/constants/DEFAULTS";

export default function Highlights () {
    return (
        <div className={styles.highlight_section}>
            <section className={styles.highlight_section_card_container}>
                {hightLightData.map(data => (
                    <div key={`highlights-${data.header}`} className={styles.highlight_section_card}>
                        <div className={styles.highlight_section_card_header}>
                            {data.icon}
                            <div>
                                <p>{data.header}</p>
                                <p className={styles.highlight_section_card_sub_header}>{data.sub_header}</p>
                            </div>
                        </div>
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
        icon: <HiOutlineSquare3Stack3D />
    },
    {
        header: '10k +',
        sub_header: 'Users Served',
        icon: <CiCloudOn />
    },
    {
        header: '15+',
        sub_header: 'Third-Party Integrations',
        icon: <IoCodeSlashOutline  />
    },
    {
        header: `${DEFAULTS.yearsOfExperience} +`,
        sub_header: 'Years of Experience',
        icon: <RxPeople  />
    },
]