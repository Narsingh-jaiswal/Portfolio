import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Box from '@mui/material/Box';
import React from 'react';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { CustomTypography } from '../../shared/components/Typography';


export interface VerticalLinearStepperProps {
    designation: string,
    duration: string,
    projectName: string,
    description: string,
    stepIcon: IconDefinition
}

export const VerticalLinearStepper: React.FC<VerticalLinearStepperProps> = ({ description, designation, duration, projectName, stepIcon }) => {

    return (
        <Box sx={{ maxWidth: 1000, display: 'flex', alignItems: 'flex-start', gap: '30px', margin: '0px 0px 30px 0px', backgroundColor: '#ebebeb' }}>
            <Box width='35%' textAlign={'right'}>
                <CustomTypography style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '500', color: '#151515' }}>
                    {designation}
                </CustomTypography>
                <CustomTypography style={{ fontFamily: '"Poppins", sans-serif', color: '#6e6e6e' }}  >{duration}</CustomTypography>
            </Box>

            <Box width='5%' display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box width={48} height={48} style={{
                    borderRadius: '50%',
                    backgroundColor: '#313131',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <FontAwesomeIcon icon={stepIcon} style={{ color: "#ffffff", }} />
                </Box>
            </Box>

            <Box width='60%' textAlign={'left'}>
                <CustomTypography style={{ fontFamily: '"Poppins", sans-serif', fontWeight: '500', color: '#151515' }} >{projectName}</CustomTypography>
                <CustomTypography style={{
                    color: "#6e6e6e",
                    fontFamily: '"Poppins", sans-serif',
                    fontSize: "17px",
                    lineHeight: '2rem',
                    fontWeight: 400
                }} >{description}</CustomTypography>
            </Box>
        </Box>
    );
}