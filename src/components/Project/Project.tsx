import React, {FunctionComponent} from 'react';
import Link from 'next/link';
import styles from '@/styles/components/projects.module.css';
import Image from 'next/image';

type ProjectProps = {
    projectInfo: {
        name: string;
        deployed: string;
        github: string;
        // class: string;
        shortDescription: string;
        summary: string;
        technology: string;
        disclaimer: string;
        image: string;
    };
    id:number;
}
const Project:FunctionComponent<ProjectProps> = ({ projectInfo, id }) => {
    
    return ( 
        <>
            <Link href={`/portfolio/${id}`}>
                <div className={`${styles.projectCard} ${id % 2 === 0 ? styles.alternateCard : ''}`} >  
                    <Image src={projectInfo.image} alt={projectInfo.name} width={500} height={350}/>
                    <section className={`${styles.projectCardInfo} `}>
                       
                            <div>
                                <h2 className={styles.projectName}>{projectInfo.name}</h2>
                            </div>
                            
                            <div className={styles.projectSummary}>
                                <p className={styles.projectSummaryText}>{projectInfo.shortDescription}</p>
                                <p className={styles.projectSummaryTech}>Technology: {projectInfo.technology}</p>
                            </div>
                        
                    </section>
                
                </div>
            </Link>
        </>  
        )
}

export default Project;