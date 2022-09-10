import { drawRect } from "./draw.js";

export default class Paddle {
  constructor(x=0, y=0, width=75, height=10, color="#005599") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = 4;

    this.movingRight = false;
    this.movingLeft = false;
  }

  setMovingRight(val) {
    this.movingRight = val;
  }

  setMovingLeft(val) {
    this.movingLeft = val;
  }

  move() {
    if (this.movingRight) this.x += this.dx;
    else if (this.movingLeft) this.x -= this.dx;
  }

  draw(ctx) {
    drawRect(ctx, this.x, this.y, this.width, this.height, this.color);
  }
}
