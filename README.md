# Boids

<a href="https://winter-of-open-source.vercel.app/"><img src="media/banner.png" alt="Winter of Open Source"></a>

[![made-with-javascript](https://img.shields.io/badge/Made%20with-JavaScript-pink.svg)](https://www.javascript.com/) [![Winter of Open Source](https://img.shields.io/badge/Winter%20of%20Open%20Source-2025-blue)](https://winter-of-open-source.vercel.app/)

**Boids** is an interactive browser-based flocking simulation that demonstrates emergent behavior from simple rules. Watch as individual agents (boids) interact with their neighbors using separation, alignment, and cohesion rules to create realistic, organic group movement patterns.

[**Check it out!**](https://datavorous.github.io/boids/)

This project is part of **[Winter of Open Source](https://winter-of-open-source.vercel.app/)**, where contributors can improve simulations, add new features, optimize performance, and enhance the overall project.

## Demo

<img src="media/demo3.png">

## How It Works

The simulation is based on three core flocking behaviors:

1. **Separation**: Boids steer to avoid crowding local flockmates
2. **Alignment**: Boids steer towards the average heading of local flockmates
3. **Cohesion**: Boids steer to move towards the average location of local flockmates

Each behavior contributes a steering force weighted by configurable parameters, allowing you to fine-tune the simulation dynamics.

## Table of Contents

1. [Quick Start](#quick-start)
2. [Configuration](#configuration)
3. [How to Contribute](#how-to-contribute)
4. [Code of Conduct](#code-of-conduct)
5. [References](#references)

## Quick Start

1. Clone the repository:

```bash
git clone https://github.com/datavorous/boids.git
cd boids
```

2. Open `index.html` in your web browser (or use a local server):

```bash
# option 1: python 3
python3 -m http.server 8000

# option 2: node.js
npx http-server

# option 3: JUST OPEN THE index.html IN YOUR BROWSER!
```

3. Navigate to `http://localhost:8000` in your browser

## Configuration

Edit `src/config.js` to customize the simulation:

```javascript
const CONFIG = {
  boidCount: 130,
  maxSpeed: 3,
  maxForce: 0.07,
  visualRange: 60,

  cohesionWeight: 1.0,
  alignmentWeight: 1.0,
  separationWeight: 1.9,

  trailLength: 20,
  trailEnabled: true,
};
```

## How to Contribute

Please follow [CONTRIBUTING.md](CONTRIBUTING.md) for step-by-step guidance on:

1. Setting up your development environment
2. Understanding the codebase structure
3. Making improvements and submitting PRs
4. Code style and best practices
5. Testing your changes

### Getting Help

1. **Discord**: [Server link]()
2. **GitHub Discussions**: Ask questions and discuss ideas
3. **Comment on issues**: Reach out to maintainers directly

### Important Rules

1. Work on **one issue at a time**
2. Complete assigned issues within a reasonable timeframe (can be extended based on difficulty)
3. Respect the [Code of Conduct](CODE_OF_CONDUCT.md)
4. Always link your PR to an issue
5. Avoid plagiarism or AI-generated content without proper attribution

## Code of Conduct

Please follow [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to ensure a welcoming and productive environment for all contributors.

## References

1. [Boids Algorithm (Wikipedia)](https://en.wikipedia.org/wiki/Boids)
2. [Steering Behaviors for Autonomous Characters](https://www.red3d.com/cwr/boids/)
3. [Craig Reynolds' Original Paper](https://www.red3d.com/cwr/papers/1987/boids.html)
