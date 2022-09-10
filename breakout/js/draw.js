function drawRect(ctx, x=0, y=0, width=10, height=10, color="#000") {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  // ctx.strokeStyle = color;
  // ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawBall(ctx, centerX=0, centerY=0, radius=10, color="#000") {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

export { drawRect, drawBall }
