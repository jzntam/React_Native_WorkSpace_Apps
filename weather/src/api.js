var _ = require('lodash');

var apiKey  = require('./api_key');
var rootUrl = `http://api.openweathermap.org/data/2.5/weather?APPID=${apiKey}`;

var kelvinToF = function(kelvin) {
  return Math.round((kelvin - 273.15) * 1.8 + 32) + ' ˚F'
};

var kelvinToC = function(kelvin) {
  return Math.round(kelvin - 273.15) + ' ˚C'
};

module.exports = function(latitude, longitude) {
  var url = `${rootUrl}&lat=${latitude}&lon=${longitude}`;

  return fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(json) {
      return {
        city:        json.name,
        celcius:     kelvinToC(json.main.temp),
        farenheit:   kelvinToF(json.main.temp),
        description: _.capitalize(json.weather[0].description)
      }
    });
}
