import Ball from "./ball.js";
import { clearCanvas } from "./draw.js";
import { KeyControls } from "./io.js";
import Paddle from "./paddle.js";
import { detectBallPaddleCollision, detectWallCollision } from "./physics.js";


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 20)
const ball = new Ball(canvas.width / 2, canvas.height - 30);
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

  ball.move();
  paddle.move();

  paddle.draw(ctx);
  ball.draw(ctx);

  checkGameOver();
}

const interval = setInterval(gameLoop, 10);
