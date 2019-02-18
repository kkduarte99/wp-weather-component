import CityList from "city.list";
export default class Controller {
  constructor() {
    //weather underground API
    this.api = "";
    this.country = "US";
    this.city = "";
    this.cityLookup = CityList;
  }

  getIDByCity(city) {
    let cityByIdInfo = {};
    //reducing number of cities that include the city name.
    let reducedCities = this.cityLookup.map(cityInfo => {
      //normalizing cities
      let name = cityInfo.name.toLowerCase();
      return name.indexOf(city.toLowerCase()) !== -1 && this.country === cityInfo.country;
    });

    for (let i = 0; i < reducedCities.length; i++) {
      let queryCity = reducedCities[i];

      if (queryCity.name === city) {
        cityByIdInfo = queryCity;
        break;
      }
    }

    return cityByIdInfo.id;
  }
}
