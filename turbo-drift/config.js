// Turbo Drift — car and track data

window.GameConfig = {
  cars: [
    {
      id: "speedster",
      name: "Speedster",
      color: "#ff4444",
      maxSpeed: 300, // px/s
      accel: 400,    // px/s²
      handling: 0.8, // turn factor (0‑1)
      brake: 500,
      nitroBoost: 1.5,
      sprite: null // placeholder, draw simple rectangle
    },
    {
      id: "turbosaurus",
      name: "Turbo Saurus",
      color: "#44ff44",
      maxSpeed: 260,
      accel: 350,
      handling: 0.9,
      brake: 450,
      nitroBoost: 1.7,
      sprite: null
    },
    {
      id: "vortex",
      name: "Vortex",
      color: "#4444ff",
      maxSpeed: 280,
      accel: 380,
      handling: 0.85,
      brake: 470,
      nitroBoost: 1.6,
      sprite: null
    }
  ],
  tracks: [
    {
      id: "city",
      name: "Neon City",
      // waypoints are simple {x, y} points that AI follows
      waypoints: [
        { x: 180, y: 180 },
        { x: 1100, y: 180 },
        { x: 1280, y: 320 },
        { x: 1280, y: 620 },
        { x: 1100, y: 760 },
        { x: 180, y: 760 },
        { x: 60, y: 620 },
        { x: 60, y: 320 },
        { x: 180, y: 180 }
      ],
      background: "#183b2b",
      length: 3 // laps
    },
    {
      id: "desert",
      name: "Sandy Dunes",
      waypoints: [
        { x: 180, y: 180 },
        { x: 1060, y: 180 },
        { x: 1280, y: 300 },
        { x: 1180, y: 420 },
        { x: 1280, y: 580 },
        { x: 1080, y: 760 },
        { x: 250, y: 760 },
        { x: 60, y: 610 },
        { x: 180, y: 480 },
        { x: 60, y: 320 },
        { x: 180, y: 180 }
      ],
      background: "#8d6b3d",
      length: 4
    }
  ]
};
