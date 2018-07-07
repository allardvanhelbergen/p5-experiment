export default function(p5) {
  p5.setup = () => {
    p5.createCanvas(640, 400);
  };

  p5.draw = () => {
    if (p5.mouseIsPressed) {
      p5.fill(0);
    } else {
      p5.fill(255);
    }
    p5.ellipse(p5.mouseX, p5.mouseY, 80, 80);
  };
}
