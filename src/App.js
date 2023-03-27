import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="New York" />
        <footer>
          <a href="https://github.com/natashamos/react-weather-app">
            Open-source code
          </a>{" "}
          by Natasha Moskaljov
        </footer>
      </div>
    </div>
  );
}

export default App;
