const axios = require('axios');

const API_ROUTES = {
  fr: { base: '/', term: 'ville' },
  en: { base: '/en', term: 'city' }
};

const ERROR_MESSAGES = {
  en: 'Error fetching weather data',
  fr: 'Erreur lors de la récupération des données météorologiques'
};

async function weather(cityOrLatitude, longitude, lang = 'en') {
  const route = API_ROUTES[lang] || API_ROUTES.en;
  let url;

  if (typeof longitude === 'undefined') {
    url = `https://cweather.vercel.app${route.base}/${cityOrLatitude}`;
  } else {
    url = `https://cweather.vercel.app${route.base}/q=${cityOrLatitude},${longitude}`;
  }

  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    throw new Error(ERROR_MESSAGES[lang]);
  }
}

module.exports = {
  weather
};
