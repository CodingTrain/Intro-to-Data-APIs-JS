// Geo Locate
let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async position => {
    try {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      document.getElementById('latitude').textContent = lat.toFixed(2);
      document.getElementById('longitude').textContent = lon.toFixed(2);
      const api_url = `weather/${lat},${lon}`;
      const response = await fetch(api_url);
      const json = await response.json();
      console.log(json);
      const weather = json.weather.currently;
      const air = json.air_quality.results[0].measurements[0];
      document.getElementById('summary').textContent = weather.summary;
      document.getElementById('temp').textContent = weather.temperature;
      document.getElementById('aq_parameter').textContent = air.parameter;
      document.getElementById('aq_value').textContent = air.value;
      document.getElementById('aq_units').textContent = air.unit;
      document.getElementById('aq_date').textContent = air.lastUpdated;
    } catch (error) {
      console.error(error);
      document.getElementById('aq_value').textContent = 'NO READING';
    }
  });
} else {
  console.log('geolocation not available');
}

// Handle button presses, submit data to database
const button = document.getElementById('checkin');
button.addEventListener('click', async event => {
  const data = { lat, lon };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };
  const response = await fetch('/api', options);
  const json = await response.json();
  console.log(json);
});
