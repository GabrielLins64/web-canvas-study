function detectWallCollision(canvas, ball, paddle) {
  if ((ball.y + ball.dy < ball.size))
    ball.dy = -ball.dy;
  else if ((ball.x + ball.dx < ball.size) || (ball.x + ball.dx > canvas.width - ball.size))
    ball.dx = -ball.dx;

  if (paddle.x + paddle.width > canvas.width) paddle.x -= paddle.dx
  else if (paddle.x < 0) paddle.x += paddle.dx
}

function detectBallPaddleCollision(ball, paddle) {
  if ((ball.y + ball.dy + ball.size == paddle.y)
    && (ball.x - ball.size / 2 < paddle.x + paddle.width)
    && (ball.x + ball.size / 2 > paddle.x))
    ball.dy = -Math.abs(ball.dy);
}

export { detectWallCollision, detectBallPaddleCollision }