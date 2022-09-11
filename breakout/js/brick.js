import { drawRect } from "./draw.js";

export default class BrickWall {
  constructor(canvas, bricksRowCount = 3, bricksColumnCount = 5) {
    this.bricksColumnCount = bricksColumnCount;
    this.bricksRowCount = bricksRowCount;
    this.brickPaddingX = 10;
    this.brickPaddingY = 10;
    this.brickHeight = 20;
    this.brickColor = "#228822";
    this.calculateBrickSize(canvas.width);
    this.createBricks();
  }

  calculateBrickSize(canvasWidth) {
    this.maxBrickSize = canvasWidth / this.bricksColumnCount;
    this.brickWidth = this.maxBrickSize - this.brickPaddingX * 2;
  }

  createBricks() {
    this.bricks = []
    for (let r = 0; r < this.bricksRowCount; r++) {
      this.bricks[r] = []
      for (let c = 0; c < this.bricksColumnCount; c++) {
        this.bricks[r][c] = {
          x: c * (this.maxBrickSize) + this.brickPaddingX,
          y: r * (this.brickHeight) + (r + 1) * this.brickPaddingY,
          width: this.brickWidth,
          height: this.brickHeight,
          status: 1,
        }
      }
    }
  }

  getBricks() {
    return this.bricks;
  }

  draw(ctx) {
    for (let r = 0; r < this.bricksRowCount; r++) {
      for (let c = 0; c < this.bricksColumnCount; c++) {
        if (this.bricks[r][c].status)
          drawRect(
            ctx,
            this.bricks[r][c].x,
            this.bricks[r][c].y,
            this.brickWidth,
            this.brickHeight,
            this.brickColor
          );
      }
    }
  }
}