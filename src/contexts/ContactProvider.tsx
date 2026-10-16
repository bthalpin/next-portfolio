"use client";

import React, { useState } from "react";
import Contact from "@/components/Contact";

type ContextValues = {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
} | null;

export const ContactContext = React.createContext<ContextValues>(null);

export function ContactProvider({ children }: { children: React.ReactNode }) {
    const [open, setOpen] = useState<boolean>(false);

    return (
        <ContactContext.Provider 
            value={{
                open,
                setOpen
            }}
        >
            
            {children}

            <Contact open={open} setOpen={setOpen}/>

        </ContactContext.Provider>
    );
}

export function useContactContext() {
    const context = React.useContext(ContactContext);
    if (context === null) {
        throw new Error("useContactProvider must be used within a ContactProvider");
    }
    return context;
}