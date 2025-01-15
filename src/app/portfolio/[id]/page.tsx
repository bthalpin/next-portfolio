import React, { use } from 'react';
import { projectData } from '@/components/Project/projectData';
import styles from '@/styles/components/projects.module.css';

type Props = {
    params:  Promise<{
        id: string;
    }>
    
}
function ProjectDetails (props: Props) {
    const params = use(props.params)
    const { id } = params 
    const numId = +id
    
    return(
        <div className={styles.projectDetailContainer} >
            
            <h2 className={styles.projectTitle}>
                 {projectData[numId].name}
            </h2>

            <div className={styles.projectDetailCardContainer}>
                <div className={styles.projectDetailCard}>  
                    {numId === 6 ?
                        <div className={`${styles.projectPicture} ${styles[projectData[numId].class]}`}></div>
                    :
                    <a href={projectData[numId].deployed} target={'_blank'} className={styles.projectLink}>
                        <div className={`${styles.projectPicture} ${styles[projectData[numId].class]}`}></div>
                    </a>
                    }
        
                    <div className={styles.projectBtnContainer}>
                        {projectData[numId].deployed === '/portfolio/7'?
                        <></>
                        :
                        <div>
                            <a href={projectData[numId].deployed} target={'_blank'} className={styles.projectBtn}>Demo</a>
                        </div>
                        }

                        <div>
                            <a href={projectData[numId].github} target={'_blank'} className={styles.projectBtn}>Code</a>
                        </div>
                    </div>
                </div>

                <div className={styles.projectInfo}>  
                    <div className={styles.s}>
                        <p>{projectData[numId].summary}</p>
                        <p id="disclaimer">{projectData[numId].disclaimer}</p>
                    </div>

                    <div className={styles.projectTech}>
                        <h3>Technology Used:</h3>
                        <div className={styles.techList}>
                            <p>{projectData[numId].technology}</p>
                        </div>
                    </div>     
                </div>
            </div>   
        </div>
        )
}

export default ProjectDetails;