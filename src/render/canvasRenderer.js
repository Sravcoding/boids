class CanvasRenderer {
  constructor(canvas, flock) {
    this.canvas = canvas;
    this.ctx = canvas.getContext("2d");
    this.flock = flock;
  }

  drawBoid(boid, showVectors = true) {
    const ctx = this.ctx;

    if (CONFIG.trailEnabled && boid.trail.length > 1) {
      ctx.strokeStyle = boid.color;
      ctx.lineWidth = 2;
      ctx.lineCap = "round";
      ctx.lineJoin = "round";

      for (let i = 1; i < boid.trail.length; i++) {
        const init = boid.trail[i - 1];
        const final = boid.trail[i];
        const pixelbuffer = 5;
        const dist = ((final.x - init.x) ** 2 + (final.y - init.y) ** 2) ** 0.5;

        ctx.globalAlpha = i ** 2 / boid.trail.length ** 2;
        ctx.beginPath();
        ctx.moveTo(init.x, init.y);
        ctx.lineTo(
          init.x + (pixelbuffer / dist) * (final.x - init.x),
          init.y + (pixelbuffer / dist) * (final.y - init.y)
        );
        ctx.stroke();
      }
      ctx.globalAlpha = 1.0;
    }

    if (showVectors) {
      VectorRenderer.drawVelocityVector(ctx, boid);
    }

    ctx.fillStyle = boid.color;
    ctx.beginPath();
    ctx.arc(boid.position.x, boid.position.y, 5, 0, Math.PI * 2);
    ctx.fill();
  }

  render(controls) {
    window.addEventListener("resize", () => {
      this.canvas.width = sim.width = window.innerWidth;
      this.canvas.height = sim.height = window.innerHeight;
    });

    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    const showVectors = controls ? controls.shouldDrawVectors() : true;
    for (let b of this.flock.boids) this.drawBoid(b, showVectors);
  }
}
