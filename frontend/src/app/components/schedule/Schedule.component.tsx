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
import { Course } from "../../../features/interfaces";

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

const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

interface ScheduleProps {
    isAuthor: boolean;
    user_id?: string;
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

const test_data2 = {
  "courses": [
    {
      "title": "Probability and Statistics for Engineers",
      "courseCode": "ECSE 205",
      "section": "001",
      "schedule": {
        "time": "8:35 am - 9:55 am",
        "days": "TR",
        "location": "Maass Chemistry Building 112"
      }
    },
    {
      "title": "Probability and Statistics for Engineers",
      "courseCode": "ECSE 205",
      "section": "003",
      "schedule": {
        "time": "12:35 pm - 2:25 pm",
        "days": "F",
        "location": "Macdonald Engineering Building 279"
      }
    },
    {
      "title": "Digital Logic",
      "courseCode": "ECSE 222",
      "section": "001",
      "schedule": {
        "time": "10:05 am - 11:25 am",
        "days": "TR",
        "location": "Maass Chemistry Building 112"
      }
    },
    {
      "title": "Digital Logic",
      "courseCode": "ECSE 222",
      "section": "004",
      "schedule": {
        "time": "1:35 pm - 3:25 pm",
        "days": "W",
        "location": "Wong Building 1030"
      }
    },
    {
      "title": "Fundamentals of Software Development",
      "courseCode": "ECSE 250",
      "section": "001",
      "schedule": {
        "time": "1:05 pm - 2:25 pm",
        "days": "TR",
        "location": "McConnell Engineering Building 304"
      }
    },
    {
      "title": "Fundamentals of Software Development",
      "courseCode": "ECSE 250",
      "section": "002",
      "schedule": {
        "time": "11:35 am - 1:25 pm",
        "days": "W",
        "location": "McConnell Engineering Building 11"
      }
    },
    {
      "title": "Introduction to the Engineering Profession",
      "courseCode": "FACC 100",
      "section": "002",
      "schedule": {
        "time": "2:35 pm - 3:55 pm",
        "days": "F",
        "location": "Adams Building AUD"
      }
    },
    {
      "title": "Discrete Structures",
      "courseCode": "MATH 240",
      "section": "001",
      "schedule": {
        "time": "11:35 am - 12:55 pm",
        "days": "TR",
        "location": "Leacock Building 219"
      }
    },
    {
      "title": "Communication in Engineering",
      "courseCode": "WCOM 206",
      "section": "711",
      "schedule": {
        "time": "8:35 am - 9:55 am",
        "days": "MW",
        "location": "Sherbrooke 680 1047"
      }
    }
  ]
}

export const ScheduleComponent = ({isAuthor, user_id}: ScheduleProps) => {

  const courses: Course[] = test_data.courses;

  // TODO: Fetch user's schedule, either API or from Redux store

  // ADD TextField to add courses to schedule

  return (
    <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center', boxSizing: 'border-box'}}>
      {courses && courses.length > 0 ? <>
        <ScheduleDayRow/>
        <Box sx={{display: 'flex', flexDirection: 'row', width: '750px', border: '1px solid #d3d3d3', boxSizing: 'border-box'}}>
          <TimeColumnComponent/>
          {days.map((day, index) => 
            <ScheduleColumnComponent dayIndex={index} courses={test_data.courses}/>
          )}
        </Box>
      </> : 
      <>Empty Schedule</>}
    </Box>
  );
}