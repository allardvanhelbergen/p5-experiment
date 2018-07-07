export default function(p5) {
  function drawSquare(x, y, size, angle) {
    // When too small to see, stop.
    if (size < 4) {
      return;
    }

    // stroke(1);
    // noFill();

    p5.rotate(angle);
    p5.rect(x, y, size, size);

    const newSize = size * 0.8;
    drawSquare(x, y, newSize, angle);
  }

  p5.setup = () => {
    p5.createCanvas(1280, 800);
  };

  p5.draw = () => {
    p5.background(255);
    p5.stroke(1);
    p5.noFill();

    p5.translate(p5.width / 2, p5.height / 2);

    p5.rect(0, 0, 200, 200);
    drawSquare(0, 0, 160, 0.6);
  };
}
