import styles from '@/styles/contact.module.css';
import { MdOutlineMail } from "react-icons/md";

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
        icon: <MdOutlineMail />,
    },
    {
        header: 'Remote or hybrid roles',
        icon: <MdOutlineMail />,
    },
    {
        header: 'Senior or Lead positions',
        icon: <MdOutlineMail />,
    },
    {
        header: 'Challenging problems',
        icon: <MdOutlineMail />,
    },
    {
        header: 'Great teams',
        icon: <MdOutlineMail />,
    },
]