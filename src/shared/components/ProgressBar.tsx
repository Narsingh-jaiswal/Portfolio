import * as React from 'react';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { CustomTypography } from './Typography';

interface LinearProgressBarProps extends LinearProgressProps {
    label: string
    value: number
}

export const LinearProgressBar: React.FC<LinearProgressBarProps> = ({ value, label, ...props }) => {
    return (
        <Box marginBottom='10px'>
            <CustomTypography style={{ color: 'rgb(49, 49, 49)', fontWeight: 'bold' }} >{label}</CustomTypography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Box sx={{ width: '100%', mr: 1 }}>
                    <LinearProgress
                        sx={{
                            backgroundColor: '#a1a1a1',
                            '& .MuiLinearProgress-bar': {
                                backgroundColor: 'rgb(49, 49, 49)',
                            },
                        }}
                        variant="determinate" value={value}  {...props} />
                </Box>
                <Box sx={{ minWidth: 35 }}>
                    <Typography
                        variant="body2"
                        sx={{ color: 'text.secondary' }}
                    >{`${Math.round(value)}%`}</Typography>
                </Box>
            </Box>
        </Box>
    );
}