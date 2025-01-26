import React from 'react';
import { Course } from '../../../features/interfaces';
import { Box, Typography } from '@mui/material';

interface TimeBlockProps {
    course: Course
}

const getStart = (course: Course) => {
    const start = course.schedule.time.split(' - ')[0]
    let hour = parseInt(start.split(':')[0]) + (start.includes('pm') ? 12 : 0)
    if (hour === 24) {
        hour = 12
    }
    const minute = parseInt(start.split(':')[1].split(' ')[0])

    //480 is 8:00 AM
    return hour * 60 + minute - 480
}

const getHeight = (course: Course) => {
    const time = course.schedule.time.split(' - ');
    const start = time[0]
    const end = time[1]

    const isPM = [start, end].map(time => time.includes('pm'))

    let startHour = parseInt(start.split(':')[0]) + (isPM[0] ? 12 : 0)
    let endHour = parseInt(end.split(':')[0]) + (isPM[1] ? 12 : 0)

    if (startHour === 24) {
        startHour = 12
    }

    if (endHour === 24) {
        endHour = 12
    }

    const startMinute = parseInt(start.split(':')[1].split(' ')[0])
    const endMinute = parseInt(end.split(':')[1].split(' ')[0])
    
    return (endHour - startHour) * 60 + endMinute - startMinute
}

const changeTimeText = (time: string) => {
    // I want to change 9:00 am - 10:00 am to 9:00am - 10:00am
    const times = time.split(' - ')
    times[0] = times[0].replace(' ', '')
    times[1] = times[1].replace(' ', '')

    return times.join(' - ')
}

export const TimeBlock: React.FC<TimeBlockProps> = ({ course }) => {
    return (
       <Box sx={{
        position: 'absolute',
        width: '120px',
        height: `${getHeight(course)}px`,
        top: `${getStart(course)}px`,
        bgcolor: 'white',
        border: '1px solid #ff6e6e',
        borderLeft: '5px solid #ff6e6e',
        borderRadius: '5px',
        p:'2px',
        boxSizing: 'border-box',
        overflow: 'hidden',
       }}>
            <Typography sx={{
                letterSpacing: '0px',
                fontSize: '12px',
                color: '#ff0019'
            }} variant='body2'>{course.courseCode}</Typography>
            <Typography sx={{
                position: 'relative',
                letterSpacing: '0px',
                top: '-5px',
            }}  variant='caption'>{changeTimeText(course.schedule.time)}</Typography>
            {getHeight(course) >= 70 && <Typography sx={{
                position: 'relative',
                letterSpacing: '0px',
                lineHeight: '1.2',
                fontSize: '12px',
                top: '-8px',
                color: '#ff0019',
            }} >{course.schedule.location}</Typography>}
       </Box>
    );
};

export default TimeBlock;