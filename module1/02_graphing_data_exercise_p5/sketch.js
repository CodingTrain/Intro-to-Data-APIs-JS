// Data from: https://data.giss.nasa.gov/gistemp/
// Mean from: https://earthobservatory.nasa.gov/world-of-change/DecadalTemp

let table;
function preload() {
  table = loadTable('ZonAnn.Ts+dSST.csv', 'header');
}

function setup() {
  createCanvas(600, 400);
  background(0);
  stroke(255);
  noFill();
  beginShape();
  for (var i = 0; i < table.getRowCount(); i++) {
    let row = table.getRow(i);
    let temp = 14 + row.getNum('Glob');
    let x = map(i, 0, table.getRowCount() - 1, 0, width);
    let y = map(temp, 13.5, 15, height, 0);
    vertex(x, y);
  }
  endShape();
}
