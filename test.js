const { weather } = require('coding-weather');

const cityName = 'paris';
const latitude = 48.8567;
const longitude = 2.3508;

// Test en mode ville (anglais)
weather(cityName, undefined, 'en')
  .then(weatherData => {
    console.log('Weather Data (EN - City Mode):', weatherData);
  })
  .catch(error => {
    console.error('Error (EN - City Mode):', error.message);
  });

// Test en mode ville (français)
weather(cityName, undefined, 'fr')
  .then(weatherData => {
    console.log('Weather Data (FR - Mode Ville):', weatherData);
  })
  .catch(error => {
    console.error('Erreur (FR - Mode Ville):', error.message);
  });

// Test en mode latitude et longitude (anglais)
weather(latitude, longitude, 'en')
  .then(weatherData => {
    console.log('Weather Data by Coordinates (EN):', weatherData);
  })
  .catch(error => {
    console.error('Error (Coordinates EN):', error.message);
  });

// Test en mode latitude et longitude (français)
weather(latitude, longitude, 'fr')
  .then(weatherData => {
    console.log('Weather Data by Coordinates (FR):', weatherData);
  })
  .catch(error => {
    console.error('Erreur (Coordinates FR):', error.message);
  });
