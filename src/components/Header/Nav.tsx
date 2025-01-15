import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/header.module.css'

type NavProps = {
    navLink: {
        name: string;
        link: string;
    };
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Nav: React.FC<NavProps> =  ({navLink, setOpen}) => {
    const pathname = usePathname()
    return (
        <Link onClick={() => setOpen(false)} className={`${pathname === navLink.link ? styles.selected : ''} ${styles.navLink}`} href={navLink.link} >
        {/* <Link onClick={() => setOpen(false)} className={({isActive})=>isActive?`${styles.selected} ${styles.navLink}`:styles.navLink} href={navLink==='About Me'?'/':`/${navLink}/`} > */}
            {navLink.name}
        </Link>
    )
}

export default Nav;