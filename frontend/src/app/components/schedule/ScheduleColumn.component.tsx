import React from "react";
import { Box, Typography } from "@mui/material";
import TimeBlock from "./TimeBlock.component";
import { Course } from "../../../features/interfaces";

const timeOfTheDay = [
   "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];
  
const SCHEDULE_HOUR_HEIGHT = 60;

const TIME_COLUMN_WIDTH = 100;

const SCHEDULE_NUMBER_OF_HOURS = 11;

const FONT_SIZE = 12;

const DATE_COLUMN_WIDTH = 130;

export const TimeColumnComponent = () => {
  const PADDING_RIGHT = 10;
  return (
    <Box
      sx={{
        height: `${SCHEDULE_HOUR_HEIGHT * (SCHEDULE_NUMBER_OF_HOURS + 1) + 1}px`,
        width: `${TIME_COLUMN_WIDTH}px`,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-end",
        paddingRight: `${PADDING_RIGHT}px`,
        paddingTop: `${SCHEDULE_HOUR_HEIGHT - FONT_SIZE/2}px`,
        marginBottom: 0,
        borderRight: "1px solid #d3d3d3",
        boxSizing: "border-box",
      }}
    >
      {timeOfTheDay.map((time) => {
        return (
          <Box
            sx={{
              height: `${SCHEDULE_HOUR_HEIGHT}px`,
            }}
            key={`TimeColumnComponent ${time}`}
          >
            <Typography sx={{ marginTop: `-${FONT_SIZE / 2}px` }}>{time}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

const dayIndextoDay = (dayIndex: number) => {
  switch (dayIndex) {
    case 0:
      return "M";
    case 1:
      return "T";
    case 2:
      return "W";
    case 3:
      return "T";
    case 4:
      return "F";
    default:
      return "A"
  }
}

export const ScheduleColumnComponent = ({dayIndex, courses}: {dayIndex: number, courses: Course[]}) => {
  return (
    <Box
      sx={{
        height: `${SCHEDULE_HOUR_HEIGHT * (SCHEDULE_NUMBER_OF_HOURS + 1)}px`,
        width: `${DATE_COLUMN_WIDTH}px`,
        userSelect: "none",
        background: `linear-gradient(to top, transparent ${SCHEDULE_HOUR_HEIGHT - 1}px, #d3d3d3 1px)`,
        backgroundSize: `100% ${SCHEDULE_HOUR_HEIGHT}px`,
        position: "relative",
        borderRight: dayIndex !== 4 ? "1px solid #d3d3d3" : "",
        borderTop: "none",
        boxSizing: "border-box",
      }}
    >
      {courses.map((course, index) => 
        (course.schedule.days.includes(dayIndextoDay(dayIndex)) && <TimeBlock course={course} key={`TimeBlock ${index}`}/>) 
      )}
    </Box>
  );
};