'use client'

import React, { useRef } from 'react';
import { useDraggable } from "react-use-draggable-scroll";

import Project from '@/components/Project/Project';
import { projectData } from '@/components/Project/projectData';
import styles from '@/styles/components/projects.module.css';


interface ProjectData {
    name:string;
    deployed:string;
    github:string;
    class:string;
    shortDescription:string;
    summary:string;
    technology:string;
    disclaimer:string;
}
const Portfolio = () => {
    const projectRef = useRef<HTMLDivElement>(null) as React.RefObject<HTMLInputElement>
    const { events } = useDraggable(projectRef, {
        applyRubberBandEffect: true
    })
    // Returns each project in the projectData.js
    return (
        <div className={styles.projectContainer} 
        {...events} 
        ref={projectRef}>
            {projectData.map((projectInfo:ProjectData,index:number)=>
                <div key={index}>
                    <Project projectInfo={projectInfo} id={index}/>
                </div>
                )}
        </div>
    )
}

export default Portfolio;