'use client'

import React, { useState } from 'react';
import Link from 'next/link';
import Nav from './Nav';
import { navigationLinks } from './navigationData';

import styles from '@/styles/components/header.module.css';

type Props = {
}

const Header: React.FC<Props> = () => {
    const [open, setOpen] = useState(false)

    const handleClose = (e:React.MouseEvent<HTMLDivElement>) => {
        
        const targetEl = e.target as Element;
        const target = targetEl.classList[0];
        if (target.includes('navContainerOpen')) {
            setOpen(false)
        }
    }

    return (
        <div>
            <div  className={styles.navContainer}>
                <Link href={'/'} className={styles.navName}>
                    
                        HALPIN

                </Link>
                <div className={open ? styles.navContainerOpen : ''} onClick={(e)=> handleClose(e)}>
                    <div className={open ? styles.navLinkOpen : styles.navLinkContainer}>  

                        {navigationLinks.map((navLink, index)=>
                            <div key={`link-${index}`}>
                                <Nav navLink={navLink} setOpen={setOpen}/>
                            </div>
                        )}
                    </div>

                </div>
                <div className={open ? styles.menu_open : styles.menu_container} onClick={()=>setOpen(!open)}>
                    <div className={styles.menu} >
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;