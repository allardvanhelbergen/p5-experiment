// https://www.pinterest.com.au/pin/840273242949359002/
// https://codegolf.stackexchange.com/questions/99704/golfing-flower-of-life
// https://www.openprocessing.org/sketch/128439
// https://en.wikipedia.org/wiki/Overlapping_circles_grid
// Total nr of circles
// n^3-(n-1)3 = 3n2-3n+1 = 3n(n-1)+1

// class Circle {

// }


// function next() {

// }


export default function(p5) {
  let diameter = 100;
  let radius = diameter / 2;
  let level = 1;

  p5.setup = () => {
    p5.createCanvas(1280, 800);
    p5.background(240, 240, 240);
    p5.stroke(153, 101, 21); // gold
    p5.noFill();
    p5.noLoop();
  };

  p5.draw = () => {
    const cos60 = 0.5;
    const sin60 = 0.86602540378;
    let coordinates =[]

    // Move origin to be center canvas.
    p5.translate(p5.width / 2, p5.height / 2);

    // ring level 0
    p5.strokeWeight(5);
    coordinates =[{ x: 0, y: 0 }]
    coordinates.forEach(point => {
      p5.ellipse(point.x * radius , point.y * radius, diameter);
    });

    // ring level 1
    /**
     * 0    x: 0, y: r
     * 60   x: sin(60) = 0.86602540378, y: cos(60) = 0.5
     * 120  x: sin(60), y: -0.5
     * 180  x: 0, y: -r
     * 240  x: -sin(60), y: -0.5
     * 300  x: -sin(60), y: -0.5
     */
    p5.strokeWeight(2);
    coordinates = [
      { x: 0, y: -1 },
      { x: sin60, y: -cos60 },
      { x: sin60, y: cos60 },
      { x: 0, y: 1 },
      { x: -sin60, y: cos60 },
      { x: -sin60, y: -cos60 },
    ]

    coordinates.forEach(point => {
      p5.ellipse(point.x * radius , point.y * radius, diameter);
    });

    // ring level 2
    p5.stroke(124, 10, 2);
    coordinates = [
      { x: 0, y: -2 },
      { x: sin60, y: -3 * cos60 },
      { x: 2 * sin60, y: -2 * cos60 },
      { x: 2 * sin60, y: 0 },
      { x: 2 * sin60, y: 2 * cos60 },
      { x: sin60, y: 3 * cos60 },
      { x: 0, y: 2 },
      { x: -sin60, y: 3 * cos60 },
      { x: -2 * sin60, y: 2 * cos60 },
      { x: -2 * sin60, y: 0 },
      { x: -2 * sin60, y: -2 * cos60 },
      { x: -sin60, y: -3 * cos60 },
    ]

    coordinates.forEach(point => {
      p5.ellipse(point.x * radius , point.y * radius, diameter);
    });


    // outer circle
    p5.strokeWeight(3);
    p5.ellipse(0, 0, 3 * diameter);
    p5.ellipse(0, 0, 3.2 * diameter);
  };
}
