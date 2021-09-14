const HEIGHT = 1000;
const WIDTH = 1000;

function setup() {
  createCanvas(HEIGHT, WIDTH);
}

function draw() {
	background(21, 27, 31);
	stroke(0, 220, 0);
	circle(HEIGHT / 2, WIDTH / 2, HEIGHT / 4);
	fill(0, 255, 0);
}
