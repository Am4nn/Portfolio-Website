import React from 'react'
import { skills } from '../../../../utils/config'
import styles from './Skills.module.css';

const Skills = () => (
    <div className={styles.skills_wrapper}>
        {skills.map((skill, idx) => (
            <SkillCategory
                name={skill.name}
                items={skill.items}
                key={idx}
            />
        ))}
    </div>
);

const SkillCategory = ({ name, items }) => (
    <div className={styles.skill_category_container} data-aos="fade-up">
        <div className={styles.skill_title}>
            <div className={styles.arrow_img_container}>
                <img src="skills/arrow1.svg" alt="" />
            </div>
            <h3>{name}</h3>
        </div>
        <div className={styles.skills_container}>
            {items.map((item, idx) => (
                <SkillBubble name={item} key={idx} />
            ))}
        </div>
    </div>
);

const SkillBubble = ({ name }) => (
    <div className={styles.skill_bubble_container}>
        <img src={`/skills/` + name + `.svg`} alt="" />
        <h3>{name}</h3>
    </div>
);

export default Skills;