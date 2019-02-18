import Controller from "./Controller";

export default class WeatherComponent {
  constructor() {
    this.controller = new Controller();
    this.locInput = document.getElementById("locInput");
    this.weatherData = {};
  }

  getWeatherInfo() {
    let cityValue = this.locInput.value;
    this.weatherData = this.controller.getWeather(cityValue);
  }
}

window.weatherComponent = new weatherComponent();
