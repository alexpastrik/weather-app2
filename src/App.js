import "./styles.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <Weather />

      <p>
        This project was coded by ALex Pastrik and it is{" "}
        <a href="https://github.com/alexpastrik/weather-app2" target="_blank">
          open-sourced.
        </a>
      </p>
    </div>
  );
}
