import { RiNextjsLine } from "react-icons/ri";
import { FiMonitor } from "react-icons/fi";
import { IoSettingsOutline } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { BsTypescript } from "react-icons/bs";
import { SiRedux } from "react-icons/si";
import { DiNodejs } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { IoPrism } from "react-icons/io5";
import { FaNetworkWired } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { SiFusionauth } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiPlanetscale } from "react-icons/si";
import { SiSequelize } from "react-icons/si";
import { FaAws } from "react-icons/fa";
import { RiVercelLine } from "react-icons/ri";
import { GrHeroku } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaStripe } from "react-icons/fa";
import { FaPaypal } from "react-icons/fa";
import { FaHubspot } from "react-icons/fa6";
import { TbBrandAsana } from "react-icons/tb";
import { TbBrandTwilio } from "react-icons/tb";
import { SiZoom } from "react-icons/si";
import { FaCircle } from "react-icons/fa";

const yearsOfExperience = Math.floor(
    (new Date().getTime() - new Date('8-1-22').getTime()) 
    / 
    (1000 * 60 * 60 * 24 * 365)
)

export default {
    yearsOfExperience,
    skills: {
        'FRONTEND': {
            icon: FiMonitor,
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
                    icon: FaReact,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Building user interfaces and interactive experiences.'
                },
                {
                    name: 'TypeScript',
                    icon: BsTypescript,
                    frequency: 'Daily',
                    years: yearsOfExperience - 1,
                    environment: 'Production',
                    description: 'Type-safe JavaScript for maintainable code.'
                },
                {
                    name: 'CSS',
                    icon: DiCss3,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Responsive layouts & UI styling'
                },
                {
                    name: 'Redux Toolkit',
                    icon: SiRedux,
                    frequency: 'Often',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'State management for complex React applications.'
                },
            ]
        },
        'BACKEND': {
            icon: IoSettingsOutline,
            skillList: [
                {
                    name: 'Node.js',
                    icon: DiNodejs,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'JavaScript runtime for scalable backend services.'
                },
                {
                    name: 'Express',
                    icon: SiExpress,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Web framework for building RESTful APIs.'
                },
                
                {
                    name: 'REST APIs',
                    icon: FaNetworkWired,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Designing and building robust RESTful services.'
                },
                {
                    name: 'JWT / Auth',
                    icon: SiFusionauth,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'User authentication & access control'
                },
            ]
        },
        'DATABASES & ORM': {
            icon: IoSettingsOutline,
            skillList: [
                {
                    name: 'MySQL',
                    icon: GrMysql,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Database design & data management'
                },
                {
                    name: 'PostgresSQL',
                    icon: BiLogoPostgresql,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Database design & vector search'
                },
                {
                    name: 'PlanetScale',
                    icon: SiPlanetscale,
                    frequency: 'Daily',
                    years: yearsOfExperience - 2,
                    environment: 'Production',
                    description: 'Scalable MySQL databases'
                },
                {
                    name: 'Sequelize',
                    icon: SiSequelize,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'ORM for databases.'
                },
                {
                    name: 'Prisma',
                    icon: IoPrism,
                    frequency: 'Daily',
                    years: yearsOfExperience - 1,
                    environment: 'Production',
                    description: 'Type-safe ORM for databases.'
                },
            ]
        },
        'CLOUD & DEVELOPMENT': {
            icon: IoSettingsOutline,
            skillList: [
                {
                    name: 'AWS (EC2, S3, RDS, IAM)',
                    icon: FaAws,
                    frequency: 'Often',
                    years: yearsOfExperience - 3,
                    environment: 'Production',
                    description: 'Hosting, storage & infrastructure'
                },
                {
                    name: 'Vercel',
                    icon: RiVercelLine,
                    frequency: 'Daily',
                    years: yearsOfExperience - 3,
                    environment: 'Production',
                    description: 'Next.js hosting & deployments'
                },
                {
                    name: 'Heroku',
                    icon: GrHeroku,
                    frequency: 'Often',
                    years: yearsOfExperience,
                    environment: 'Development',
                    description: 'Application hosting & environments'
                },
                {
                    name: 'Git & GitHub',
                    icon: FaGithub,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Version control & collaboration'
                },
            ]
        },
        'APIs & INTEGRATIONS': {
            icon: IoSettingsOutline,
            skillList: [
                {
                    name: 'Stripe',
                    icon: FaStripe,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Payments & subscription systems'
                },
                {
                    name: 'PayPal',
                    icon: FaPaypal,
                    frequency: 'Often',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Payments & subscriptions'
                },
                {
                    name: 'Authorize.net',
                    icon: FaCircle,
                    frequency: 'Rarely',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Payments & subscriptions'
                },
                {
                    name: 'HubSpot',
                    icon: FaHubspot,
                    frequency: 'Monthly',
                    years: yearsOfExperience - 3,
                    environment: 'Production',
                    description: 'CRM & API integrations'
                },
                {
                    name: 'SendGrid',
                    icon: TbBrandTwilio,
                    frequency: 'Daily',
                    years: yearsOfExperience,
                    environment: 'Production',
                    description: 'Transactional email delivery'
                },
                {
                    name: 'Zoom',
                    icon: SiZoom,
                    frequency: 'Rarely',
                    years: yearsOfExperience - 2,
                    environment: 'Production',
                    description: 'Meeting & API integrations'
                },
                {
                    name: 'Asana',
                    icon: TbBrandAsana,
                    frequency: 'Monthly',
                    years: yearsOfExperience - 3,
                    environment: 'Production',
                    description: 'Project & workflow integrations'
                },
            ]
        },
    }
}