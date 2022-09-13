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

function detectBallBricksCollision(ball, bricks, score) {
  for (let r = 0; r < bricks.length; r++) {
    for (let c = 0; c < bricks[r].length; c++) {
      const { x, y, width, height, status } = bricks[r][c];
      if (status && ball.x > x && ball.x < x + width && ball.y > y && ball.y < y + height) {
        ball.dy = -ball.dy;
        bricks[r][c].status = 0;
        score[0]++;
      }
    }
  }
}

export { detectWallCollision, detectBallPaddleCollision, detectBallBricksCollision }