import React from 'react';

import Project from '@/components/Project/Project';
import { projectData } from '@/components/Project/projectData';
import styles from '@/styles/components/projects.module.css';


interface ProjectData {
    name:string;
    deployed:string;
    github:string;
    // class:string;
    shortDescription:string;
    summary:string;
    technology:string;
    disclaimer:string;
    image: string;
}
const Portfolio = () => {
    // Returns each project in the projectData.js
    return (
        <div className={styles.projectContainer} >
            {projectData.map((projectInfo:ProjectData,index:number)=>
                <div key={index}>
                    <Project projectInfo={projectInfo} id={index}/>
                </div>
                )}
        </div>
    )
}

export default Portfolio;