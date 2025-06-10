import React from 'react';
import styles from '@/styles/components/about.module.css';

function About () {
    
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.portraitContainer}>
                <div className={styles.portrait}>
                    <img src='/images/brian-main-portrait.png' alt="Brian Halpin portrait"></img>
                </div>
                
            </div>
            <section>
                    <p className={styles.statement}>Hi, I'm</p> 
                    <p id={styles.name}>Brian Halpin</p> 
                    <p className={styles.statement}>
                        I'm a web developer, with years of professional experience, specializing in building and maintaining 
                        full-stack applications using Next.js, TypeScript, and MySQL with Prisma and Sequelize. I've worked 
                        both independently and as part of a collaborative team, contributing to the development of multiple 
                        full-featured websites. My work includes maintaining legacy codebases, launching new projects 
                        from the ground up, and developing a custom content management system to support dynamic site content.
                        I also led the development of a full-scale content-driven website, as well as an admin dashboard that 
                        enables seamless content management.
                    </p>
                    <p className={styles.statement}>
                        Since the moment I was exposed to programming, it was all I ever wanted to do.  
                        I have always had a passion for problem solving, but thought my love of logic 
                        puzzles would be something I would only ever do as a hobby. Software development 
                        has given me an avenue to not only do what I love, but also to engage me and 
                        challenge me to always improve my skills.
                    </p>    
                    <p className={styles.statement}>
                        I earned a certificate in Full Stack Web Development from Rutgers University
                        back in 2022.  Before starting the program I took it upon myself to learn as 
                        much as I could, even developing a real time chat application using React, Node, 
                        Express, Knex, Postgres, and socket.io.  In my time working through the program, 
                        I was able to hone my skills as a React developer, learn the importance of folder 
                        structure, and learn new technologies like GraphQL.  One of my most important 
                        experiences was collaborating with other developers throughout the program, and in some 
                        instances, using my many years of supervisory experience to help lead the team 
                        to complete the project effectively and efficiently.  
                    </p>    
                    <p className={styles.statement}>
                        My love of problem solving, my drive to always improve, and my strong collaborative 
                        skills make me an advantageous candidate for any team.

                    </p>    

                </section>
        </div>
    )
}

export default About;