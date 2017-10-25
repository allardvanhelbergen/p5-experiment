// Stylesheets
require('../scss/index.scss');

// This is a rendering of this spiral piece
// https://www.pinterest.com/pin/355854808040685060/
let size = 200;
let angle = 0;


window.setup = () => {
  createCanvas(1280, 800);
  background(240, 240, 240);
};


window.draw = () => {
  // When too small to see, stop.
  if (size < 4) {
    return;
  }

  stroke(153, 101, 21); // gold
  noFill();

  translate(width / 2, height / 2);
  rotate(angle);
  rect(-(size / 2), 0, size, size);

  size *= 0.888;
  angle += 0.4675;
};
