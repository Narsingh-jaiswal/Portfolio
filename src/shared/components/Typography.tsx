import React from "react";
import { Typography, TypographyProps } from "@mui/material";

export const CustomTypography: React.FC<TypographyProps> = ({ children, ...props }) => {
    const style = { fontFamily: "Lora", color: '#313131' }

    return (
        <Typography style={{ ...style, ...props.style }} {...props}>{children}</Typography>
    )
}