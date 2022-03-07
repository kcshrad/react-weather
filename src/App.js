import "./App.css";
import Weather from "./Weather";
import "./Weather.css";

function App() {
  return (
    <div className="App">
      <div className="Main">
        <div className="container">
          <Weather defaultCity="New York" />
        </div>
      </div>
      <footer>
        <a href="https://github.com/kcshrad/react-weather">Open source code</a>,
        by Shraddha Thapa
      </footer>
    </div>
  );
}

export default App;
