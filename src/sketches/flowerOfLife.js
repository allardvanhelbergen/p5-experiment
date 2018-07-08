// https://www.pinterest.com.au/pin/840273242949359002/
// https://codegolf.stackexchange.com/questions/99704/golfing-flower-of-life
// https://www.openprocessing.org/sketch/128439
// https://en.wikipedia.org/wiki/Overlapping_circles_grid
// Total nr of circles
// n^3-(n-1)3 = 3n2-3n+1 = 3n(n-1)+1

const SIN_60 = 0.86602540378; // sin(60)
const COS_60 = 0.5; // cos(60)


export default function(p5) {
  const levelFunctions = [
    downRight,
    down,
    downLeft,
    upLeft,
    up,
    upRight
  ];
  const DIAMETER = 100;
  const RADIUS = DIAMETER / 2;
  const DELTA_X = SIN_60 * RADIUS;
  const DELTA_Y = COS_60 * RADIUS;
  const LEVELS = 4;

  let pointer = { x: 0, y: 0 };

  function upOnce() {
    pointer.y -= RADIUS;
  }

  function downRight() {
    pointer.x += DELTA_X;
    pointer.y += DELTA_Y;
  }

  function down() {
    pointer.y += 2 * DELTA_Y;
  }

  function downLeft() {
    pointer.x -= DELTA_X;
    pointer.y += DELTA_Y;
  }

  function upLeft() {
    pointer.x -= DELTA_X;
    pointer.y -= DELTA_Y;
  }

  function up() {
    pointer.y -= 2 * DELTA_Y;
  }

  function upRight() {
    pointer.x += DELTA_X;
    pointer.y -= DELTA_Y;
  }

  function drawLevel(level) {
    if (level === 0) {
      // ring level 0
      p5.strokeWeight(5);
      p5.stroke(153, 101, 21); // gold
      p5.ellipse(pointer.x, pointer.y, DIAMETER);
    } else {
      // All LEVELS
      let strokeWeight = (level % 3) + 1;
      p5.strokeWeight((strokeWeight));
      p5.stroke(124, 10 * level, 2 * level);
      // go to new level coord (go up out of cirlce)
      upOnce();
      p5.ellipse(pointer.x, pointer.y, DIAMETER);

      // for each function do this
      levelFunctions.forEach(f => {
        for (let i = 0; i < level; i += 1) {
          f.call();
          p5.ellipse(pointer.x, pointer.y, DIAMETER);
        }
      });
    }
  }

  p5.setup = () => {
    p5.createCanvas(1280, 800);
    p5.background(240, 240, 240);
    p5.noFill();
    p5.noLoop();
  };

  p5.draw = () => {
    // Move origin to be center canvas.
    p5.translate(p5.width / 2, p5.height / 2);


    // outer circle
    p5.strokeWeight(5);
    p5.stroke(153, 101, 21); // gold
    p5.ellipse(0, 0, (LEVELS - 1) * DIAMETER);
    p5.ellipse(0, 0, (((LEVELS - 1) * DIAMETER) + 20));

    for (let level = 0; level <= LEVELS; level += 1) {
      drawLevel(level);
    }
  };
}
