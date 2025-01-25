import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Paper,
} from "@mui/material";
import { ScheduleColumnComponent, TimeColumnComponent } from "./ScheduleColumn.component";
import { ScheduleDayRow } from "./ScheduleDays.component";

interface Courses {
  title: string;
  courseCode: string;
  section: string;
  schedule: {
    time: string;
    days: string;
    location: string;
  };
}

const test_data = {
  "courses": [
    {
      "title": "Introduction to Software Systems.",
      "courseCode": "COMP 206",
      "section": "001",
      "schedule": {
        "time": "2:35 pm - 3:55 pm",
        "days": "MW",
        "location": "Leacock Building 132",
        "dateRange": "Jan 06, 2025 - Apr 11, 2025"
      }
    },
    {
      "title": "Introduction to Computer Science.",
      "courseCode": "COMP 250",
      "section": "001",
      "schedule": {
        "time": "2:35 pm - 3:55 pm",
        "days": "TR",
        "location": "Leacock Building 132",
        "dateRange": "Jan 06, 2025 - Apr 11, 2025"
      }
    },
    {
      "title": "Introduction to Computer Systems.",
      "courseCode": "COMP 273",
      "section": "001",
      "schedule": {
        "time": "1:05 pm - 2:25 pm",
        "days": "MW",
        "location": "Adams Building AUD",
        "dateRange": "Jan 06, 2025 - Apr 11, 2025"
      }
    },
    {
      "title": "Understanding Planet Earth.",
      "courseCode": "EPSC 201",
      "section": "001",
      "schedule": {
        "time": "1:05 pm - 2:25 pm",
        "days": "TR",
        "location": "Leacock Building 26",
        "dateRange": "Jan 06, 2025 - Apr 11, 2025"
      }
    },
    {
      "title": "Probability.",
      "courseCode": "MATH 323",
      "section": "002",
      "schedule": {
        "time": "11:35 am - 12:55 pm",
        "days": "TR",
        "location": "Maass Chemistry Building 112",
        "dateRange": "Jan 06, 2025 - Apr 11, 2025"
      }
    }
  ]
}

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

interface ScheduleProps {
    isAuthor: boolean;
    user_id?: string;
}

export const ScheduleComponent = ({isAuthor, user_id}: ScheduleProps) => {

  const courses = test_data.courses;

  return (
    <Paper elevation={1} sx={{ p: 2, width: '800px'}}>
      <Typography variant="h5" sx={{width: '100px'}}>Schedule</Typography>
      <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
        <ScheduleDayRow/>
        <Box sx={{display: 'flex', flexDirection: 'row', width: '750px'}}>
          <TimeColumnComponent/>
          {days.map((day, index) => 
            <ScheduleColumnComponent dayIndex={index}/>
          )}
        </Box>
      </Box>
    </Paper>
  );
}