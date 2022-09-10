class KeyControls {
  constructor(paddleRef) {
    this.paddle = paddleRef;
    // console.log(this.paddle);

    document.addEventListener("keydown", (ev) => this.keyDownHandler(ev));
    document.addEventListener("keyup", this.keyUpHandler.bind(this));
  }

  keyDownHandler(event) {
    if (event.key === "Right" || event.key === "ArrowRight") {
      this.paddle.setMovingRight(true)
    } else if (event.key === "Left" || event.key === "ArrowLeft") {
      this.paddle.setMovingLeft(true)
    }
  }

  keyUpHandler(event) {
    if (event.key === "Right" || event.key === "ArrowRight") {
      this.paddle.setMovingRight(false)
    } else if (event.key === "Left" || event.key === "ArrowLeft") {
      this.paddle.setMovingLeft(false)
    }
  }
}

export { KeyControls }