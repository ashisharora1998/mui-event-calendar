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
var PropTypes = require('prop-types');

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

function Calendar(props) {
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
      value: new Date(props.year, index),
      renderInput: function renderInput(params) {
      },
      renderDay: function renderDay(day, _value, DayComponentProps) {
        var _props$values;
        var isSelected = !DayComponentProps.outsideCurrentMonth && ((_props$values = props.values) === null || _props$values === void 0 ? void 0 : _props$values.indexOf(moment(day).format(props.dateFormat))) >= 0;
        return /*#__PURE__*/React.createElement(material.Badge, {
          key: day.toString(),
          overlap: "circular",
          onClick: function onClick(e) {
            return props.onDateClick(e, day, isSelected);
          }
        }, /*#__PURE__*/React.createElement(xDatePickers.PickersDay, _extends({}, DayComponentProps, {
          sx: isSelected ? {
            backgroundColor: "".concat(props.selectBadgeBackgroundColor, " !important"),
            color: "".concat(props.selectBadgeTextColor, " !important")
          } : {
            color: "".concat(props.badgeTextColor, " !important"),
            background: "none !important"
          }
        })));
      }
    }));
  })))));
}
Calendar.propTypes = {
  selectBadgeBackgroundColor: PropTypes.string.isRequired,
  selectBadgeTextColor: PropTypes.string.isRequired,
  badgeTextColor: PropTypes.string.isRequired,
  values: PropTypes.array.isRequired,
  onDateClick: PropTypes.func.isRequired,
  dateFormat: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired
};

var returnLibrary = function returnLibrary() {
  return {
    EventCalendar: Calendar
  };
};
var index = returnLibrary();

module.exports = index;
