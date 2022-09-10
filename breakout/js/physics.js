function detectWallCollision(canvas, object) {
  if ((object.y + object.dy < object.size) || (object.y + object.dy > canvas.height - object.size))
    object.dy = -object.dy;
  else if ((object.x + object.dx < object.size) || (object.x + object.dx > canvas.width - object.size))
    object.dx = -object.dx;
}

function detectBallPaddleCollision(ball, paddle) {
  if ((ball.y + ball.dy + ball.size > paddle.y)
    && (ball.x + ball.size < paddle.x + paddle.width)
    && (ball.x - ball.size > paddle.x))
    ball.dy = -ball.dy;
}

export { detectWallCollision, detectBallPaddleCollision }