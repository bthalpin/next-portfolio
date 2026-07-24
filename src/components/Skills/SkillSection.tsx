import SkillCard from './SkillCard';
import skills from '@/constants/skills'
import styles from '@/styles/components/Skill/skillSection.module.css';

type Props = {
    sectionName:  keyof typeof skills;
}

export default function SkillSection ({ sectionName } : Props) {
    const skillData = skills[sectionName]
    return (
        <section className={styles.skill_section}>
            <div className={styles.skill_section_header}>
                <skillData.icon />
                <h4>{sectionName}</h4>
            </div>

            <div className={styles.skill_container}>
                {skillData?.skillList?.length > 0 ?
                    skillData.skillList.map(skill => <SkillCard key={skill.name} skill={skill} />)
                : null}
            </div>
        </section>
    )
}