import React from "react";
import banner from '../../assets/banner.jpg'
import { Box } from "@mui/material";
import { CustomTypography } from "../../shared/components/Typography";

export const Home: React.FC = () => {
    const skills = 'Senior Full Stack Developer | MEAN | MERN | React | Angular | NodeJS | MongoDB | ExpressJS | Redux | TypeScript | Javascript | GraphQL | Microservice | HTML | CSS | Linux | Git'
    return <Box style={{ height: '100vh' }}>
        <Box sx={
            {
                background: `#151515 url(${banner}) no-repeat center bottom`,
                height: '100vh',
                backgroundSize: 'cover',
                position: 'relative'
            }
        }>
            <Box style={{
                position: 'absolute',
                top: '0',
                left: '0',
                width: '100%',
                height: '100%',
                background: '#111111',
                opacity: '.85',
            }}></Box>
            <Box sx={{ position: 'absolute', transform: 'translate(-50%, -50%)', top: "50%", left: '50%' }}>
                <CustomTypography style={{
                    color: '#FF0077',
                    fontSize: 16,
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 'bold',
                    letterSpacing: 2
                }}>
                    HELLO WORLD.
                </CustomTypography>
                <CustomTypography style={{
                    fontFamily: '"Poppins", sans-serif',
                    fontWeight: 'bold',
                    fontSize: '59px'
                }}>
                    I'm Narsingh Jaiswal
                </CustomTypography>
                <Box sx={{ display: 'flex' }}>
                    <CustomTypography style={{ color: '#FFFFFF', fontSize: '16px', width: '100%', fontFamily: '"Poppins", sans-serif', letterSpacing: '2px' }}>| {skills}</CustomTypography>
                </Box>
            </Box>
        </Box>

    </Box>
}