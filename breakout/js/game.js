import Ball from "./ball.js";
import BrickWall from "./brick.js";
import { clearCanvas } from "./draw.js";
import { KeyControls } from "./io.js";
import Paddle from "./paddle.js";
import { detectBallBricksCollision, detectBallPaddleCollision, detectWallCollision } from "./physics.js";


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const bricks = new BrickWall(canvas);
const ball = new Ball(canvas.width / 2, canvas.height - 30);
const paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 20)
const controls = new KeyControls(paddle);


function checkGameOver() {
  if (ball.y + ball.dy > canvas.height - ball.size) {
    ball.dx = 0;
    ball.dy = 0;
    paddle.dx = 0;

    alert("Game Over!");
    document.location.reload();
    clearInterval(interval)
  }
}


function gameLoop() {
  clearCanvas(canvas, ctx);

  detectWallCollision(canvas, ball, paddle);
  detectBallPaddleCollision(ball, paddle);
  detectBallBricksCollision(ball, bricks.getBricks());

  ball.move();
  paddle.move();

  paddle.draw(ctx);
  ball.draw(ctx);
  bricks.draw(ctx);

  checkGameOver();
}

const interval = setInterval(gameLoop, 10);
