function drawRect(ctx, x=0, y=0, width=10, height=10, color="#000") {
  ctx.beginPath();
  ctx.rect(x, y, width, height);
  // ctx.strokeStyle = color;
  // ctx.stroke();
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

function drawScore(ctx, score) {
  ctx.font = "16px Arial";
  ctx.fillStyle = "#eeff00";
  ctx.fillText(`Score: ${score.at(0)}`, 8, 20);
}

function drawBall(ctx, centerX=0, centerY=0, radius=10, color="#000") {
  ctx.beginPath();
  ctx.arc(centerX, centerY, radius, 0, Math.PI * 2, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.closePath();
}

const clearCanvas = (canvas, ctx) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
}

export { drawRect, drawBall, clearCanvas, drawScore }
