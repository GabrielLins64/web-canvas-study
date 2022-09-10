import { drawRect } from "./draw.js";

export default class Paddle {
  constructor(x=0, y=0, width=75, height=10, color="#333333") {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.color = color;
    this.dx = 2;
  }

  draw(ctx) {
    drawRect(ctx, this.x, this.y, this.width, this.height, this.color);
  }
}
