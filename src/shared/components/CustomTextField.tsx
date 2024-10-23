import { TextField, TextFieldProps } from "@mui/material"

export const CustomTextField: React.FC<TextFieldProps> = (props) => {
    const style = { width: '100%', margin: '10px' }

    return (
        <TextField {...props} style={style}
            InputLabelProps={{ style: { color: "#505A57" } }}
            sx={{
                '& .MuiInput-underline:before': {
                    borderBottom: '2px solid #2D2D2D', // Default color
                },
                '& .MuiInput-underline:hover:before': {
                    borderBottom: '2px solid #F15178', // Color on hover
                },
                '& .MuiInput-underline:after': {
                    borderBottom: '2px solid #F15178', // Color when focused
                },
            }}
        />
    )
}