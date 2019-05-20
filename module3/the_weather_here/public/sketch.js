let lat, lon;
if ('geolocation' in navigator) {
  console.log('geolocation available');
  navigator.geolocation.getCurrentPosition(position => {
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    console.log(lat, lon);
    document.getElementById('latitude').textContent = lat.toFixed(2);
    document.getElementById('longitude').textContent = lon.toFixed(2);
  });
} else {
  console.log('geolocation not available');
}

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
