// Prism Path: solve 60 original mirror puzzles by turning mirrors to guide the beam.
const LEVELS = Array.isArray(window.PRISM_LEVELS) ? window.PRISM_LEVELS : [];
const DIRECTIONS = {
  up: { row: -1, col: 0 }, down: { row: 1, col: 0 },
  left: { row: 0, col: -1 }, right: { row: 0, col: 1 }
};
const SLASH_TURNS = { right: 'up', up: 'right', left: 'down', down: 'left' };
const BACKSLASH_TURNS = { right: 'down', down: 'right', left: 'up', up: 'left' };
const STORAGE_KEY = 'prism-path-dashboard-v2';

const $ = selector => document.querySelector(selector);
const board = $('#board');
const beamLayer = $('#beamLayer');
const beamLine = $('#beamLine');
const beamGlowLine = $('#beamGlowLine');
const levelList = $('#levelList');
const statusChip = $('#statusChip');
const statusText = $('#statusText');
const hintMessage = $('#hintMessage');
const nextButton = $('#nextBtn');
const toast = $('#toast');
let progress = readProgress();
let activeLevel = Math.min(Math.max(0, Number(progress.activeLevel) || 0), unlockedThrough());
let currentMirrors = [];
let history = [];
let moveCount = 0;
let toastTimer;
let audioContext;

function readProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    const solved = Array.isArray(saved.solved)
      ? saved.solved.filter(index => Number.isInteger(index) && index >= 0 && index < LEVELS.length)
      : [];
    return { solved: [...new Set(solved)], activeLevel: Number(saved.activeLevel) || 0 };
  } catch {
    return { solved: [], activeLevel: 0 };
  }
}

function unlockedThrough() {
  const highestSolved = progress.solved.reduce((highest, index) => Math.max(highest, index), -1);
  return Math.min(LEVELS.length - 1, highestSolved + 1);
}

function saveProgress() {
  progress.activeLevel = activeLevel;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* Saving is optional. */ }
  renderDashboard();
  renderJourney();
}

function level() { return LEVELS[activeLevel]; }
function mirrorAt(row, col) { return currentMirrors.find(mirror => mirror.row === row && mirror.col === col); }

function loadLevel(index) {
  if (!Number.isInteger(index) || index < 0 || index >= LEVELS.length || index > unlockedThrough()) return;
  activeLevel = index;
  const puzzle = level();
  currentMirrors = puzzle.mirrors.map(mirror => ({ ...mirror }));
  history = [];
  moveCount = 0;
  hintMessage.textContent = '';
  nextButton.hidden = true;
  $('#levelNumber').textContent = `Level ${index + 1}`;
  $('#levelTag').textContent = puzzle.tag;
  $('#levelName').textContent = puzzle.name;
  $('#difficulty').textContent = puzzle.difficulty;
  $('#levelDescription').textContent = puzzle.description;
  $('#moveCount').textContent = '0';
  board.style.gridTemplateColumns = `repeat(${puzzle.cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${puzzle.rows}, 1fr)`;
  board.setAttribute('aria-label', `${puzzle.name}, ${puzzle.rows} by ${puzzle.cols} puzzle board`);
  renderBoard();
  tracePath();
  updateControls();
  saveProgress();
}

function renderBoard() {
  const puzzle = level();
  const cells = [];
  for (let row = 0; row < puzzle.rows; row++) {
    for (let col = 0; col < puzzle.cols; col++) {
      const mirror = mirrorAt(row, col);
      const isSource = puzzle.source.row === row && puzzle.source.col === col;
      const isTarget = puzzle.target.row === row && puzzle.target.col === col;
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.dataset.row = row;
      cell.dataset.col = col;
      if (mirror) {
        const slash = mirror.dir === '/';
        cell.className = 'cell mirror-cell';
        cell.setAttribute('aria-label', `Mirror at row ${row + 1}, column ${col + 1}, ${slash ? 'slash' : 'backslash'}; tap to turn`);
        cell.innerHTML = `<span class="mirror-surface" aria-hidden="true"></span><svg class="mirror-stroke" viewBox="0 0 100 100" aria-hidden="true"><line x1="${slash ? 19 : 81}" y1="${slash ? 81 : 19}" x2="${slash ? 81 : 19}" y2="${slash ? 19 : 81}" /></svg>`;
      } else if (isSource) {
        cell.className = 'cell source-cell';
        cell.disabled = true;
        cell.tabIndex = -1;
        cell.setAttribute('aria-label', `Light source, pointing ${puzzle.source.dir}`);
        cell.innerHTML = '<span class="source-core" aria-hidden="true"></span>';
      } else if (isTarget) {
        cell.className = 'cell target-cell';
        cell.disabled = true;
        cell.tabIndex = -1;
        cell.setAttribute('aria-label', 'Crystal target');
        cell.innerHTML = '<span class="crystal" aria-hidden="true">✦</span>';
      } else {
        cell.className = 'cell empty';
        cell.disabled = true;
        cell.tabIndex = -1;
        cell.setAttribute('aria-hidden', 'true');
      }
      cells.push(cell);
    }
  }
  board.replaceChildren(...cells);
  board.onclick = event => {
    const button = event.target.closest('.mirror-cell');
    if (button) rotateMirror(Number(button.dataset.row), Number(button.dataset.col));
  };
}

function rotateMirror(row, col) {
  const mirror = mirrorAt(row, col);
  if (!mirror) return;
  history.push({ row, col, dir: mirror.dir, moveCount });
  mirror.dir = mirror.dir === '/' ? '\\' : '/';
  moveCount++;
  $('#moveCount').textContent = String(moveCount);
  hintMessage.textContent = '';
  renderBoard();
  tracePath();
  updateControls();
  playTone(520, .045);
}

function tracePath() {
  const puzzle = level();
  let row = puzzle.source.row;
  let col = puzzle.source.col;
  let direction = puzzle.source.dir;
  const points = [{ row, col }];
  const visited = new Set();
  let solved = false;
  let looped = false;
  let steps = 0;

  while (steps++ < puzzle.rows * puzzle.cols * 4 + 8) {
    const state = `${row},${col},${direction}`;
    if (visited.has(state)) { looped = true; break; }
    visited.add(state);
    const delta = DIRECTIONS[direction];
    const nextRow = row + delta.row;
    const nextCol = col + delta.col;
    if (nextRow < 0 || nextRow >= puzzle.rows || nextCol < 0 || nextCol >= puzzle.cols) {
      points.push({ row: row + delta.row * .5, col: col + delta.col * .5 });
      break;
    }
    row = nextRow;
    col = nextCol;
    points.push({ row, col });
    if (row === puzzle.target.row && col === puzzle.target.col) { solved = true; break; }
    const mirror = mirrorAt(row, col);
    if (mirror) direction = (mirror.dir === '/' ? SLASH_TURNS : BACKSLASH_TURNS)[direction];
  }

  const coordinates = points.map(point => `${point.col + .5},${point.row + .5}`).join(' ');
  beamLayer.setAttribute('viewBox', `0 0 ${puzzle.cols} ${puzzle.rows}`);
  beamLine.setAttribute('points', coordinates);
  beamGlowLine.setAttribute('points', coordinates);
  board.querySelector('.target-cell')?.classList.toggle('lit', solved);
  statusChip.classList.toggle('is-lit', solved);
  if (solved) {
    statusText.textContent = activeLevel === LEVELS.length - 1 ? 'All 60 levels complete!' : 'Gem reached! Nice work.';
    handleSolved();
  } else {
    nextButton.hidden = true;
    statusText.textContent = looped ? 'The light loops back. Try another turn.' : 'Tap a mirror to turn it.';
  }
  return { solved, looped };
}

function handleSolved() {
  const firstSolve = !progress.solved.includes(activeLevel);
  if (firstSolve) progress.solved.push(activeLevel);
  if (activeLevel < LEVELS.length - 1) {
    nextButton.hidden = false;
    nextButton.textContent = `Next level: ${activeLevel + 2} →`;
  } else {
    nextButton.hidden = true;
  }
  saveProgress();
  if (firstSolve) {
    playTone(790, .11);
    showToast(activeLevel === LEVELS.length - 1 ? 'All 60 levels cleared!' : 'Level cleared. The next one is ready.');
  }
}

function undo() {
  const previous = history.pop();
  if (!previous) return;
  const mirror = mirrorAt(previous.row, previous.col);
  mirror.dir = previous.dir;
  moveCount = previous.moveCount;
  $('#moveCount').textContent = String(moveCount);
  hintMessage.textContent = '';
  renderBoard();
  tracePath();
  updateControls();
}

function restart() {
  currentMirrors = level().mirrors.map(mirror => ({ ...mirror }));
  history = [];
  moveCount = 0;
  $('#moveCount').textContent = '0';
  hintMessage.textContent = '';
  nextButton.hidden = true;
  renderBoard();
  tracePath();
  updateControls();
}

function hint() {
  const mismatch = currentMirrors.find(mirror => mirror.solution && mirror.dir !== mirror.solution);
  if (!mismatch) {
    hintMessage.textContent = 'Follow the light to the gem.';
    return;
  }
  const cell = board.children[mismatch.row * level().cols + mismatch.col];
  cell?.classList.add('hint-highlight');
  setTimeout(() => cell?.classList.remove('hint-highlight'), 1500);
  hintMessage.textContent = 'Tap the glowing mirror once, then follow the light.';
}

function renderDashboard() {
  const solvedCount = progress.solved.length;
  $('#solvedCount').textContent = String(solvedCount);
  $('#progressLabel').textContent = `${solvedCount} / ${LEVELS.length}`;
  $('#progressBar').style.width = `${solvedCount / LEVELS.length * 100}%`;
  $('.progress-track').setAttribute('aria-valuemax', String(LEVELS.length));
  $('.progress-track').setAttribute('aria-valuenow', String(solvedCount));
  $('#levelsCount').textContent = `${LEVELS.length} LEVELS`;
}

function renderJourney() {
  const canReach = unlockedThrough();
  levelList.replaceChildren(...LEVELS.map((puzzle, index) => {
    const complete = progress.solved.includes(index);
    const locked = index > canReach;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `level-button${index === activeLevel ? ' active' : ''}${complete ? ' complete' : ''}${locked ? ' locked' : ''}`;
    button.disabled = locked;
    button.setAttribute('aria-current', index === activeLevel ? 'step' : 'false');
    button.setAttribute('aria-label', `Level ${index + 1}${locked ? ', locked' : complete ? ', complete' : ', available'}: ${puzzle.name}`);
    button.textContent = String(index + 1);
    button.addEventListener('click', () => loadLevel(index));
    return button;
  }));
}

function updateControls() { $('#undoBtn').disabled = history.length === 0; }

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

function playTone(frequency, duration) {
  if ($('#soundBtn').getAttribute('aria-pressed') !== 'true') return;
  try {
    audioContext ||= new (window.AudioContext || window.webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gain = audioContext.createGain();
    oscillator.type = 'sine';
    oscillator.frequency.value = frequency;
    gain.gain.setValueAtTime(.035, audioContext.currentTime);
    gain.gain.exponentialRampToValueAtTime(.001, audioContext.currentTime + duration);
    oscillator.connect(gain).connect(audioContext.destination);
    oscillator.start();
    oscillator.stop(audioContext.currentTime + duration);
  } catch { /* Sound is optional. */ }
}

$('#undoBtn').addEventListener('click', undo);
$('#restartBtn').addEventListener('click', restart);
$('#hintBtn').addEventListener('click', hint);
nextButton.addEventListener('click', () => loadLevel(activeLevel + 1));
$('#soundBtn').addEventListener('click', event => {
  const enabled = event.currentTarget.getAttribute('aria-pressed') !== 'true';
  event.currentTarget.setAttribute('aria-pressed', String(enabled));
  event.currentTarget.setAttribute('aria-label', enabled ? 'Turn sound off' : 'Turn sound on');
  $('#soundLabel').textContent = enabled ? 'Sound on' : 'Sound off';
  if (enabled) playTone(680, .08);
});

renderDashboard();
loadLevel(activeLevel);
