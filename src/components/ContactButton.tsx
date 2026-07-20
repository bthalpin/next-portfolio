'use client'

import { useContactContext } from "@/contexts/ContactProvider";
import styles from '@/styles/components/ContactButton.module.css';

export default function ContactButton () {
    const { setOpen } = useContactContext();
    return (
        <button onClick={() => setOpen(true)} className={styles.contact_button}>
            Let's Connect!
        </button>
    )
}