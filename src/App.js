/** @format */

import "./App.css";
import Calendar from "./library/src/calendar";

function App() {
  return (
    <div className='App'>
      <Calendar
        year="2023"
        values={["2023-12-18", "2023-11-18", "2023-01-12"]}
        selectBadgeBackgroundColor={"black"}
        selectBadgeTextColor={"white"}
        badgeTextColor={"black"}
        onDateClick={(e, day, isSelected) => console.log(e, day, isSelected)}
        dateFormat={"YYYY-MM-DD"}
      />
    </div>
  );
}

export default App;
