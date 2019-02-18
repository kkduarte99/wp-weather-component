import Controller from "./Controller";

export default class WeatherComponent {
  constructor() {
    this.controller = new Controller();
    this.locInput = document.getElementById("locInput");
  }

  getWeatherInfo(city) {

  }
}

window.weatherComponent = new weatherComponent();
