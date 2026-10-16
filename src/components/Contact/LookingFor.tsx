import styles from '@/styles/contact.module.css';
import { MdOutlineMail } from "react-icons/md";
import { IoBriefcaseOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { RiTeamLine } from "react-icons/ri";
import { IoCodeSlashOutline } from "react-icons/io5";
import { HiOutlineLightBulb } from "react-icons/hi";

export default function LookingFor () {
    return (
        <section className={styles.looking_container}>
            <p>What I'm Looking For</p>
            <div>
                {lookingData.map(data => (
                    <div key={data.header} className={styles.looking_card}>
                        <div className={styles.looking_icon_container}>
                            {data.icon}
                        </div>
                        <p>{data.header}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

const lookingData = [
    {
        header: 'Full-time opportunities',
        icon: <IoBriefcaseOutline />,
    },
    {
        header: 'Remote or hybrid roles',
        icon: <RiComputerLine />,
    },
    {
        header: 'Senior or Lead positions',
        icon: <HiOutlineLightBulb />,
    },
    {
        header: 'Challenging problems',
        icon: <IoCodeSlashOutline />,
    },
    {
        header: 'Great teams',
        icon: <RiTeamLine />,
    },
]