import "./App.css";
import Calendar from "./components/Calendar";

const App = () => {
  return (
    <div className="App">
      <h1>Computer Science Courses Schedule 💻</h1>
      <h2>Welcome to one of my CS pages! Check out this calendar to see some of our courses avaliable this semester. </h2>
      <Calendar />
    </div>
  );
};

export default App;
