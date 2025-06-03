import React from 'react';
import styles from '@/styles/components/resume.module.css';
import Image from 'next/image';

const Resume = () => {
    return (
        <div className={styles.resumePage}>
            <div className={styles.resumeContainer}>
                <a className={styles.resumeLink} href="/documents/Brian-Halpin-Resume.pdf" download>
                    
                    <p>DOWNLOAD RESUME</p>
                    <div className={styles.resumeImage}>
                        <Image src="/images/Resume.png" alt="Resume" width={288} height={372}/>
                    </div>
                    
                </a>

            </div>
            <div className={styles.skillContainer}>
                <div className={styles.skills}>
                    <h2>Technical Skills</h2>
                    <p className={styles.skill}><span className="skillLevel">Front-End:</span> Next.Js, TypeScript, JavaScript, React, jQuery, React-Native, HTML, CSS, Bootstrap</p>
                    <p className={styles.skill}><span className="skillLevel">Back-End:</span> Node, Express, Handlebars, Django</p>
                    <p className={styles.skill}><span className="skillLevel">Database:</span> Prisma, Sequelize, MySQL, MongoDB, Mongoose, GraphQL, Apollo, Postgres, Knex </p>
                    <p className={styles.skill}><span className="skillLevel">Other:</span> Stripe, Python, JSON Web Tokens, bcrypt, socket.io, Heroku, Git, Bash, Insomnia, MongoDb Compass, Microsoft Office Suite</p>
                   
                </div>
               
            </div>
        </div>
    )
}

export default Resume;