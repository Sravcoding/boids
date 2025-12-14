class Controls {
  constructor() {
    this.vectorsEnabled = false;
    this.simulationSpeed = 0.8;

    this.fps = 0;
    this.frameCount = 0;
    this.lastTime = performance.now();

    this.gui = new lil.GUI({ title: "Controls" });
    this.createUI();

    this.startFPSCounter();
  }

  createUI() {
    this.gui.add(this, "vectorsEnabled").name("Show Vectors");

    this.gui.add(this, "simulationSpeed", 0.1, 3, 0.1).name("Speed");

    this.gui.add(this, "fps").name("FPS").listen();
  }

  startFPSCounter() {
    setInterval(() => {
      const now = performance.now();
      const delta = now - this.lastTime;

      this.fps = Math.round((this.frameCount * 1000) / delta);
      this.frameCount = 0;
      this.lastTime = now;
    }, 1000);
  }

  updateFrame() {
    this.frameCount++;
  }

  shouldDrawVectors() {
    return this.vectorsEnabled;
  }

  getSpeed() {
    return this.simulationSpeed;
  }
}
