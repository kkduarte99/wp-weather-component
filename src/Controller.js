import CityList from "city.list";

export default class Controller {
  constructor() {
    //open weather map API
    this.api = "api.openweathermap.org/data/2.5/weather";
    this.country = "US";
    this.city = "";
    this.id = null;
    this.cityLookup = CityList;
  }

  getIDByCity(city) {
    this.city = city;
    let cityByIdInfo = {};
    //reducing number of cities that include the city name.
    let reducedCities = this.cityLookup.map(cityInfo => {
      //normalizing cities
      let name = cityInfo.name.toLowerCase();
      return name.indexOf(this.city.toLowerCase()) !== -1 && this.country === cityInfo.country;
    });

    for (let i = 0; i < reducedCities.length; i++) {
      let queryCity = reducedCities[i];

      if (queryCity.name === this.city) {
        cityByIdInfo = queryCity;
        break;
      }
    }

    return cityByIdInfo.id;
  }

  httpGET(url) {
    return new Promise((resolve, reject) => {
      let request = new XMLHttpRequest();
      request.open("GET", url);
      request.onload = () => {
        if (request.status == 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }

      request.onerror = () => {
        reject(Error("Network Error"));
      };

      request.send();
    })
  }
  getWeather(city) {
    this.id = this.getIDByCity(city).id;
    return this.httpGET(`${this.api}?id=${this.id}`);
  }
}
