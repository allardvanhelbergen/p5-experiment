// Stylesheets
require('../scss/index.scss');


function drawSquare(x, y, size, angle) {
  // When too small to see, stop.
  if (size < 4) {
    return;
  }

  // stroke(1);
  // noFill();

  rotate(angle);
  rect(x, y, size, size);

  const newSize = size * 0.8;
  drawSquare(x, y, newSize, angle);
}


window.setup = () => {
  createCanvas(1280, 800);
};


window.draw = () => {
  background(255);
  stroke(1);
  noFill();

  translate(width / 2, height / 2);

  rect(0, 0, 200, 200);
  drawSquare(0, 0, 160, 0.6);
};

