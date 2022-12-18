/** @format */

import logo from "./logo.svg";
import "./App.css";
import Calendar from "./Component/calendar";

function App() {
  return (
    <div className='App'>
      <header className='App-header'>
        <div className="site-name">
          <img src={logo} className='App-logo' alt='logo' />
          <h3>React MUI Event Calendar</h3>
        </div>
        <h6>Developed By Ashish Arora</h6>
      </header>
      <Calendar
        year={new Date().getFullYear()}
        values={["2022-12-18", "2022-11-18", "2022-01-12"]}
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
