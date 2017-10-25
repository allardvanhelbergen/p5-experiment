// Stylesheets
require('../scss/index.scss');


function drawCircle(x, y, radius) {
  if (radius < 2) {
    return;
  }

  stroke(((x + y) / 2), Math.abs(x - y), ((x + y) / 3), 75);
  noFill();
  ellipse(x, y, radius, radius);

  drawCircle(x + (radius / 2), y, radius / 2);
  drawCircle(x, y + (radius / 2), radius / 2);
  drawCircle(x - (radius / 2), y, radius / 2);
  drawCircle(x, y - (radius / 2), radius / 2);
}


window.setup = () => {
  createCanvas(640, 400);
};


window.draw = () => {
  background(255);
  drawCircle(width / 2, height / 2, 600);
};

