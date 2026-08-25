'use client'

import { useState } from 'react';
import styles from '@/styles/contact.module.css';
import { MdOutlineMail } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";
import { RiArrowDownSLine } from "react-icons/ri";

export default function FAQ () {
    const [answerDisplayIndex, setAnswerDisplayIndex] = useState<{[key: number]: boolean }>({
        0: false,
        1: false,
        2: false,
        3: false,
    })

    const toggleAnswer = (idx: number) => {
        setAnswerDisplayIndex(prevIndex => ({
            ...prevIndex,
            [idx]: !prevIndex[idx]
        }))
    }

    return (
        <section className={styles.faq_container}>
            <p>Frequently Asked Questions</p>
            {faqData.map((data, idx) => (
                <div key={data.question} className={styles.faq_card}>
                    <div onClick={() => toggleAnswer(idx)}>
                        <p>{data.question}</p>                
                        <RiArrowDownSLine className={styles.faq_arrow}/>
                    </div>

                    {answerDisplayIndex[idx] ? 
                        <p className={styles.faq_answer}>{data.answer}</p>
                    : null}
                </div>
            ))}
        </section>
    )
}

const faqData = [
    {
        question: 'Can I see examples of your code?',
        answer: 'Sure' 
    },
    {
        question: 'Are you open to remote work',
        answer: 'Yes' 
    },
    {
        question: 'Do you provide references',
        answer: 'Yes' 
    },
    {
        question: 'What types of projects interest you most',
        answer: 'Yes' 
    },
]