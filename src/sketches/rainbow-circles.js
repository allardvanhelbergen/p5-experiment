export default function(p5) {
  function drawCircle(x, y, radius) {
    if (radius < 2) {
      return;
    }

    p5.stroke((x + y) / 2, Math.abs(x - y), (x + y) / 3, 75);
    p5.noFill();
    p5.ellipse(x, y, radius, radius);

    drawCircle(x + radius / 2, y, radius / 2);
    drawCircle(x, y + radius / 2, radius / 2);
    drawCircle(x - radius / 2, y, radius / 2);
    drawCircle(x, y - radius / 2, radius / 2);
  }

  p5.setup = () => {
    p5.createCanvas(640, 400);
  };

  p5.draw = () => {
    p5.background(255);
    drawCircle(p5.width / 2, p5.height / 2, 600);
  };
}
