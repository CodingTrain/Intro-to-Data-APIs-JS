const mappa = new Mappa('Leaflet');
let mymap;
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

let canvas;
let issImg;
let firstTime = true;

let pos;
let history = [];

function preload() {
  issImg = loadImage('iss200.png');
}

function setup() {
  canvas = createCanvas(800, 600);
  getData();
  setInterval(getData, 1000);
}

function getData() {
  loadJSON(api_url, gotData);
}

function gotData(data) {
  if (firstTime) {
    const options = {
      lat: data.latitude,
      lng: data.longitude,
      zoom: 7,
      style: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png'
    };
    mymap = mappa.tileMap(options);
    mymap.overlay(canvas);
    mymap.onChange(render);
    firstTime = false;
  }
  history.push(data);
  render();
}

function render() {
  clear();

  // Draw a path
  strokeWeight(mymap.zoom());
  stroke(100);
  noFill();
  beginShape();
  for (let data of history) {
    const pix = mymap.latLngToPixel(data.latitude, data.longitude);
    vertex(pix.x, pix.y);
  }
  endShape();

  // Get the last spot is current
  const current = history[history.length - 1];
  const pix = mymap.latLngToPixel(current.latitude, current.longitude);

  // Get the second to last spot and extrapolate a velocity vector?
  if (history.length > 1) {
    const previous = history[history.length - 2];
    const prevPix = mymap.latLngToPixel(previous.latitude, previous.longitude);
    offset = createVector(pix.x - prevPix.x, pix.y - prevPix.y);
    offset.setMag(50);

    // Renders a vector object 'v' as an arrow and a position 'loc'
    push();
    let arrowsize = 20;
    // Translate to position to render vector
    translate(pix.x, pix.y);
    // Call vector heading function to get direction (note that pointing up is a heading of 0) and rotate
    rotate(offset.heading());
    // Calculate length of vector & scale it to be bigger or smaller if necessary
    let len = offset.mag();
    // Draw three lines to make an arrow (draw pointing up since we've rotate to the proper direction)
    line(0, 0, len, 0);
    line(len, 0, len - arrowsize, arrowsize / 2);
    line(len, 0, len - arrowsize, -arrowsize / 2);
    pop();
  }

  imageMode(CENTER);
  image(issImg, pix.x, pix.y, 50, 32);
}
