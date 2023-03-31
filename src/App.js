import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Zagreb" />
        <footer>
          <a
            className="footer-link"
            href="https://github.com/natashamos/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open-source code
          </a>{" "}
          by Natasha Moskaljov
        </footer>
      </div>
    </div>
  );
}

export default App;
