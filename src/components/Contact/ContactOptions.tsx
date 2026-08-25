import styles from '@/styles/contact.module.css';
import { MdOutlineMail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
export default function ContactOptions () {
    return (
        <section className={styles.get_in_touch_container}>
            {contactData.map(data => (
                <Link href={data.link} target={'_blank'} key={data.header} className={styles.get_in_touch_card}>
                    <div className={styles.get_in_touch_icon_container}>
                        {data.icon}
                    </div>
                    <div className={styles.get_in_touch_text}>
                        <p>{data.header}</p>
                        <p>{data.description}</p>
                    </div>
                    <FaArrowRightLong className={styles.get_in_touch_arrow}/>
                </Link>
            ))}
        </section>
    )
}

const contactData = [
    {
        header: 'Email',
        description: 'brian@bthalpin.com',
        icon: <MdOutlineMail />,
        link: 'mailto:brian@bthalpin.com'
    },
    {
        header: 'LinkedIn',
        description: 'linkedin.com/in/bthalpin/',
        icon: <img className={styles.linkedInLogo} src="/images/linkedin-logo.png" alt="LinkedIn Logo"></img>,
        link: 'https://linkedin.com/in/bthalpin/'
    },
    {
        header: 'GitHub',
        description: 'github.com/bthalpin',
        icon: <img className={styles.githubLogo} src="/images/github-logo.png" alt="GitHub Logo"></img>,
        link: 'https://github.com/bthalpin'
    },
    {
        header: 'Resume',
        description: 'Download PDF',
        icon: <img className={styles.githubLogo} src="/images/github-logo.png" alt="GitHub Logo"></img>,
        link: '/documents/Brian-Halpin-Resume.pdf'
    },
]