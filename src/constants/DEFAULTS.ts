
import { RiNextjsLine } from "react-icons/ri";
const yearsOfExperience = Math.floor(
    (new Date().getTime() - new Date('8-1-22').getTime()) 
    / 
    (1000 * 60 * 60 * 24 * 365)
)

export default {
    yearsOfExperience,
    skills: {
        'FRONTEND': {
            icon: RiNextjsLine,
            skillList: [
                {
                    name: 'Next.js',
                    icon: RiNextjsLine,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'React framework for production web applications.'
                },
                {
                    name: 'React',
                    icon: RiNextjsLine,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Building user interfaces and interactive experiences.'
                },
                {
                    name: 'TypeScript',
                    icon: RiNextjsLine,
                    frequency: 'Daily',
                    years: yearsOfExperience - 1,
                    environment: 'Production',
                    description: 'Type-safe JavaScript for maintainable code.'
                },
                {
                    name: 'Redux Toolkit',
                    icon: RiNextjsLine,
                    frequency: 'Often',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'State management for complex React applications.'
                },
            ]
        },
        'BACKEND': {
            icon: RiNextjsLine,
            skillList: [
                {
                    name: 'Node.js',
                    icon: RiNextjsLine,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'JavaScript runtime for scalable backend services.'
                },
                {
                    name: 'Express',
                    icon: RiNextjsLine,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Web framework for building RESTful APIs.'
                },
                {
                    name: 'Prisma',
                    icon: RiNextjsLine,
                    frequency: 'Daily',
                    years: yearsOfExperience - 1,
                    environment: 'Production',
                    description: 'Type-safe ORM for databases.'
                },
                {
                    name: 'REST APIs',
                    icon: RiNextjsLine,
                    frequency: 'Often',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Designing and building robust RESTful services.'
                },
            ]
        },
    }
}