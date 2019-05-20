// Geo Locate
let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(async position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    document.getElementById('latitude').textContent = lat.toFixed(2);
    document.getElementById('longitude').textContent = lon.toFixed(2);
    // const api_url = `weather/${lat},${lon}`;
    const api_url = `/weather`;
    const response = await fetch(api_url);
    const json = await response.json();
    console.log(json);
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
