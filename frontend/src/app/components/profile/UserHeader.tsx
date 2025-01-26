import React from "react";
import { Avatar, Box, Typography } from "@mui/material";

interface UserHeaderProps {
    username: string;
}

const capitalize = (str: string) => {
    if (!str) return ""; // Handle empty strings
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export const UserHeader = ({username}: UserHeaderProps) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            p: 2,
            height: '200px',
            width: '750px',
            boxSizing: 'border-box'
        }}>
            <Avatar src="/capybara.jpg" sx={{height: '150px', width: '150px'}}></Avatar>
            <Box sx={{ml:5}}></Box>
            <Typography sx={{fontWeight: '1000'}} variant='h4'>{capitalize(username)}</Typography>
        </Box>
    );
}