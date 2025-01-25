import React from "react";
import { Box, Typography } from "@mui/material";

const TIME_COLUMN_WIDTH = 20;

const DATE_ROW_HEIGHT = 50;

const DATE_COLUMN_WIDTH = 130;

const daysOfTheWeekday = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

export const ScheduleDayRow = () => {
  return (
    <Box
      sx={{
        height: `${DATE_ROW_HEIGHT}px`,
        display: "flex",
        flexDirection: "row",
        border: "1px solid #d3d3d3",
        borderBottom: "none",
        justifyContent: "end",
        width: "748px"
      }}
    >
      <Box
        sx={{
          height: `${DATE_ROW_HEIGHT}px`,
          display: "flex",
          flexDirection: "row",
        }}
      >
        {daysOfTheWeekday.map((day) => {
          return (
            <Typography
              sx={{
                width: `${DATE_COLUMN_WIDTH}px`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              key={`ScheduleRowComponent ${day}`}
            >
              {day}
            </Typography>
          );
        })}
      </Box>
    </Box>
  );
};