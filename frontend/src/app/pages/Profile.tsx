import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { ScheduleComponent } from "../components/schedule/Schedule.component";
import { useParams } from "react-router-dom";
import { UserHeader } from "../components/profile/UserHeader";
import NotFound from "./NotFound";

interface ProfileProps {
    
}

export const Profile = ({}: ProfileProps) => {
    const [isAuthor, setIsAuthor] = React.useState(false);
    const { user_id } = useParams<{ user_id: string }>();

    useEffect(() => {
        // Check if user is the author of the profile
        // if (user_id === 'author_id') {
        //     setIsAuthor(true);
        // }

        // Check if user_id is an actual profile

        // Fetch user data
    }, [])

    if (!user_id) {
        // Redirect to 404
        return <NotFound/>
    }

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center', paddingBottom: 4}}>
            <UserHeader username={user_id} />
            <Box sx={{mt:2}}></Box>
            <ScheduleComponent isAuthor={isAuthor} user_id={user_id} />
        </Box>
    );
}