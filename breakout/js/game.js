import Ball from "./ball.js";
import { KeyControls } from "./io.js";
import Paddle from "./paddle.js";
import { detectBallPaddleCollision, detectWallCollision } from "./physics.js";


const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const clearCanvas = () => ctx.clearRect(0, 0, canvas.width, canvas.height);

const paddle = new Paddle((canvas.width - 75) / 2, canvas.height - 20)
const ball = new Ball(canvas.width / 2, canvas.height - 30);
const controls = new KeyControls(paddle);

function gameLoop() {
  clearCanvas();

  detectWallCollision(canvas, ball, paddle);
  detectBallPaddleCollision(ball, paddle);

  ball.move();
  paddle.move();

  paddle.draw(ctx);
  ball.draw(ctx);
}

setInterval(gameLoop, 10);
