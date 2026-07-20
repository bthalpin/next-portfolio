'use client'

import { useContactContext } from "@/contexts/ContactProvider";
import { IoChatboxOutline } from "react-icons/io5";

export default function ContactWrapper () {
    const { setOpen } = useContactContext();
    return (
        <div onClick={() => setOpen(true)}>
            <IoChatboxOutline />
            <p>Let's Connect!</p>
        </div>
    )
}