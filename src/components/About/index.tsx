import React from "react"
import { Box } from "@mui/material"

import { CustomTypography } from "../../shared/components/Typography"
import { LinearProgressBar } from "../../shared/components/ProgressBar"

import profilePic from '../../assets/profile.JPG'

const Profile: React.FC = () => {
    const profileDescription = 'Experienced Full Stack Engineer proficient in React.JS, Angular, Node.js, and MongoDB. Skilled in developing and integrating GraphQL APIs for optimized data handling. Committed to delivering high-quality, performance-driven solutions.'
    return <Box style={{ maxWidth: 700, gap: 50, margin: '39px auto', marginBottom: 28 }} display={'flex'} alignItems={'center'}>
        <Box>
            <img style={{ height: 100, width: 100, borderRadius: '50%', marginRight: 20 }} src={profilePic} alt="" />
        </Box>
        <CustomTypography style={{
            color: 'rgb(136, 136, 136)',
            fontSize: '18px',
            textAlign: 'left',
            lineHeight: '1.8',
            fontFamily: '\'Lora\''
        }}>{profileDescription}</CustomTypography>
    </Box>
}

interface ProfileAndSkillsProps {
    title: string;
    description: string
}

const ProfileAndSkills: React.FC<ProfileAndSkillsProps> = ({ description, title }) => {
    return <Box marginBottom={'30px'}>
        <CustomTypography style={{
            fontSize: 16,
            fontFamily: '"Poppins", sans-serif',
            fontWeight: 'bold',
            letterSpacing: 2,
            color: '#313131',
            marginBottom: 16
        }} component={'h3'}>{title}</CustomTypography>
        <CustomTypography style={{
            color: 'rgb(110, 110, 110)',
            fontFamily: 'Lora-regular',
            lineHeight: 'inherit',
            letterSpacing: 1
        }}>{description}</CustomTypography>
    </Box>
}


const ProfileInfo: React.FC = () => {

    const userInfo = [{
        key: 'FULLNAME',
        value: 'Narsingh Jaiswal'
    }, {
        key: 'BIRTH DATE',
        value: 'February 28,2001'
    }, {
        key: 'JOB',
        value: 'Freelancer, FullStack Developer'
    }, {
        key: 'WEBSITE',
        value: 'www.kardswebsite.com'
    }, {
        key: 'EMAIL',
        value: 'nrsnghjaiswal@gmail.com'
    }]

    return <Box>
        {userInfo.map(({ key, value }, index) => (
            <Box margin='0px 0px 6px' padding='0px 0px 15px' key={index}>
                <CustomTypography style={{ fontFamily: '"poppins-bold", sans-serif', fontWeight: 'bold', color: '#313131' }}>{key}:</CustomTypography>
                <CustomTypography style={{ fontFamily: '"poppins-bold", sans-serif', color: '#888888' }}>{value}</CustomTypography>
            </Box>))}
    </Box>
}

export const About: React.FC = () => {
    const profileDescription = 'Proficient in front-end technologies such as React.JS and Angular, with a proven track record of developing custom web pages and components to enhance website performance and user engagement.'
    const skillDescription = 'Skilled in back-end development using Node.js, Express, and MongoDB, with experience in designing and implementing microservice architectures for scalable and efficient systems.'
    const skills = [{
        label: 'JavaScript',
        value: 95
    }, {
        label: 'TypeScript',
        value: 80
    }, {
        label: 'Angular 14+',
        value: 90
    }, {
        label: 'React',
        value: 90
    }, {
        label: 'Node',
        value: 90
    }, {
        label: 'GraphQl',
        value: 80
    }]


    return <Box style={{ backgroundColor: '#FFFFFF', width: '100%' }}>
        <Box maxWidth={900} margin='auto' padding='112px 20px 114px' display='flex' flexDirection='column' alignItems='center'>
            <CustomTypography style={{
                color: '#FF0077',
                fontSize: 16,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 'bold',
                letterSpacing: 2
            }}>
                ABOUT
            </CustomTypography>

            <CustomTypography style={{
                color: '#313131',
                fontSize: 36,
                marginBottom: 12,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
            }}>
                Let me introduce myself.
            </CustomTypography>

            <Profile />
            <Box style={{ display: 'flex', maxWidth: 850 }}>
                <Box width='50%' padding='0px 18px' textAlign={'left'}>
                    <ProfileAndSkills description={profileDescription} title="PROFILE" />
                    <ProfileInfo />
                </Box>

                <Box width='50%' padding='0px 18px' textAlign={'left'}>
                    <ProfileAndSkills description={skillDescription} title="SKILLS" />
                    {
                        skills.map((skillData, index) => <LinearProgressBar key={index}  {...skillData} />)
                    }
                </Box>
            </Box>
        </Box>
    </Box>
}