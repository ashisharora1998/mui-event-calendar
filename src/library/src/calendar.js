/** @format */

import { Badge, Grid, TextField } from "@mui/material";
import { Box } from "@mui/system";
import { LocalizationProvider, PickersDay } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import moment from "moment";
import React from "react";
import { StyledStaticDatePicker } from "./style";
import PropTypes from "prop-types";

function Calendar(props) {
  return (
    <Box>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box>
          <Grid container spacing={5}>
            {[...Array(12)].map((val, index) => (
              <Grid md={4} item>
                <StyledStaticDatePicker
                  value={new Date(props.year, index)}
                  renderInput={(params) => {
                    <TextField {...params} />;
                  }}
                  renderDay={(day, _value, DayComponentProps) => {
                    const isSelected =
                      !DayComponentProps.outsideCurrentMonth &&
                      props.values?.indexOf(
                        moment(day).format(props.dateFormat)
                      ) >= 0;

                    return (
                      <Badge
                        key={day.toString()}
                        overlap='circular'
                        onClick={(e) => props.onDateClick(e, day, isSelected)}>
                        <PickersDay
                          {...DayComponentProps}
                          sx={
                            isSelected
                              ? {
                                  backgroundColor: `${props.selectBadgeBackgroundColor} !important`,
                                  color: `${props.selectBadgeTextColor} !important`,
                                }
                              : {
                                  color: `${props.badgeTextColor} !important`,
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
Calendar.propTypes = {
  selectBadgeBackgroundColor: PropTypes.string.isRequired,
  selectBadgeTextColor: PropTypes.string.isRequired,
  badgeTextColor: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onDateClick: PropTypes.func.isRequired,
  dateFormat: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
};
export default Calendar;
