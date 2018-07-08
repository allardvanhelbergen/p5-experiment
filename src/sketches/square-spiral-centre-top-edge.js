export default function(p5) {
  // This is a rendering of this spiral piece
  // https://www.pinterest.com/pin/355854808040685060/
  let size = 200;
  let angle = 0;

  p5.setup = () => {
    p5.createCanvas(1280, 800);
    p5.background(240, 240, 240);
  };

  p5.draw = () => {
    // When too small to see, stop.
    if (size < 4) {
      return;
    }

    p5.stroke(153, 101, 21); // gold
    p5.noFill();

    p5.translate(p5.width / 2, p5.height / 2);
    p5.rotate(angle);
    p5.rect(-(size / 2), 0, size, size);

    size *= 0.888;
    angle += 0.4675;
  };
}
