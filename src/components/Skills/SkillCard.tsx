import { IconType } from "react-icons"
import styles from '@/styles/components/Skill/skillSection.module.css';

type Skill = {
    name: string;
    icon: IconType,
    frequency: string;
    years: number;
    environment: string;
    description: string;
}

type Props = { skill: Skill }; 

export default function SkillCard ({ skill }: Props){
    return (
        <div className={styles.skill_row}>
            <skill.icon />
            <p className={styles.skill_name}>{skill.name}</p>
            <p className={styles.skill_frequency}>{skill.frequency}</p>
            <p className={styles.skill_years}>{skill.years}+ Years</p>
            <p className={styles.skill_environment}>{skill.environment}</p>
            <p className={styles.skill_description}>{skill.description}</p>
        </div>
    )
}