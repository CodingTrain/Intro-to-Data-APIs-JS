const mymap = L.map('checkinMap').setView([0, 0], 1);
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl = 'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();

async function getData() {
  const response = await fetch('/api');
  const data = await response.json();
  const pointList = [];

  for (item of data) {
    pointList.push([item.lat, item.lon]);
    console.log(item);
    const marker = L.marker([item.lat, item.lon]).addTo(mymap);
    let txt = `I'm sitting out here at ${item.lat}&deg;,  ${item.lon}&deg;, on
    this ${item.weather.summary} day and it feels like ${item.weather.temperature}&deg; outside.`;
    if (item.air.value < 0) {
      txt += '  No air quality reading.';
    } else {
      txt += `  
      The concentration of small carcinogenic particles (${item.air.measurements[0].parameter}) I'm
        breathing in is  ${item.air.measurements[0].value} ${
        item.air.measurements[0].unit
      } measured from
       ${item.air.city} at ${item.air.location} on ${item.air.measurements[0].lastUpdated}.`;
    }
    marker.bindPopup(txt);
  }

  // Add a line path

  const polyLine = new L.Polyline(pointList, {
    color: 'purple',
    weight: 3,
    opacity: 1,
    smoothFactor: 1
  });
  polyLine.addTo(mymap);
}
