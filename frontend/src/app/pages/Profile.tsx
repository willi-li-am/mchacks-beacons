import React, { useEffect } from "react";
import { Box } from "@mui/material";
import { ScheduleComponent } from "../components/schedule/Schedule.component";
import { useParams } from "react-router-dom";

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
    return (
        <Box>
            {user_id}
            <ScheduleComponent isAuthor={isAuthor} user_id={user_id} />
        </Box>
    );
}