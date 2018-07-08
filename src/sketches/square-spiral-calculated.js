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

    // Move origin to be center canvas.
    p5.translate(p5.width / 2, p5.height / 2);
    // Rotate origin for the current square.
    p5.rotate(angle);
    // Draw square with the middle of top edge on origin
    p5.rect(-(size / 2), 0, size, size);

    // Quik maffs: Pythagoras' theorem, ya kno bout dat?
    // c = size
    // c^2 = a^2 + b^2
    // c^2 = a^2 + (2a)^2
    // c^2 = a^2 + 4a^2
    // c^2 = 5a^2
    // a^2 = c^2/5
    // a = sqr(c^2/5)
    // b = 2sqr(c^2/5)

    size *= 0.8944271191;

    // Quik maffs: calculate da angle
    // tan(A) = a / b
    // A = tan^-1( a / b)

    angle += 0.4636;

  }
};
