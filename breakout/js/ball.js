import { drawBall } from "./draw.js";

export default class Ball {
  constructor(x=0, y=0, size=10, color="#0095DD") {
    this.x = x;
    this.y = y;
    this.size = size;
    this.color = color;
    this.dx = 2;
    this.dy = -2;
  }

  move() {
    this.x += this.dx;
    this.y += this.dy;
  }

  draw(ctx) {
    drawBall(ctx, this.x, this.y, this.size, this.color);
  }
}
