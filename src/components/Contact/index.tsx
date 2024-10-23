import { Box, TextareaAutosize } from "@mui/material"
import { CustomTypography } from "../../shared/components/Typography"
import { CustomTextField } from "../../shared/components/CustomTextField"

export const Contact: React.FC = () => {
    return <Box style={{ backgroundColor: '#151515', width: '100%', padding: '120px 0px 72px' }}>
        <Box style={{ maxWidth: '700px', margin: 'auto' }}>
            <CustomTypography style={{
                color: '#FF0077',
                fontSize: 16,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: 'bold',
                letterSpacing: 2
            }}>
                CONTACT
            </CustomTypography>

            <CustomTypography style={{
                color: 'white',
                fontSize: 35,
                marginBottom: 12,
                fontFamily: '"Poppins", sans-serif',
                fontWeight: '600',
            }}>
                I'd Love To Hear From You.
            </CustomTypography>

            <CustomTypography style={{
                fontFamily: 'lora-regular, serif',
                fontSize: '23px',
                marginBottom: '28px',
                color: 'rgba(255, 255, 255, 0.7)',
                letterSpacing: '0px',
                wordBreak: 'break-word',
                textAlign: 'center',
                textRendering: 'optimizeLegibility',
                fontWeight: 'lighter'
            }}>
                Your thoughts and feedback are important to me! Whether you have questions, project ideas, or just want to connect, feel free to reach out. Let’s start a conversation and explore the possibilities together!
            </CustomTypography>

            <Form />
        </Box>
    </Box>
}

const Form: React.FC = () => {
    return <Box style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    }}>
        <CustomTextField id="standard-basic" label="Name" variant="standard" />
        <CustomTextField id="standard-basic" label="Email" variant="standard" />
        <CustomTextField id="standard-basic" label="Subject" variant="standard" />
        <TextareaAutosize style={{ width: '100%', margin: '20px 0px', backgroundColor: "#151515", padding: "10px 10px", border: "none", borderBottom: "1px solid #505A57", outline: 'none' }} id="standard-basic" minRows={3} placeholder="message" />
    </Box>
}