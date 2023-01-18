/** @format */

import styled from "@emotion/styled";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

export const StyledStaticDatePicker = styled(StaticDatePicker)(({ theme }) => ({
  "& .MuiDialogActions-root": {
    display: "none !important",
  },
  "& .MuiDatePickerToolbar-root": {
    display: "none",
  },
  "& .MuiPickersArrowSwitcher-root": {
    display: "none",
  },
  "& .MuiPickersCalendarHeader-switchViewButton": {
    display: "none",
  },
  "& .MuiPickersCalendarHeader-root": {
    alignSelf: "center",
  },
  "& .BaseBadge-root": {
    height: "43px",
    width: "43px",
  },
  "& .MuiCalendarPicker-root": {
    minHeight: "380px",
    overflowY: "hidden",
  },
  "& .PrivatePickersSlideTransition-root": {
    minHeight: "280px",
  },
  "& .css-epd502": {
    maxHeight: "400px",
  },
 
  "& .MuiPickersDay-today": {
    border: "none !important",
  },
}));
