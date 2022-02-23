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
    </div>
  );
}

export default App;
