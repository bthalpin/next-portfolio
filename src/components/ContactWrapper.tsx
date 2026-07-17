'use client'
import { useState } from "react";
import Contact from "./Contact";
import styles from '@/styles/about.module.css';

export default function ContactWrapper () {
    const [open, setOpen] = useState(false);
    return (
        <>
            <div onClick={() => setOpen(true)}>
                <img className={styles.githubLogo} src="/icons/chat_icon.png" alt="GitHub Logo"></img> 

                <p>Let's Connect!</p>
            </div>

            <Contact open={open} setOpen={setOpen}/>
        </>
    )
}