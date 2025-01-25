import React from "react";
import { Box, Typography } from "@mui/material";

const timeOfTheDay = [
   "9:00 AM", "10:00 AM", "11:00 AM",
    "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM",
    "4:00 PM", "5:00 PM", "6:00 PM", "7:00 PM"
  ];
  
const SCHEDULE_HOUR_HEIGHT = 60;

const TIME_COLUMN_WIDTH = 100;

const SCHEDULE_NUMBER_OF_HOURS = 11;

const FONT_SIZE = 12;

const DATE_COLUMN_WIDTH = 129;

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
        boxSizing: "border-box",
        border: "1px solid #d3d3d3",
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

export const ScheduleColumnComponent = ({dayIndex,}: {dayIndex: number;}) => {
  return (
    <Box
      sx={{
        height: `${SCHEDULE_HOUR_HEIGHT * (SCHEDULE_NUMBER_OF_HOURS + 1)}px`,
        width: `${DATE_COLUMN_WIDTH}px`,
        userSelect: "none",
        background: `linear-gradient(to top, transparent ${SCHEDULE_HOUR_HEIGHT - 1}px, #d3d3d3 1px)`,
        backgroundSize: `100% ${SCHEDULE_HOUR_HEIGHT}px`,
        position: "relative",
        borderBottom: "1px solid #d3d3d3",
        borderRight: "1px solid #d3d3d3",
      }}
    >
      {/* schedule time blocks here */}
    </Box>
  );
};