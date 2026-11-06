// Prism Path: a simple level-by-level mirror puzzle.
// Initial static levels (original set). These are kept for early gameplay.
const STATIC_LEVELS = [
  {
    name: 'First light', tag: 'START HERE', difficulty: 'Easy', description: 'Turn one mirror to guide the light.',
    rows: 3, cols: 3, source: { row: 1, col: 0, dir: 'right' }, target: { row: 2, col: 2 },
    mirrors: [
      { row: 1, col: 1, dir: '/', solution: '\\' },
      { row: 2, col: 1, dir: '\\', solution: '\\' }
    ]
  },
  // ... (remaining original levels omitted for brevity) ...
];

// Generate a procedural level for indexes beyond the static set.
function generateProceduralLevel(index) {
  // Determine board size: grow slowly with index.
  const baseSize = 4; // start at 4x4 for generated levels
  const size = baseSize + Math.floor(index / 5); // increase every 5 levels
  const rows = size;
  const cols = size;

  // Simple zig‑zag path from left to right using mirrors.
  const mirrors = [];
  let dir = 'right';
  let r = Math.floor(rows / 2);
  let c = 0;
  // Place a mirror every two columns.
  while (c < cols - 1) {
    // Alternate slash direction to turn up/down.
    const slash = (c / 2) % 2 === 0 ? '/' : '\\';
    mirrors.push({ row: r, col: c, dir: slash, solution: slash });
    // Move to next column.
    c += 2;
    // Change row if possible.
    if (slash === '/') {
      r = Math.max(0, r - 1);
    } else {
      r = Math.min(rows - 1, r + 1);
    }
  }

  const source = { row: Math.floor(rows / 2), col: 0, dir: 'right' };
  const target = { row: r, col: cols - 1 };

  return {
    name: `Procedural Level ${index + 1}`,
    tag: `LEVEL ${index + 1}`,
    difficulty: 'Hard',
    description: 'Generated level with increasing size and complexity.',
    rows,
    cols,
    source,
    target,
    mirrors,
  };
}

// Unified accessor that returns either a static level or a generated one.
function getLevel(index) {
  if (index < STATIC_LEVELS.length) {
    return STATIC_LEVELS[index];
  }
  // Generate on‑the‑fly for higher indexes.
  return generateProceduralLevel(index);
}

// Replace usages of LEVELS with a dynamic wrapper.
const LEVELS_PROXY = new Proxy([], {
  get: (_, prop) => {
    // For numeric access, return appropriate level.
    const idx = Number(prop);
    if (!isNaN(idx)) {
      return getLevel(idx);
    }
    // Preserve length property (infinite for our purposes).
    if (prop === 'length') {
      // Pretend we have a large number of levels.
      return 10000;
    }
    return undefined;
  },
  // Ensure iteration works for the initial static portion.
  ownKeys: () => {
    const keys = [];
    for (let i = 0; i < STATIC_LEVELS.length; i++) keys.push(i.toString());
    // Add a few generated keys for illustration.
    for (let i = STATIC_LEVELS.length; i < STATIC_LEVELS.length + 5; i++) keys.push(i.toString());
    return keys;
  },
  getOwnPropertyDescriptor: (target, prop) => ({ configurable: true, enumerable: true, value: target[prop] })
});

// Use LEVELS_PROXY in place of the original LEVELS constant.
const LEVELS = LEVELS_PROXY;

  {
    name: 'First light', tag: 'START HERE', difficulty: 'Easy', description: 'Turn one mirror to guide the light.',
    rows: 3, cols: 3, source: { row: 1, col: 0, dir: 'right' }, target: { row: 2, col: 2 },
    mirrors: [
      { row: 1, col: 1, dir: '/', solution: '\\' },
      { row: 2, col: 1, dir: '\\', solution: '\\' }
    ]
  },
  {
    name: 'Across the board', tag: 'LEVEL 2', difficulty: 'Easy', description: 'Make a gentle turn, then reach the gem.',
    rows: 4, cols: 4, source: { row: 0, col: 0, dir: 'down' }, target: { row: 0, col: 3 },
    mirrors: [
      { row: 2, col: 0, dir: '/', solution: '\\' }, { row: 2, col: 3, dir: '/', solution: '/' },
      { row: 1, col: 1, dir: '\\' }
    ]
  },
  {
    name: 'Back the other way', tag: 'LEVEL 3', difficulty: 'Easy', description: 'Follow the beam around the corner.',
    rows: 4, cols: 4, source: { row: 3, col: 3, dir: 'up' }, target: { row: 3, col: 0 },
    mirrors: [
      { row: 1, col: 3, dir: '/', solution: '\\' }, { row: 1, col: 0, dir: '/', solution: '/' },
      { row: 0, col: 1, dir: '\\' }, { row: 2, col: 2, dir: '\\' }
    ]
  },
  {
    name: 'A longer route', tag: 'LEVEL 4', difficulty: 'Medium', description: 'Three mirrors make the path.',
    rows: 5, cols: 5, source: { row: 0, col: 0, dir: 'right' }, target: { row: 1, col: 0 },
    mirrors: [
      { row: 0, col: 2, dir: '/', solution: '\\' }, { row: 4, col: 2, dir: '/', solution: '/' },
      { row: 4, col: 0, dir: '\\', solution: '\\' }, { row: 1, col: 4, dir: '/' },
      { row: 2, col: 4, dir: '\\' }, { row: 3, col: 1, dir: '/' }
    ]
  },
  {
    name: 'Light from below', tag: 'LEVEL 5', difficulty: 'Medium', description: 'Guide the beam across two turns.',
    rows: 5, cols: 5, source: { row: 4, col: 0, dir: 'right' }, target: { row: 0, col: 0 },
    mirrors: [
      { row: 4, col: 2, dir: '\\', solution: '/' }, { row: 1, col: 2, dir: '\\', solution: '\\' },
      { row: 1, col: 0, dir: '\\', solution: '\\' }, { row: 2, col: 1, dir: '/' },
      { row: 2, col: 4, dir: '\\' }, { row: 3, col: 3, dir: '/' }
    ]
  },
  {
    name: 'Two small turns', tag: 'LEVEL 6', difficulty: 'Medium', description: 'Set two mirrors, then let it glow.',
    rows: 5, cols: 5, source: { row: 2, col: 0, dir: 'right' }, target: { row: 3, col: 0 },
    mirrors: [
      { row: 2, col: 2, dir: '/', solution: '\\' }, { row: 4, col: 2, dir: '/', solution: '/' },
      { row: 4, col: 0, dir: '/', solution: '\\' }, { row: 0, col: 2, dir: '\\' },
      { row: 1, col: 4, dir: '/' }, { row: 3, col: 4, dir: '\\' }, { row: 4, col: 4, dir: '/' }
    ]
  },
  {
    name: 'A quiet zigzag', tag: 'LEVEL 7', difficulty: 'Hard', description: 'Take the long way to the crystal.',
    rows: 6, cols: 6, source: { row: 5, col: 0, dir: 'right' }, target: { row: 0, col: 0 },
    mirrors: [
      { row: 5, col: 2, dir: '\\', solution: '/' }, { row: 1, col: 2, dir: '\\', solution: '\\' },
      { row: 1, col: 0, dir: '\\', solution: '\\' }, { row: 0, col: 4, dir: '/' },
      { row: 2, col: 1, dir: '\\' }, { row: 3, col: 4, dir: '/' },
      { row: 4, col: 0, dir: '/' }, { row: 2, col: 5, dir: '\\' }
    ]
  },
  {
    name: 'Crystal path', tag: 'FINAL LEVEL', difficulty: 'Hard', description: 'Line up both mirrors to finish.',
    rows: 6, cols: 6, source: { row: 0, col: 0, dir: 'right' }, target: { row: 1, col: 4 },
    mirrors: [
      { row: 0, col: 3, dir: '/', solution: '\\' }, { row: 4, col: 3, dir: '/', solution: '/' },
      { row: 4, col: 1, dir: '/', solution: '\\' }, { row: 1, col: 1, dir: '/', solution: '/' },
      { row: 0, col: 5, dir: '/' }, { row: 2, col: 2, dir: '\\' },
      { row: 3, col: 0, dir: '/' }, { row: 5, col: 4, dir: '\\' }, { row: 2, col: 5, dir: '/' }
    ]
  }
];

const DIRECTIONS = {
  up: { row: -1, col: 0 }, down: { row: 1, col: 0 }, left: { row: 0, col: -1 }, right: { row: 0, col: 1 }
};
const SLASH_TURNS = { right: 'up', up: 'right', left: 'down', down: 'left' };
const BACKSLASH_TURNS = { right: 'down', down: 'right', left: 'up', up: 'left' };
const STORAGE_KEY = 'prism-path-dashboard-v2';

const board = document.querySelector('#board');
const beamLayer = document.querySelector('#beamLayer');
const beamLine = document.querySelector('#beamLine');
const beamGlowLine = document.querySelector('#beamGlowLine');
const levelList = document.querySelector('#levelList');
const statusChip = document.querySelector('#statusChip');
const statusText = document.querySelector('#statusText');
const hintMessage = document.querySelector('#hintMessage');
const nextButton = document.querySelector('#nextBtn');
const toast = document.querySelector('#toast');
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
    const solved = Array.isArray(saved.solved) ? saved.solved.filter(index => Number.isInteger(index) && index >= 0 && index < LEVELS.length) : [];
    return { solved: Array.from(new Set(solved)), activeLevel: Number(saved.activeLevel) || 0 };
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
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* Local saving is optional. */ }
  renderDashboard();
  renderJourney();
}

function level() { return LEVELS[activeLevel]; }
function mirrorAt(row, col) { return currentMirrors.find(mirror => mirror.row === row && mirror.col === col); }

function loadLevel(index) {
  if (index < 0 || index >= LEVELS.length || index > unlockedThrough()) return;
  activeLevel = index;
  const puzzle = level();
  currentMirrors = puzzle.mirrors.map(mirror => ({ ...mirror }));
  history = [];
  moveCount = 0;
  hintMessage.textContent = '';
  nextButton.hidden = true;
  document.querySelector('#levelNumber').textContent = 'Level ' + (index + 1);
  document.querySelector('#levelTag').textContent = puzzle.tag;
  document.querySelector('#levelName').textContent = puzzle.name;
  document.querySelector('#difficulty').textContent = puzzle.difficulty;
  document.querySelector('#levelDescription').textContent = puzzle.description;
  document.querySelector('#moveCount').textContent = '0';
  board.style.gridTemplateColumns = 'repeat(' + puzzle.cols + ', 1fr)';
  board.style.gridTemplateRows = 'repeat(' + puzzle.rows + ', 1fr)';
  board.setAttribute('aria-label', puzzle.name + ', ' + puzzle.rows + ' by ' + puzzle.cols + ' puzzle board');
  renderBoard();
  tracePath(false);
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
      cell.className = 'cell ' + (mirror ? 'mirror-cell' : isSource ? 'source-cell' : isTarget ? 'target-cell' : 'empty');
      cell.dataset.row = row;
      cell.dataset.col = col;
      if (mirror) {
        const slash = mirror.dir === '/';
        cell.setAttribute('aria-label', 'Mirror at row ' + (row + 1) + ', column ' + (col + 1) + ', ' + (slash ? 'slash' : 'backslash') + '; tap to turn');
        cell.innerHTML = '<span class="mirror-surface" aria-hidden="true"></span><svg class="mirror-stroke" viewBox="0 0 100 100" aria-hidden="true"><line x1="' + (slash ? 19 : 81) + '" y1="' + (slash ? 81 : 19) + '" x2="' + (slash ? 81 : 19) + '" y2="' + (slash ? 19 : 81) + '" /></svg>';
      } else if (isSource) {
        cell.disabled = true;
        cell.tabIndex = -1;
        cell.setAttribute('aria-label', 'Light source, pointing ' + puzzle.source.dir);
        cell.innerHTML = '<span class="source-core" aria-hidden="true"></span>';
      } else if (isTarget) {
        cell.disabled = true;
        cell.tabIndex = -1;
        cell.setAttribute('aria-label', 'Crystal target');
        cell.innerHTML = '<span class="crystal" aria-hidden="true">✦</span>';
      } else {
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
  history.push({ row: row, col: col, dir: mirror.dir, moveCount: moveCount });
  mirror.dir = mirror.dir === '/' ? '\\' : '/';
  moveCount++;
  document.querySelector('#moveCount').textContent = String(moveCount);
  hintMessage.textContent = '';
  renderBoard();
  tracePath(false);
  updateControls();
  playTone(520, .045);
}

function tracePath() {
  const puzzle = level();
  let row = puzzle.source.row;
  let col = puzzle.source.col;
  let direction = puzzle.source.dir;
  const points = [{ row: row, col: col }];
  const visited = new Set();
  let solved = false;
  let looped = false;
  let steps = 0;

  while (steps++ < puzzle.rows * puzzle.cols * 4 + 8) {
    const state = row + ',' + col + ',' + direction;
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
    points.push({ row: row, col: col });
    if (row === puzzle.target.row && col === puzzle.target.col) { solved = true; break; }
    const mirror = mirrorAt(row, col);
    if (mirror) direction = (mirror.dir === '/' ? SLASH_TURNS : BACKSLASH_TURNS)[direction];
  }

  const coordinates = points.map(point => (point.col + .5) + ',' + (point.row + .5)).join(' ');
  beamLayer.setAttribute('viewBox', '0 0 ' + puzzle.cols + ' ' + puzzle.rows);
  beamLine.setAttribute('points', coordinates);
  beamGlowLine.setAttribute('points', coordinates);
  board.querySelector('.target-cell')?.classList.toggle('lit', solved);
  statusChip.classList.toggle('is-lit', solved);
  if (solved) {
    statusText.textContent = activeLevel === LEVELS.length - 1 ? 'All levels complete!' : 'Gem reached! Nice work.';
    handleSolved();
  } else {
    nextButton.hidden = true;
    statusText.textContent = looped ? 'The light loops back. Try another turn.' : 'Tap a mirror to turn it.';
  }
  return { solved: solved, looped: looped };
}

function handleSolved() {
  const firstSolve = !progress.solved.includes(activeLevel);
  if (firstSolve) progress.solved.push(activeLevel);
  if (activeLevel < LEVELS.length - 1) {
    nextButton.hidden = false;
    nextButton.textContent = 'Next level: ' + (activeLevel + 2) + ' →';
  } else {
    nextButton.hidden = true;
  }
  saveProgress();
  if (firstSolve) {
    playTone(790, .11);
    showToast(activeLevel === LEVELS.length - 1 ? 'All eight levels cleared!' : 'Level cleared. The next one is ready.');
  }
}

function undo() {
  const previous = history.pop();
  if (!previous) return;
  const mirror = mirrorAt(previous.row, previous.col);
  mirror.dir = previous.dir;
  moveCount = previous.moveCount;
  document.querySelector('#moveCount').textContent = String(moveCount);
  hintMessage.textContent = '';
  renderBoard();
  tracePath(false);
  updateControls();
}

function restart() {
  currentMirrors = level().mirrors.map(mirror => ({ ...mirror }));
  history = [];
  moveCount = 0;
  document.querySelector('#moveCount').textContent = '0';
  hintMessage.textContent = '';
  nextButton.hidden = true;
  renderBoard();
  tracePath(false);
  updateControls();
}

function hint() {
  const mismatch = currentMirrors.find(mirror => mirror.solution && mirror.dir !== mirror.solution);
  if (!mismatch) {
    hintMessage.textContent = 'Follow the light to the gem.';
    return;
  }
  const cellIndex = mismatch.row * level().cols + mismatch.col;
  const cell = board.children[cellIndex];
  cell.classList.add('hint-highlight');
  setTimeout(() => cell?.classList.remove('hint-highlight'), 1500);
  hintMessage.textContent = 'Tap the glowing mirror once, then follow the light.';
}

function renderDashboard() {
  const solvedCount = progress.solved.length;
  document.querySelector('#solvedCount').textContent = String(solvedCount);
  document.querySelector('#progressLabel').textContent = solvedCount + ' / ' + LEVELS.length;
  const percentage = solvedCount / LEVELS.length * 100;
  document.querySelector('#progressBar').style.width = percentage + '%';
  document.querySelector('.progress-track').setAttribute('aria-valuenow', String(solvedCount));
}

function renderJourney() {
  const canReach = unlockedThrough();
  levelList.replaceChildren(...LEVELS.map((puzzle, index) => {
    const complete = progress.solved.includes(index);
    const locked = index > canReach;
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'level-button' + (index === activeLevel ? ' active' : '') + (complete ? ' complete' : '') + (locked ? ' locked' : '');
    button.disabled = locked;
    button.setAttribute('aria-current', index === activeLevel ? 'step' : 'false');
    button.setAttribute('aria-label', 'Level ' + (index + 1) + (locked ? ', locked' : complete ? ', complete' : ', available') + ': ' + puzzle.name);
    button.textContent = String(index + 1);
    button.addEventListener('click', () => loadLevel(index));
    return button;
  }));
}

function updateControls() {
  document.querySelector('#undoBtn').disabled = history.length === 0;
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2300);
}

function playTone(frequency, duration) {
  if (document.querySelector('#soundBtn').getAttribute('aria-pressed') !== 'true') return;
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

document.querySelector('#undoBtn').addEventListener('click', undo);
document.querySelector('#restartBtn').addEventListener('click', restart);
document.querySelector('#hintBtn').addEventListener('click', hint);
nextButton.addEventListener('click', () => loadLevel(activeLevel + 1));
document.querySelector('#soundBtn').addEventListener('click', event => {
  const enabled = event.currentTarget.getAttribute('aria-pressed') !== 'true';
  event.currentTarget.setAttribute('aria-pressed', String(enabled));
  event.currentTarget.setAttribute('aria-label', enabled ? 'Turn sound off' : 'Turn sound on');
  document.querySelector('#soundLabel').textContent = enabled ? 'Sound on' : 'Sound off';
  if (enabled) playTone(680, .08);
});

loadLevel(activeLevel);
