# MUI-EVENT-LIBRARY

#### Developed By: Ashish Arora (GitId: ashisharora1998)

This is a Full year event calendar created with the help of MUI DatePicker.You can use this library easily by importing the component inside your project.

There’s no such library available like this where you can easily pass dates to show events on a complete year calendar.



### Steps to run this project:

#### `Open the command prompt inside your project`

#### `npm install mui-event-library - - save`

#### `npm start`


#### Make sure all the required libraries are installed.


### Props list:

##### selectBadgeBackgroundColor: 
This prop sets a background color as a highlighter for your event badge to differentiate it from the other regular dates. All Event badges will have the same color.

##### selectBadgeTextColor:  
This prop sets a text color for the event badge. (Default color: black)

##### badgeTextColor: 
This prop sets a text color for the regular dates.

##### values: 
Pass an array of formatted dates of events to highlight them on the calendar.ex:[“12-02-2022”,”12-05-2022”,”12-02-2022”,”11-23-2022”,”11-18-2022”].

##### onDateClick: 
Pass a function to perform any event on click of any date. This prop will return 3 values e, day, and isSelected. You can also use the e to add any tooltip or popover on click of any date.

##### year: 
Pass the current year or any other you want to show on the calendar.

##### dateFormat: 
Pass format for a date you are using to pass values. Ex: ”MM-DD-YYYY”.



You can use this project or component as you want in your project by customizing it as per your theme.


