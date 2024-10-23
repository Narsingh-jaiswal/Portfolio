import { Box } from "@mui/material"
import { CustomTypography } from "../../shared/components/Typography"
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { VerticalLinearStepper, VerticalLinearStepperProps } from "../Stepper";


const steps: VerticalLinearStepperProps[] = [
    {
        projectName: 'CAT (CasaDigi Air troubleshooting)',
        designation: 'FullStack Developer (Lead)',
        duration: 'Jan 2023 - JUl 2024',
        description: "CAT (Casadigi Air Troubleshooting Tool) is a diagnostic tool designed to identify and resolve issues with Home Automation devices directly at the client's home. It streamlines the troubleshooting process by providing real-time insights and diagnostics, allowing technicians to quickly pinpoint and address problems. With CAT, users benefit from efficient problem resolution and minimal downtime, ensuring a seamless experience with their Casadigi Air TroubleShooting.",
        stepIcon: faGraduationCap
    },
    {
        projectName: 'NxCasaDigi Studio',
        designation: 'Sr. Full-stack Developer',
        duration: 'Jan 2021 - Jan 2024',
        description: "NxCasaDigi Studio is a configuration tool used for home automation, designed to streamline the setup and management of smart home systems. Originally developed in PHP, the project has been migrated to Angular to enhance its performance and user experience. This modernized version offers a more intuitive and responsive interface, allowing users to efficiently configure and customize their home automation settings. With Angular's capabilities, NxCasaDigi Studio now provides a seamless, interactive experience for clients to optimize their smart home environments.",
        stepIcon: faBriefcase
    },
    {
        projectName: 'FnB Services APIs',
        designation: 'Back-end Developer',
        duration: 'Jan 2021 - Jan 2024',
        description: "Fnb Service is a microservice-based platform designed for iOS and Android devices, enabling users to place food and beverage orders in hotels. This service streamlines the ordering process by allowing guests to conveniently browse menus, customize their selections, and submit orders directly from their mobile devices. By leveraging a microservice architecture, FNB Service ensures scalability, reliability, and flexibility, providing a seamless and efficient dining experience for users while integrating smoothly with hotel management systems.",
        stepIcon: faGraduationCap
    }, {
        projectName: 'Next-Gen Casadigi APIs',
        designation: 'Back-end Developer',
        duration: 'Jan 2021 - Jan 2024',
        description: "Functions as a middleware layer that facilitates data exchange between mobile devices and a Java-based backend. This tool effectively bridges communication, enabling seamless synchronization and interaction between user interfaces on mobile devices and the Java package handling backend processes. By serving this intermediary role, NxCasaDigi Studio ensures efficient data flow and integration, enhancing the overall functionality and user experience of the home automation system.",
        stepIcon: faGraduationCap
    },
    {
        projectName: 'DECHEA',
        designation: 'Front-end Developer',
        duration: 'Jan 2021 - Jan 2024',
        description: "Dechea is a cutting-edge dental practice management software designed to streamline the creation of medical findings and cost estimates in under 10 minutes. It integrates top-tier productivity tools, sleek design, and expert medical knowledge to optimize digital dental practices. By enhancing efficiency and accuracy, Dechea helps dental professionals save both time and money, making it an invaluable asset for modern dental practices.",
        stepIcon: faGraduationCap
    },
];

const educationSteps: VerticalLinearStepperProps[] = [
    {
        projectName: 'Medicaps University',
        designation: 'Bachelor Degree In Computer Science',
        duration: 'Jan 2019 - Jan 2022',
        description: "Completed B.Tech from MediCaps University, Indore, with a CGPA of 7.8. Skilled in engineering principles, eager to apply knowledge in practical settings and contribute to innovative projects.",
        stepIcon: faGraduationCap
    },
    {
        projectName: 'Medicaps University',
        designation: 'Diploma Degree In Computer Science',
        duration: 'Jan 2016 - Jan 2019',
        description: "Completed a diploma from MediCaps University, Indore, with a CGPA of 7.0. Strong foundational skills in the field, ready to leverage knowledge in practical applications and professional growth.",
        stepIcon: faGraduationCap
    },
    {
        projectName: 'Sanmati H.S. School',
        designation: 'Higher Secondary (10)',
        duration: 'Jan 2016',
        description: "Completed higher education from Sanmati H.S. School, Indore, with a CGPA of 6.0. Developed essential skills and a strong foundation, eager to pursue further education and career opportunities.",
        stepIcon: faGraduationCap
    },
];

export const Credentials: React.FC = () => {
    return <Box padding='120px 20px 0px' maxWidth={900} margin={'auto'}>
        <Box maxWidth={700} margin={'auto auto 33px auto'}>
            <CustomTypography style={{
                color: '#FF0077',
                fontSize: 16,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 'bold',
                letterSpacing: 2
            }}>
                RESUME
            </CustomTypography>

            <CustomTypography style={{
                color: '#313131',
                fontSize: 35,
                marginBottom: 12,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
            }}>
                More of my experience and education.
            </CustomTypography>

            <CustomTypography style={{
                fontFamily: 'lora-regular, serif',
                fontSize: '23px',
                marginBottom: '28px',
                color: 'rgb(125, 125, 125)',
                letterSpacing: '0px',
                wordBreak: 'break-word',
                textAlign: 'center',
                textRendering: 'optimizeLegibility',
                fontWeight: 'lighter'
            }}>
                I have collaborated on a variety of projects across multiple industries, refining my full-stack development skills along the way. Progressing from a junior developer to a senior developer and eventually to a lead role, I’ve tackled diverse challenges that have significantly enhanced my technical expertise. Each experience has shaped my problem-solving abilities and fostered a mindset of innovation.
            </CustomTypography>
        </Box>
        <CustomTypography
            component={'h2'}
            style={{
                color: '#FF0077',
                fontSize: 24,
                marginBottom: 21,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 'bold'
            }}

        >
            Work Experience
        </CustomTypography>

        <Box className="timeLine">
            {steps.map((step, index) => <VerticalLinearStepper key={index} {...step} />)}
        </Box>

        <CustomTypography
            component={'h2'}
            style={{
                color: '#FF0077',
                fontSize: 24,
                marginBottom: 21,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 'bold'
            }}

        >
            Education
        </CustomTypography>

        <Box className="timeLine">
            {educationSteps.map((step, index) => <VerticalLinearStepper key={index} {...step} />)}
        </Box>
    </Box>
}