/** @format */

import { Badge, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import React from "react";
import { StyledStaticDatePicker } from "./style";

function Calendar({
  selectBadgeBackgroundColor,
  selectBadgeTextColor,
  badgeTextColor,
  values,
  onDateClick,
  dateFormat,
  year
}) {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
          <Grid container spacing={5}>
            {[...Array(12)].map((val, index) => (
              <Grid md={4} item>
                <StyledStaticDatePicker
                  value={new Date(year, index)}
                  renderInput={(params) => {
                    <TextField {...params} />;
                  }}
                  renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                      !DayComponentProps.outsideCurrentMonth &&
                      values?.indexOf(moment(day).format(dateFormat)) >= 0;

                    return (
                      <Badge
                        key={day.toString()}
                        overlap='circular'
                        onClick={(e) => onDateClick(e, day, isSelected)}>
                        <PickersDay
                          {...DayComponentProps}
                          sx={
                            isSelected
                              ? {
                                  backgroundColor: `${selectBadgeBackgroundColor} !important`,
                                  color: `${selectBadgeTextColor} !important`,
                                }
                              : {
                                  color: `${badgeTextColor} !important`,
                                  background: "none !important",
                                }
                          }
                        />
                      </Badge>
                    );
                  }}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </LocalizationProvider>
    </Box>
  );
}

export default Calendar;
