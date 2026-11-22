/* Turbo Drift — race flow, controls, physics, and drawing */

(() => {
  "use strict";

  const canvas = document.getElementById("gameCanvas");
  const ctx = canvas.getContext("2d");
  const menu = document.getElementById("menu");
  const howTo = document.getElementById("howToPlay");
  const hud = document.getElementById("hud");
  const results = document.getElementById("resultScreen");
  const driveControls = document.getElementById("driveControls");
  const config = window.GameConfig;
  let selectedCar = config.cars[0];

  const WORLD = { width: 1400, height: 900 };
  const ROAD_WIDTH = 170;
  const CAR_LENGTH = 46;
  const CAR_WIDTH = 26;
  const GEAR_SPEEDS = [78, 124, 174, 232, 310];
  const keys = new Set();
  const particles = [];
  const state = { screen: "menu", mode: "race", trackIndex: 0, championshipRound: 0, difficulty: 1, time: 0, animTime: 0, countdown: 0, lastTime: 0, shake: 0, noticeTime: 0 };
  const touch = { active: false, startX: 0, steering: 0, left: false, right: false, forward: false, backward: false, boost: false };
  let scale = 1;
  let player;
  let opponents = [];
  let scenery = [];

  const track = () => config.tracks[state.trackIndex % config.tracks.length];
  const points = () => track().waypoints;
  const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
  const distance = (a, b) => Math.hypot(b.x - a.x, b.y - a.y);

  function resize() {
    const ratio = Math.max(1, window.devicePixelRatio || 1);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    canvas.style.width = `${window.innerWidth}px`;
    canvas.style.height = `${window.innerHeight}px`;
    scale = Math.min(canvas.width / WORLD.width, canvas.height / WORLD.height);
    createScenery();
  }

  function makeCar(x, y, carConfig, isPlayer = false) {
    return { x, y, angle: 0, speed: 0, color: carConfig.color, config: carConfig, isPlayer, lap: 0, waypoint: 1, gear: 1, auto: true, boost: 100, boosting: false, finished: false, smokeTick: 0, wheelSpin: 0 };
  }

  function createScenery() {
    scenery = [];
    let seed = state.trackIndex + 13;
    const random = () => {
      seed = (seed * 9301 + 49297) % 233280;
      return seed / 233280;
    };
    for (let i = 0; i < 52; i++) scenery.push({ x: 35 + random() * (WORLD.width - 70), y: 95 + random() * (WORLD.height - 160), size: 10 + random() * 13, phase: random() * Math.PI * 2 });
  }

  function resetCars() {
    const start = points()[0];
    player = makeCar(start.x + 54, start.y + 2, selectedCar, true);
    const count = state.mode === "time" ? 0 : 4;
    opponents = Array.from({ length: count }, (_, index) => {
      const opponentConfig = config.cars[(index + 1) % config.cars.length];
      const car = makeCar(start.x - 15 - (index % 2) * 34, start.y - 30 - Math.floor(index / 2) * 35, opponentConfig);
      car.speed = 105 + index * 5;
      return car;
    });
    state.time = 0;
    particles.length = 0;
    keys.clear();
    touch.active = false;
    touch.left = touch.right = touch.forward = touch.backward = touch.boost = false;
    driveControls.classList.remove("hidden");
    document.getElementById("gearInfo").textContent = "1";
    document.getElementById("gearDownBtn").disabled = true;
    document.getElementById("gearUpBtn").disabled = true;
    document.getElementById("transmissionBtn").textContent = "AUTO ✓";
    document.getElementById("transmissionBtn").setAttribute("aria-label", "Switch to manual transmission");
    document.getElementById("speedInfo").textContent = "0 km/h";
    document.getElementById("rpmFill").style.width = "0%";
    document.getElementById("boostFill").style.width = "100%";
    document.getElementById("gearNotice").classList.add("hidden");
    state.noticeTime = 0;
    state.shake = 0;
    document.getElementById("lapInfo").textContent = `Lap: 1 / ${track().length}`;
    document.getElementById("positionInfo").textContent = `Pos: 1 / ${count + 1}`;
    document.getElementById("timer").textContent = "0:00.00";
    document.getElementById("bestInfo").textContent = `BEST ${formatTime(readBestTime())}`;
    document.getElementById("carInfo").textContent = selectedCar.name;
  }

  function startRace(mode = "race") {
    state.mode = mode;
    if (mode !== "championship" || state.championshipRound === 0) {
      state.trackIndex = Number(document.getElementById("trackSelect").value);
    }
    selectedCar = config.cars[Number(document.getElementById("carSelect").value)];
    state.difficulty = Number(document.getElementById("difficultySelect").value);
    createScenery();
    state.screen = "countdown";
    state.countdown = 3;
    state.lastTime = 0;
    menu.classList.add("hidden");
    howTo.classList.add("hidden");
    results.classList.add("hidden");
    hud.classList.remove("hidden");
    document.getElementById("pauseBtn").textContent = "PAUSE";
    resetCars();
  }

  function finishRace() {
    if (state.screen !== "racing") return;
    state.screen = "results";
    hud.classList.add("hidden");
    driveControls.classList.add("hidden");
    results.classList.remove("hidden");
    const position = getPosition();
    document.getElementById("results").textContent = `${position === 1 ? "You finished first!" : `You finished ${position}${position === 2 ? "nd" : position === 3 ? "rd" : "th"}.`}\nTime: ${formatTime(state.time)}${state.mode === "time" ? "\nTime Trial" : ""}${state.mode === "championship" ? `\nChampionship race ${state.championshipRound + 1} of ${config.tracks.length}` : ""}`;
    const previousBest = readBestTime();
    const newRecord = previousBest === 0 || state.time < previousBest;
    if (newRecord) saveBestTime(state.time);
    document.getElementById("results").textContent += `\nBest: ${formatTime(newRecord ? state.time : previousBest)}${newRecord ? " — NEW RECORD!" : ""}`;
    document.querySelector(".restartBtn").textContent = state.mode === "championship" && state.championshipRound < config.tracks.length - 1 ? "Next Race" : "Race Again";
  }

  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const wholeSeconds = Math.floor(seconds % 60).toString().padStart(2, "0");
    const hundredths = Math.floor((seconds % 1) * 100).toString().padStart(2, "0");
    return `${minutes}:${wholeSeconds}.${hundredths}`;
  }

  function bestTimeKey() {
    return `turbo-drift-best-${state.mode}-${track().id}-${selectedCar.id}`;
  }

  function readBestTime() {
    try {
      const saved = Number(localStorage.getItem(bestTimeKey()));
      return Number.isFinite(saved) && saved > 0 ? saved : 0;
    } catch {
      return 0;
    }
  }

  function saveBestTime(seconds) {
    try {
      localStorage.setItem(bestTimeKey(), String(seconds));
    } catch {
      // Browser storage is optional; racing still works when it is unavailable.
    }
  }

  function getPosition() {
    if (!player) return 1;
    const segments = points().length - 1;
    const playerProgress = player.lap * segments + nearestRouteProgress(player.x, player.y);
    return 1 + opponents.filter(car => car.lap * segments + Math.max(0, car.waypoint - 1) > playerProgress).length;
  }

  function nearestRouteProgress(x, y) {
    const route = points();
    let nearest = Infinity;
    let progress = 0;
    for (let i = 0; i < route.length - 1; i++) {
      const a = route[i];
      const b = route[i + 1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const t = clamp(((x - a.x) * dx + (y - a.y) * dy) / (dx * dx + dy * dy), 0, 1);
      const d = Math.hypot(x - (a.x + t * dx), y - (a.y + t * dy));
      if (d < nearest) {
        nearest = d;
        progress = i + t;
      }
    }
    return progress;
  }

  function nearestTrackDistance(x, y) {
    let nearest = Infinity;
    const route = points();
    for (let i = 0; i < route.length - 1; i++) {
      const a = route[i];
      const b = route[i + 1];
      const dx = b.x - a.x;
      const dy = b.y - a.y;
      const t = clamp(((x - a.x) * dx + (y - a.y) * dy) / (dx * dx + dy * dy), 0, 1);
      nearest = Math.min(nearest, Math.hypot(x - (a.x + t * dx), y - (a.y + t * dy)));
    }
    return nearest;
  }

  function updatePlayer(dt) {
    const car = player;
    const carScale = car.config.maxSpeed / 300;
    if (car.auto && car.gear > 0) {
      if (car.gear < 5 && Math.abs(car.speed) > GEAR_SPEEDS[car.gear - 1] * carScale * 0.82) car.gear++;
      else if (car.gear > 1 && Math.abs(car.speed) < GEAR_SPEEDS[car.gear - 2] * carScale * 0.48) car.gear--;
    }
    const steering = (keys.has("ArrowLeft") || keys.has("a") || touch.left ? -1 : 0) + (keys.has("ArrowRight") || keys.has("d") || touch.right ? 1 : 0) + touch.steering;
    const forward = keys.has("ArrowUp") || keys.has("w") || touch.forward;
    const backward = keys.has("ArrowDown") || keys.has("s") || touch.backward;
    const requestedDirection = forward === backward ? 0 : forward ? 1 : -1;
    const boostRequested = keys.has(" ") || keys.has("Shift") || touch.boost;
    car.boosting = boostRequested && car.boost > 0 && car.gear > 0 && !backward;
    car.boost = clamp(car.boost + (car.boosting ? -36 : 14) * dt, 0, 100);
    const driveDirection = requestedDirection || (car.boosting ? 1 : 0);
    if (forward && backward) {
      car.speed = moveToward(car.speed, 0, car.config.brake * 1.15 * dt);
    } else if (driveDirection !== 0 && car.speed * driveDirection < -2) {
      car.speed = moveToward(car.speed, 0, car.config.brake * 1.15 * dt);
    } else if (driveDirection !== 0) {
      if (driveDirection < 0) car.gear = -1;
      else if (car.gear <= 0) car.gear = 1;
      const maxSpeed = (car.gear < 0 ? 82 : GEAR_SPEEDS[car.gear - 1]) * carScale + (car.boosting ? 115 : 0);
      car.speed += driveDirection * (car.boosting ? 360 : car.config.accel * 0.61 - Math.abs(car.speed) * 0.22) * dt;
      car.speed = driveDirection > 0 ? Math.min(car.speed, maxSpeed) : Math.max(car.speed, -maxSpeed);
    } else {
      car.speed = moveToward(car.speed, 0, (car.gear === 0 ? 24 : 38) * dt);
    }
    car.angle += steering * (Math.abs(car.speed) / (car.config.maxSpeed || 300) * 2.25 * car.config.handling) * dt * (car.speed < -2 ? -1 : 1);
    car.wheelSpin += Math.abs(car.speed) * dt;

    const oldX = car.x;
    const oldY = car.y;
    car.x += Math.cos(car.angle) * car.speed * dt;
    car.y += Math.sin(car.angle) * car.speed * dt;

    const offRoad = nearestTrackDistance(car.x, car.y) > ROAD_WIDTH * 0.43;
    if (offRoad) {
      car.speed *= 0.91;
      if (Math.abs(car.speed) > 72) car.speed = Math.sign(car.speed) * 72;
    }
    if (car.boosting && car.smokeTick <= 0) {
      emitSmoke(car, "#42dfff", 11);
      car.smokeTick = 0.035;
    } else if (Math.abs(car.speed) > 90 && Math.abs(steering) > 0 && !offRoad) {
      car.smokeTick -= dt;
      if (car.smokeTick <= 0) {
        emitSmoke(car);
        car.smokeTick = 0.055;
      }
    }
    const startX = points()[0].x;
    if (oldX < startX && car.x >= startX && car.y > points()[0].y - ROAD_WIDTH / 2 && car.y < points()[0].y + ROAD_WIDTH / 2) {
      car.lap++;
      if (car.lap >= track().length) finishRace();
    }
    if (car.x < 0 || car.x > WORLD.width || car.y < 0 || car.y > WORLD.height) {
      car.x = oldX;
      car.y = oldY;
      car.speed = 0;
    }
  }

  const moveToward = (value, target, amount) => value < target ? Math.min(value + amount, target) : Math.max(value - amount, target);

  function selectGear(nextGear) {
    if (!player) return;
    if (player.auto && nextGear > 0 && player.gear > 0) return;
    if (Math.abs(player.speed) > 24 && nextGear !== 0 && Math.sign(player.speed) !== Math.sign(nextGear)) {
      const notice = document.getElementById("gearNotice");
      notice.textContent = "Brake to a near stop before changing direction.";
      notice.classList.remove("hidden");
      state.noticeTime = 2.4;
      return;
    }
    player.gear = clamp(nextGear, -1, 5);
    document.getElementById("gearInfo").textContent = player.gear === -1 ? "R" : player.gear === 0 ? "N" : player.gear;
  }

  function toggleTransmission() {
    if (!player) return;
    player.auto = !player.auto;
    if (player.gear > 0) player.gear = 1;
    const button = document.getElementById("transmissionBtn");
    button.textContent = player.auto ? "AUTO ✓" : "MANUAL";
    button.setAttribute("aria-label", player.auto ? "Switch to manual transmission" : "Switch to automatic transmission");
    document.getElementById("gearInfo").textContent = player.gear === -1 ? "R" : player.gear === 0 ? "N" : player.gear;
  }

  function emitSmoke(car, color = "#d7d9dc", size = 7) {
    const backX = car.x - Math.cos(car.angle) * 17;
    const backY = car.y - Math.sin(car.angle) * 17;
    particles.push({ x: backX, y: backY, vx: (Math.random() - 0.5) * 24 - Math.cos(car.angle) * 18, vy: (Math.random() - 0.5) * 24 - Math.sin(car.angle) * 18, life: 0.48, maxLife: 0.48, size: size + Math.random() * 5, color });
  }

  function updateParticles(dt) {
    for (let i = particles.length - 1; i >= 0; i--) {
      const particle = particles[i];
      particle.x += particle.vx * dt;
      particle.y += particle.vy * dt;
      particle.vx *= 0.97;
      particle.vy *= 0.97;
      particle.life -= dt;
      particle.size += 14 * dt;
      if (particle.life <= 0) particles.splice(i, 1);
    }
  }

  function updateAI(car, dt) {
    if (car.finished) return;
    const route = points();
    const target = route[car.waypoint];
    const targetAngle = Math.atan2(target.y - car.y, target.x - car.x);
    let turn = targetAngle - car.angle;
    while (turn > Math.PI) turn -= Math.PI * 2;
    while (turn < -Math.PI) turn += Math.PI * 2;
    car.angle += clamp(turn, -2.5 * dt, 2.5 * dt);
    car.speed = Math.min(car.speed + car.config.accel * 0.34 * state.difficulty * dt, car.config.maxSpeed * 0.65 * state.difficulty);
    car.wheelSpin += car.speed * dt;
    car.x += Math.cos(car.angle) * car.speed * dt;
    car.y += Math.sin(car.angle) * car.speed * dt;
    if (distance(car, target) < 65) {
      car.waypoint = (car.waypoint + 1) % route.length;
      if (car.waypoint === 1) car.lap++;
    }
    if (car.lap >= track().length) car.finished = true;
  }

  function drawTrack() {
    ctx.fillStyle = track().background;
    ctx.fillRect(0, 0, WORLD.width, WORLD.height);
    drawScenery();
    ctx.strokeStyle = "#24282b";
    ctx.lineWidth = ROAD_WIDTH + 22;
    ctx.lineJoin = "round";
    ctx.lineCap = "round";
    drawRoute();
    ctx.strokeStyle = state.trackIndex === 0 ? "#e9c84a" : "#f1e3b4";
    ctx.lineWidth = ROAD_WIDTH + 18;
    ctx.setLineDash([18, 16]);
    ctx.lineDashOffset = -state.animTime * 48;
    drawRoute();
    ctx.setLineDash([]);
    ctx.strokeStyle = "#555b5e";
    ctx.lineWidth = ROAD_WIDTH;
    drawRoute();
    ctx.strokeStyle = "rgba(255,255,255,.48)";
    ctx.lineWidth = 4;
    ctx.setLineDash([26, 24]);
    ctx.lineDashOffset = -state.animTime * 75;
    drawRoute();
    ctx.setLineDash([]);

    const start = points()[0];
    ctx.fillStyle = "#f7f7f2";
    ctx.fillRect(start.x - 5, start.y - ROAD_WIDTH / 2, 10, ROAD_WIDTH);
    ctx.fillStyle = "#222";
    for (let row = 0; row < 8; row++) {
      for (let column = 0; column < 2; column++) {
        if ((row + column) % 2 === 0) ctx.fillRect(start.x - 5 + column * 5, start.y - ROAD_WIDTH / 2 + row * ROAD_WIDTH / 8, 5, ROAD_WIDTH / 8);
      }
    }
    ctx.fillStyle = "#f5f5f5";
    ctx.font = "bold 26px Arial";
    ctx.textAlign = "center";
    ctx.fillText(track().name.toUpperCase(), WORLD.width / 2, 65);
  }

  function drawScenery() {
    for (const item of scenery) {
      if (nearestTrackDistance(item.x, item.y) < ROAD_WIDTH * 0.72) continue;
      const sway = Math.sin(state.animTime * 1.4 + item.phase) * 2;
      ctx.fillStyle = state.trackIndex === 0 ? "#0d261b" : "#76532b";
      ctx.beginPath();
      ctx.ellipse(item.x, item.y + item.size * 0.55, item.size * 0.85, item.size * 0.4, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = state.trackIndex === 0 ? (Math.sin(item.phase) > 0 ? "#36844b" : "#2f7142") : "#4e9a47";
      ctx.beginPath();
      ctx.arc(item.x + sway, item.y, item.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(255,255,255,.16)";
      ctx.beginPath();
      ctx.arc(item.x + sway - item.size * 0.25, item.y - item.size * 0.25, item.size * 0.28, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function drawRoute() {
    const route = points();
    ctx.beginPath();
    ctx.moveTo(route[0].x, route[0].y);
    for (let i = 1; i < route.length; i++) ctx.lineTo(route[i].x, route[i].y);
    ctx.stroke();
  }

  function drawCar(car) {
    ctx.save();
    ctx.translate(car.x, car.y + Math.sin(car.wheelSpin * 0.25) * 0.8);
    ctx.rotate(car.angle);
    if (car.boosting) {
      const flame = ctx.createLinearGradient(-CAR_LENGTH / 2 - 44, 0, -CAR_LENGTH / 2 + 2, 0);
      flame.addColorStop(0, "rgba(58,210,255,0)");
      flame.addColorStop(0.5, "rgba(58,210,255,.9)");
      flame.addColorStop(1, "rgba(255,245,171,.9)");
      ctx.fillStyle = flame;
      ctx.beginPath();
      ctx.moveTo(-CAR_LENGTH / 2, -5);
      ctx.lineTo(-CAR_LENGTH / 2 - (28 + Math.sin(state.animTime * 28) * 12), 0);
      ctx.lineTo(-CAR_LENGTH / 2, 5);
      ctx.closePath();
      ctx.fill();
    }
    const headlight = ctx.createRadialGradient(CAR_LENGTH / 2, 0, 2, CAR_LENGTH / 2, 0, 82);
    headlight.addColorStop(0, "rgba(255,244,176,.20)");
    headlight.addColorStop(1, "rgba(255,244,176,0)");
    ctx.fillStyle = headlight;
    ctx.fillRect(CAR_LENGTH / 2 - 2, -34, 84, 68);
    ctx.fillStyle = "rgba(0,0,0,.42)";
    ctx.fillRect(-CAR_LENGTH / 2 + 3, -CAR_WIDTH / 2 + 5, CAR_LENGTH + 3, CAR_WIDTH);
    ctx.fillStyle = "#17191b";
    const wheelOffset = Math.sin(car.wheelSpin) * 1.5;
    for (const x of [-12, 12]) {
      ctx.fillRect(x - 4, -CAR_WIDTH / 2 - 2 + wheelOffset, 8, 5);
      ctx.fillRect(x - 4, CAR_WIDTH / 2 - 3 - wheelOffset, 8, 5);
    }
    ctx.fillStyle = car.color;
    ctx.beginPath();
    ctx.roundRect(-CAR_LENGTH / 2, -CAR_WIDTH / 2, CAR_LENGTH, CAR_WIDTH, 5);
    ctx.fill();
    ctx.fillStyle = "#182a34";
    ctx.beginPath();
    ctx.roundRect(-4, -CAR_WIDTH / 2 + 3, 15, CAR_WIDTH - 6, 4);
    ctx.fill();
    ctx.fillStyle = "#cde9f2";
    ctx.fillRect(5, -CAR_WIDTH / 2 + 4, 6, CAR_WIDTH - 8);
    // Helmet and visor make the driver visible in the cockpit.
    ctx.fillStyle = "#f6f3e8";
    ctx.beginPath();
    ctx.arc(-1, 0, 5, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#73d9ee";
    ctx.fillRect(1, -2, 5, 4);
    ctx.fillStyle = "rgba(255,255,255,.55)";
    ctx.fillRect(-13, -CAR_WIDTH / 2 + 2, 9, 2);
    ctx.fillStyle = "#fff4b0";
    ctx.fillRect(CAR_LENGTH / 2 - 3, -CAR_WIDTH / 2 + 2, 3, 5);
    ctx.fillRect(CAR_LENGTH / 2 - 3, CAR_WIDTH / 2 - 7, 3, 5);
    ctx.restore();
  }

  function render() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = track().background;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    const following = player && ["countdown", "racing", "paused"].includes(state.screen);
    const viewScale = scale * (following ? 1.28 : 1);
    const offsetX = following ? canvas.width / 2 - player.x * viewScale : (canvas.width - WORLD.width * viewScale) / 2;
    const offsetY = following ? canvas.height / 2 - player.y * viewScale : (canvas.height - WORLD.height * viewScale) / 2;
    const shake = state.shake > 0 ? (Math.random() - 0.5) * state.shake * 26 : 0;
    ctx.setTransform(viewScale, 0, 0, viewScale, offsetX + shake, offsetY + shake);
    drawTrack();
    drawParticles();
    if (player) drawCar(player);
    opponents.forEach(drawCar);
    if (state.screen === "countdown") {
      ctx.fillStyle = "rgba(0,0,0,.45)";
      ctx.fillRect(0, 0, WORLD.width, WORLD.height);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 100px Arial";
      ctx.textAlign = "center";
      ctx.fillText(state.countdown > 0 ? Math.ceil(state.countdown) : "GO!", WORLD.width / 2, WORLD.height / 2);
    } else if (state.screen === "paused") {
      ctx.fillStyle = "rgba(0,0,0,.5)";
      ctx.fillRect(0, 0, WORLD.width, WORLD.height);
      ctx.fillStyle = "#fff";
      ctx.font = "bold 72px Arial";
      ctx.textAlign = "center";
      ctx.fillText("PAUSED", WORLD.width / 2, WORLD.height / 2);
    }
    drawScreenEffects();
  }

  function drawScreenEffects() {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    const vignette = ctx.createRadialGradient(canvas.width / 2, canvas.height / 2, canvas.height * 0.18, canvas.width / 2, canvas.height / 2, canvas.width * 0.72);
    vignette.addColorStop(0, "rgba(0,0,0,0)");
    vignette.addColorStop(1, "rgba(0,0,0,.28)");
    ctx.fillStyle = vignette;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (!player || !player.boosting) return;
    ctx.globalAlpha = 0.42;
    ctx.strokeStyle = "#56e9ff";
    ctx.lineWidth = 2;
    for (let i = 0; i < 14; i++) {
      const x = (i * 173 + state.animTime * 720) % canvas.width;
      const y = (i * 97 + Math.sin(state.animTime * 3 + i) * 35) % canvas.height;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x - 28, y + 9);
      ctx.stroke();
    }
    ctx.globalAlpha = 1;
  }

  function initializeGarage() {
    const carSelect = document.getElementById("carSelect");
    const trackSelect = document.getElementById("trackSelect");
    config.cars.forEach((car, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = car.name;
      option.style.color = car.color;
      carSelect.appendChild(option);
    });
    config.tracks.forEach((selectedTrack, index) => {
      const option = document.createElement("option");
      option.value = index;
      option.textContent = selectedTrack.name;
      trackSelect.appendChild(option);
    });
  }

  function drawParticles() {
    for (const particle of particles) {
      ctx.globalAlpha = Math.max(0, particle.life / particle.maxLife) * 0.38;
      ctx.fillStyle = particle.color;
      ctx.beginPath();
      ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  }

  function updateHud() {
    document.getElementById("lapInfo").textContent = `Lap: ${Math.min(player.lap + 1, track().length)} / ${track().length}`;
    document.getElementById("positionInfo").textContent = `Pos: ${getPosition()} / ${opponents.length + 1}`;
    document.getElementById("timer").textContent = formatTime(state.time);
    document.getElementById("speedInfo").textContent = `${Math.round(Math.abs(player.speed) * 0.9)} km/h`;
    document.getElementById("carInfo").textContent = selectedCar.name;
    document.getElementById("gearInfo").textContent = player.gear === -1 ? "R" : player.gear === 0 ? "N" : player.gear;
    document.getElementById("gearDownBtn").disabled = player.gear <= -1 || (player.auto && player.gear > 0);
    document.getElementById("gearUpBtn").disabled = player.gear >= 5 || (player.auto && player.gear > 0);
    document.getElementById("transmissionBtn").textContent = player.auto ? "AUTO ✓" : "MANUAL";
    const limit = player.gear === -1 ? 82 : player.gear > 0 ? GEAR_SPEEDS[player.gear - 1] * (selectedCar.maxSpeed / 300) : 1;
    document.getElementById("rpmFill").style.width = `${Math.min(100, Math.abs(player.speed) / limit * 100)}%`;
    document.getElementById("boostFill").style.width = `${player.boost}%`;
  }

  function frame(timestamp) {
    if (!state.lastTime) state.lastTime = timestamp;
    const dt = Math.min((timestamp - state.lastTime) / 1000, 0.04);
    state.lastTime = timestamp;
    if (state.screen !== "paused") state.animTime += dt;
    state.shake = Math.max(0, state.shake - dt);
    state.noticeTime = Math.max(0, state.noticeTime - dt);
    if (state.noticeTime === 0) document.getElementById("gearNotice").classList.add("hidden");
    if (state.screen === "countdown") {
      state.countdown -= dt;
      if (state.countdown <= -0.65) state.screen = "racing";
    } else if (state.screen === "racing") {
      state.time += dt;
      updatePlayer(dt);
      opponents.forEach(car => updateAI(car, dt));
      updateCarCollisions();
      updateHud();
    }
    if (state.screen !== "paused") updateParticles(dt);
    render();
    requestAnimationFrame(frame);
  }

  function updateCarCollisions() {
    const cars = [player, ...opponents];
    for (let i = 0; i < cars.length; i++) {
      for (let j = i + 1; j < cars.length; j++) {
        const a = cars[i];
        const b = cars[j];
        const dx = b.x - a.x;
        const dy = b.y - a.y;
        const gap = Math.hypot(dx, dy);
        if (gap > CAR_LENGTH * 0.82 || gap === 0) continue;
        const push = (CAR_LENGTH * 0.82 - gap) / 2;
        a.x -= (dx / gap) * push;
        a.y -= (dy / gap) * push;
        b.x += (dx / gap) * push;
        b.y += (dy / gap) * push;
        a.speed *= 0.72;
        b.speed *= 0.72;
        state.shake = 0.16;
        if (a.isPlayer || b.isPlayer) emitSmoke(a.isPlayer ? a : b);
      }
    }
  }

  initializeGarage();
  document.getElementById("quickRaceBtn").addEventListener("click", () => startRace("race"));
  document.getElementById("timeTrialBtn").addEventListener("click", () => startRace("time"));
  document.getElementById("championshipBtn").addEventListener("click", () => {
    state.championshipRound = 0;
    startRace("championship");
  });
  document.getElementById("howToPlayBtn").addEventListener("click", () => {
    menu.classList.add("hidden");
    howTo.classList.remove("hidden");
  });
  document.querySelectorAll(".backBtn").forEach(button => button.addEventListener("click", () => {
    howTo.classList.add("hidden");
    menu.classList.remove("hidden");
  }));
  document.querySelectorAll(".restartBtn").forEach(button => button.addEventListener("click", () => {
    if (state.mode === "championship" && state.championshipRound < config.tracks.length - 1) {
      state.championshipRound++;
      state.trackIndex = (state.trackIndex + 1) % config.tracks.length;
      startRace("championship");
    } else {
      if (state.mode === "championship") state.championshipRound = 0;
      startRace(state.mode);
    }
  }));
  document.querySelectorAll(".menuBtn").forEach(button => button.addEventListener("click", () => {
    results.classList.add("hidden");
    hud.classList.add("hidden");
    menu.classList.remove("hidden");
    state.screen = "menu";
  }));
  document.getElementById("pauseBtn").addEventListener("click", event => {
    if (state.screen === "racing") {
      state.screen = "paused";
      keys.clear();
      releaseTouch();
      if (player) player.boosting = false;
      event.currentTarget.textContent = "RESUME";
      event.currentTarget.setAttribute("aria-label", "Resume race");
    } else if (state.screen === "paused") {
      state.screen = "racing";
      state.lastTime = 0;
      event.currentTarget.textContent = "PAUSE";
      event.currentTarget.setAttribute("aria-label", "Pause race");
    }
  });
  document.getElementById("gearDownBtn").addEventListener("click", () => selectGear(player.gear - 1));
  document.getElementById("gearUpBtn").addEventListener("click", () => selectGear(player.gear + 1));
  document.getElementById("reverseBtn").addEventListener("click", () => selectGear(player.gear === -1 ? 1 : -1));
  document.getElementById("neutralBtn").addEventListener("click", () => selectGear(0));
  document.getElementById("transmissionBtn").addEventListener("click", toggleTransmission);
  document.addEventListener("keydown", event => {
    if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", " "].includes(event.key)) event.preventDefault();
    const key = event.key.length === 1 ? event.key.toLowerCase() : event.key;
    keys.add(key);
    if (state.screen === "racing" && !event.repeat) {
      if (key >= "1" && key <= "5") selectGear(Number(key));
      if (key === "r") selectGear(player.gear === -1 ? 1 : -1);
      if (key === "n") selectGear(0);
      if (key === "+" || key === "=") selectGear(player.gear + 1);
      if (key === "-") selectGear(player.gear - 1);
    }
    if (event.key === "Escape" && ["racing", "paused"].includes(state.screen)) document.getElementById("pauseBtn").click();
  });
  document.addEventListener("keyup", event => keys.delete(event.key.length === 1 ? event.key.toLowerCase() : event.key));
  canvas.addEventListener("pointerdown", event => {
    if (event.pointerType === "mouse") return;
    touch.active = true;
    touch.startX = event.clientX;
    canvas.setPointerCapture(event.pointerId);
  });
  canvas.addEventListener("pointermove", event => {
    if (!touch.active) return;
    const movement = event.clientX - touch.startX;
    touch.steering = movement < -18 ? -1 : movement > 18 ? 1 : 0;
  });
  const releaseCanvasTouch = () => {
    touch.active = false;
    touch.steering = 0;
  };
  const releaseTouch = () => {
    releaseCanvasTouch();
    touch.left = touch.right = touch.forward = touch.backward = touch.boost = false;
    driveControls.querySelectorAll(".pressed").forEach(button => button.classList.remove("pressed"));
  };
  canvas.addEventListener("pointerup", releaseCanvasTouch);
  canvas.addEventListener("pointercancel", releaseCanvasTouch);
  driveControls.querySelectorAll("[data-drive]").forEach(button => {
    const control = button.dataset.drive;
    const press = event => {
      event.preventDefault();
      touch[control] = true;
      button.classList.add("pressed");
      if (button.setPointerCapture && event.pointerId !== undefined) button.setPointerCapture(event.pointerId);
    };
    const release = () => {
      touch[control] = false;
      button.classList.remove("pressed");
    };
    button.addEventListener("pointerdown", press);
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("lostpointercapture", release);
    button.addEventListener("contextmenu", event => event.preventDefault());
  });
  window.addEventListener("blur", () => {
    keys.clear();
    releaseTouch();
  });
  window.addEventListener("resize", resize);

  resize();
  requestAnimationFrame(frame);
})();
