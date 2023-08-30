<h1>Coding Weather</h1>

<p><strong>Note:</strong> Pour la documentation en francais, <a href="#french-section">cliquer ici</a>.</p>


<p>The <strong>Coding Weather Package</strong> is a Node.js package that provides a convenient way to fetch weather data using coordinates (latitude and longitude) from the CWeather API. It offers two modes of usage: the "City Mode" and the "Coordinates Mode". Additionally, you can access specific weather data fields such as temperature from the API response.</p>

<h2>Installation</h2>

<p>You can install the package using npm:</p>

<pre><code>npm install coding-weather</code></pre>

<h2>Usage</h2>

<h3>City Mode</h3>

<p>In this mode, you can use the <code>weather</code> function to retrieve weather data based on a city name. You can specify the language as 'en' for English or 'fr' for French.</p>

<pre><code>const { weather } = require('coding-weather');

const cityName = 'paris';

weather(cityName, 'en') // English language
  .then(weatherData => {
    console.log('Weather Data (EN - City Mode):', weatherData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
</code></pre>

<pre><code>// Response
{
  lat: 48.87,
  lon: 2.33,
  weather: {
    id: 1003,
    main: 'Partly cloudy',
    icon: '//cdn.weatherapi.com/weather/64x64/day/116.png'
  },
  current: {
    last_updated_epoch: 1693413900,
    last_updated: '2023-08-30 18:45',
    temp_c: 18,
    temp_f: 64.4,
    is_day: 1,
    wind_mph: 9.4,
    wind_kph: 15.1,
    wind_degree: 320,
    wind_dir: 'NW',
    pressure_mb: 1011,
    pressure_in: 29.85,
    precip_mm: 0,
    precip_in: 0,
    humidity: 56,
    cloud: 75,
    feelslike_c: 18,
    feelslike_f: 64.4,
    vis_km: 10,
    vis_miles: 6,
    uv: 6,
    gust_mph: 12.3,
    gust_kph: 19.8
  },
  location: {
    name: 'Paris',
    region: 'Ile-de-France',
    country: 'France',
    tz_id: 'Europe/Paris',
    localtime_epoch: 1693414114,
    localtime: '2023-08-30 18:48'
  }
}
</code></pre>

<h3>Coordinates Mode</h3>

<p>You can use the <code>weather</code> function to retrieve weather data based on coordinates (latitude and longitude). Specify the language as 'en' for English or 'fr' for French.</p>

<pre><code>const { weather } = require('coding-weather');

const latitude = 48.8567;
const longitude = 2.3508;

weather(latitude, longitude, 'en') // English language
  .then(weatherData => {
    console.log('Weather Data by Coordinates (EN):', weatherData);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
</code></pre>

<pre><code>// Response
{
  lat: 36.1,
  lon: 120.37,
  weather: {
    id: 1000,
    main: 'Clear',
    icon: '//cdn.weatherapi.com/weather/64x64/night/113.png'
  },
  current: {
    last_updated_epoch: 1693413900,
    last_updated: '2023-08-31 00:45',
    temp_c: 22,
    temp_f: 71.6,
    is_day: 0,
    wind_mph: 2.2,
    wind_kph: 3.6,
    wind_degree: 257,
    wind_dir: 'WSW',
    pressure_mb: 1012,
    pressure_in: 29.88,
    precip_mm: 0,
    precip_in: 0,
    humidity: 78,
    cloud: 0,
    feelslike_c: 24.6,
    feelslike_f: 76.2,
    vis_km: 10,
    vis_miles: 6,
    uv: 1,
    gust_mph: 4,
    gust_kph: 6.5
  },
  location: {
    name: 'Qingdao',
    region: 'Shandong',
    country: 'China',
    tz_id: 'Asia/Shanghai',
    localtime_epoch: 1693414109,
    localtime: '2023-08-31 00:48'
  }
}
</code></pre>

<h3>Accessing Specific Weather Data</h3>

<p>To access specific weather data fields such as temperature, you can directly navigate through the response object returned by the API. Here's an example of how to access the temperature field:</p>

<pre><code>weather(latitude, longitude, 'en')
  .then(weatherData => {
    const temperatureCelsius = weatherData.current.temp_c;
    const temperatureFahrenheit = weatherData.current.temp_f;

    console.log(`Temperature (C): ${temperatureCelsius}`);
    console.log(`Temperature (F): ${temperatureFahrenheit}`);
  })
  .catch(error => {
    console.error('Error:', error.message);
  });
</code></pre>

<h1 id="french-section">Documentation francaise</h1>

<p><strong>Coding Weather</strong> est un package Node.js qui permet de récupérer des données météorologiques en utilisant des coordonnées (latitude et longitude) à partir de l'API CWeather. Il propose deux modes d'utilisation : le "Mode Ville" et le "Mode Coordonnées". De plus, il est possible d'accéder à des champs spécifiques des données météorologiques, comme la température, à partir de la réponse de l'API.</p>

<h2>Installation</h2>

<p>Vous pouvez installer le package à l'aide de npm :</p>

<pre><code>npm install coding-weather</code></pre>

<h2>Utilisation</h2>

<h3>Mode Ville</h3>

<p>Dans ce mode, vous pouvez utiliser la fonction <code>weather</code> pour obtenir des données météorologiques en spécifiant le nom d'une ville. Vous pouvez choisir la langue 'fr' pour le français ou 'en' pour l'anglais.</p>

<pre><code>const { weather } = require('coding-weather');

const cityName = 'paris';

weather(cityName, 'fr') // Langue française
  .then(weatherData => {
    console.log('Données Météo (FR - Mode Ville) :', weatherData);
  })
  .catch(error => {
    console.error('Erreur :', error.message);
  });
</code></pre>

<pre><code>// Exemple de réponse JSON en français
{
  lat: 48.87,
  lon: 2.33,
  meteo: {
    id: 1003,
    principal: 'Partiellement nuageux',
    icone: '//cdn.weatherapi.com/weather/64x64/day/116.png'
  },
  actuel: {
    dernier_maj_epoch: 1693413900,
    dernier_maj: '2023-08-30 18:45',
    temp_c: 18,
    temp_f: 64.4,
    est_jour: 1,
    vitesse_vent_mph: 9.4,
    vitesse_vent_kph: 15.1,
    degre_vent: 320,
    direction_vent: 'NW',
    pression_mb: 1011,
    pression_in: 29.85,
    precip_mm: 0,
    precip_in: 0,
    humidite: 56,
    nuage: 75,
    sensation_c: 18,
    sensation_f: 64.4,
    visibilite_km: 10,
    visibilite_miles: 6,
    indice_uv: 6,
    rafale_mph: 12.3,
    rafale_kph: 19.8
  },
  lieu: {
    nom: 'Paris',
    region: 'Ile-de-France',
    pays: 'France',
    tz_id: 'Europe/Paris',
    localtime_epoch: 1693414114,
    localtime: '2023-08-30 18:48'
  }
}
</code></pre>

<h3>Mode Coordonnées</h3>

<p>Vous pouvez utiliser la fonction <code>weather</code> pour obtenir des données météorologiques en utilisant des coordonnées (latitude et longitude). Spécifiez la langue 'fr' pour le français ou 'en' pour l'anglais.</p>

<pre><code>const { weather } = require('coding-weather');

const latitude = 48.8567;
const longitude = 2.3508;

weather(latitude, longitude, 'fr') // Langue française
  .then(weatherData => {
    console.log('Données Météo par Coordonnées (FR) :', weatherData);
  })
  .catch(error => {
    console.error('Erreur :', error.message);
  });
</code></pre>

<pre><code>// Exemple de réponse JSON en français
{
  lat: 36.1,
  lon: 120.37,
  meteo: {
    id: 1000,
    principal: 'Clair',
    icone: '//cdn.weatherapi.com/weather/64x64/night/113.png'
  },
  actuel: {
    dernier_maj_epoch: 1693413900,
    dernier_maj: '2023-08-31 00:45',
    temp_c: 22,
    temp_f: 71.6,
    est_jour: 0,
    vitesse_vent_mph: 2.2,
    vitesse_vent_kph: 3.6,
    degre_vent: 257,
    direction_vent: 'WSW',
    pression_mb: 1012,
    pression_in: 29.88,
    precip_mm: 0,
    precip_in: 0,
    humidite: 78,
    nuage: 0,
    sensation_c: 24.6,
    sensation_f: 76.2,
    visibilite_km: 10,
    visibilite_miles: 6,
    indice_uv: 1,
    rafale_mph: 4,
    rafale_kph: 6.5
  },
  lieu: {
    nom: 'Qingdao',
    region: 'Shandong',
    pays: 'Chine',
    tz_id: 'Asia/Shanghai',
    localtime_epoch: 1693414109,
    localtime: '2023-08-31 00:48'
  }
}
</code></pre>

<h3>Accès à des Données Météorologiques Spécifiques</h3>

<p>Pour accéder à des champs spécifiques des données météorologiques, comme la température, vous pouvez naviguer directement dans l'objet de réponse renvoyé par l'API. Voici un exemple d'accès au champ de température :</p>

<pre><code>weather(latitude, longitude, 'fr')
  .then(weatherData => {
    const temperatureCelsius = weatherData.actuel.temp_c;
    const temperatureFahrenheit = weatherData.actuel.temp_f;

    console.log(`Température (°C) : ${temperatureCelsius}`);
    console.log(`Température (°F) : ${temperatureFahrenheit}`);
  })
  .catch(error => {
    console.error('Erreur :', error.message);
  });
</code></pre>

<h2>Licence</h2>

<p>Ce projet est sous licence <a href="LICENSE">MIT</a>.</p>
<p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
