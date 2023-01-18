'use strict';

var _extends = require('@babel/runtime/helpers/extends');
var _toConsumableArray = require('@babel/runtime/helpers/toConsumableArray');
var material = require('@mui/material');
var system = require('@mui/system');
var xDatePickers = require('@mui/x-date-pickers');
var AdapterDateFns = require('@mui/x-date-pickers/AdapterDateFns');
var moment = require('moment');
var React = require('react');
var styled = require('@emotion/styled');
var StaticDatePicker = require('@mui/x-date-pickers/StaticDatePicker');

/** @format */
var StyledStaticDatePicker = styled(StaticDatePicker.StaticDatePicker)(function (_ref) {
  _ref.theme;
  return {
    "& .MuiDialogActions-root": {
      display: "none !important"
    },
    "& .MuiDatePickerToolbar-root": {
      display: "none"
    },
    "& .MuiPickersArrowSwitcher-root": {
      display: "none"
    },
    "& .MuiPickersCalendarHeader-switchViewButton": {
      display: "none"
    },
    "& .MuiPickersCalendarHeader-root": {
      alignSelf: "center"
    },
    "& .BaseBadge-root": {
      height: "43px",
      width: "43px"
    },
    "& .MuiCalendarPicker-root": {
      minHeight: "380px",
      overflowY: "hidden"
    },
    "& .PrivatePickersSlideTransition-root": {
      minHeight: "280px"
    },
    "& .css-epd502": {
      maxHeight: "400px"
    },
    "& .MuiPickersDay-today": {
      border: "none !important"
    }
  };
});

function Calendar(_ref) {
  var selectBadgeBackgroundColor = _ref.selectBadgeBackgroundColor,
    selectBadgeTextColor = _ref.selectBadgeTextColor,
    badgeTextColor = _ref.badgeTextColor,
    values = _ref.values,
    onDateClick = _ref.onDateClick,
    dateFormat = _ref.dateFormat,
    year = _ref.year;
  return /*#__PURE__*/React.createElement(system.Box, null, /*#__PURE__*/React.createElement(xDatePickers.LocalizationProvider, {
    dateAdapter: AdapterDateFns.AdapterDateFns
  }, /*#__PURE__*/React.createElement(system.Box, null, /*#__PURE__*/React.createElement(material.Grid, {
    container: true,
    spacing: 5
  }, _toConsumableArray(Array(12)).map(function (val, index) {
    return /*#__PURE__*/React.createElement(material.Grid, {
      md: 4,
      item: true
    }, /*#__PURE__*/React.createElement(StyledStaticDatePicker, {
      value: new Date(year, index),
      renderInput: function renderInput(params) {
      },
      renderDay: function renderDay(day, _value, DayComponentProps) {
        var isSelected = !DayComponentProps.outsideCurrentMonth && (values === null || values === void 0 ? void 0 : values.indexOf(moment(day).format(dateFormat))) >= 0;
        return /*#__PURE__*/React.createElement(material.Badge, {
          key: day.toString(),
          overlap: "circular",
          onClick: function onClick(e) {
            return onDateClick(e, day, isSelected);
          }
        }, /*#__PURE__*/React.createElement(xDatePickers.PickersDay, _extends({}, DayComponentProps, {
          sx: isSelected ? {
            backgroundColor: "".concat(selectBadgeBackgroundColor, " !important"),
            color: "".concat(selectBadgeTextColor, " !important")
          } : {
            color: "".concat(badgeTextColor, " !important"),
            background: "none !important"
          }
        })));
      }
    }));
  })))));
}

var returnLibrary = function returnLibrary() {
  return {
    EventCalendar: Calendar
  };
};
var index = returnLibrary();

module.exports = index;
