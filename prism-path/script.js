// Prism Path: a self-contained mirror-routing puzzle.
const LEVELS = [
  {
    name: 'First light', tag: 'WARM UP', description: 'One turn can change everything.', par: 1,
    rows: 5, cols: 5, source: { row: 2, col: 0, dir: 'right' }, target: { row: 2, col: 4 },
    mirrors: [
      { row: 0, col: 2, dir: '/' }, { row: 1, col: 1, dir: '\\' }, { row: 1, col: 4, dir: '\\' },
      { row: 2, col: 1, dir: '/', solution: '\\' }, { row: 4, col: 1, dir: '\\' }, { row: 4, col: 4, dir: '/' }
    ]
  },
  {
    name: 'A brighter turn', tag: 'EASY', description: 'Let the beam travel across the board.', par: 1,
    rows: 5, cols: 5, source: { row: 0, col: 0, dir: 'down' }, target: { row: 0, col: 4 },
    mirrors: [
      { row: 0, col: 2, dir: '/' }, { row: 1, col: 2, dir: '\\' }, { row: 2, col: 0, dir: '/', solution: '\\' },
      { row: 2, col: 4, dir: '/' }, { row: 3, col: 1, dir: '/' }, { row: 4, col: 3, dir: '\\' }
    ]
  },
  {
    name: 'The long way home', tag: 'EASY', description: 'A quiet path is waiting on the other side.', par: 1,
    rows: 5, cols: 5, source: { row: 4, col: 4, dir: 'up' }, target: { row: 4, col: 0 },
    mirrors: [
      { row: 0, col: 2, dir: '\\' }, { row: 1, col: 2, dir: '/' }, { row: 2, col: 0, dir: '/', solution: '/' },
      { row: 2, col: 4, dir: '/', solution: '\\' }, { row: 3, col: 1, dir: '\\' }, { row: 4, col: 2, dir: '/' }
    ]
  },
  {
    name: 'A little detour', tag: 'THINK AHEAD', description: 'Take a corner, then follow the glow.', par: 1,
    rows: 6, cols: 6, source: { row: 0, col: 0, dir: 'right' }, target: { row: 1, col: 0 },
    mirrors: [
      { row: 0, col: 3, dir: '/', solution: '\\' }, { row: 2, col: 1, dir: '/' }, { row: 2, col: 5, dir: '\\' },
      { row: 4, col: 0, dir: '\\' }, { row: 4, col: 3, dir: '/', solution: '/' }, { row: 5, col: 4, dir: '/' }
    ]
  },
  {
    name: 'Crystal clear', tag: 'FINAL GLOW', description: 'One last turn, and the crystal is yours.', par: 1,
    rows: 5, cols: 5, source: { row: 4, col: 4, dir: 'up' }, target: { row: 4, col: 1 },
    mirrors: [
      { row: 0, col: 1, dir: '/' }, { row: 1, col: 3, dir: '\\' }, { row: 2, col: 1, dir: '/' },
      { row: 2, col: 4, dir: '/', solution: '\\' }, { row: 3, col: 2, dir: '\\' }
    ]
  }
];

const DIRECTIONS = {
  up: { row: -1, col: 0 }, down: { row: 1, col: 0 }, left: { row: 0, col: -1 }, right: { row: 0, col: 1 }
};
const SLASH_TURNS = { right: 'up', up: 'right', left: 'down', down: 'left' };
const BACKSLASH_TURNS = { right: 'down', down: 'right', left: 'up', up: 'left' };
const STORAGE_KEY = 'prism-path-progress-v1';

const board = document.querySelector('#board');
const beamLayer = document.querySelector('#beamLayer');
const beamLine = document.querySelector('#beamLine');
const beamGlowLine = document.querySelector('#beamGlowLine');
const levelList = document.querySelector('#levelList');
const statusChip = document.querySelector('#statusChip');
const statusText = document.querySelector('#statusText');
const hintMessage = document.querySelector('#hintMessage');
const toast = document.querySelector('#toast');
let progress = readProgress();
let activeLevel = Math.min(progress.activeLevel || 0, LEVELS.length - 1);
let currentMirrors = [];
let history = [];
let moveCount = 0;
let toastTimer;
let audioContext;

function readProgress() {
  try {
    const value = JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}');
    return { solved: Array.isArray(value.solved) ? value.solved : [], activeLevel: Number(value.activeLevel) || 0 };
  } catch { return { solved: [], activeLevel: 0 }; }
}

function saveProgress() {
  progress.activeLevel = activeLevel;
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(progress)); } catch { /* play still works when storage is unavailable */ }
  renderJourney();
}

function level() { return LEVELS[activeLevel]; }
function mirrorAt(row, col) { return currentMirrors.find(mirror => mirror.row === row && mirror.col === col); }

function loadLevel(index) {
  activeLevel = index;
  const puzzle = level();
  currentMirrors = puzzle.mirrors.map(mirror => ({ ...mirror }));
  moveCount = 0;
  history = [];
  hintMessage.textContent = '';
  document.querySelector('#levelNumber').textContent = `LEVEL ${String(index + 1).padStart(2, '0')}`;
  document.querySelector('#levelTag').textContent = puzzle.tag;
  document.querySelector('#levelName').textContent = puzzle.name;
  document.querySelector('#levelDescription').textContent = puzzle.description;
  document.querySelector('#moveCount').textContent = '0';
  board.style.gridTemplateColumns = `repeat(${puzzle.cols}, 1fr)`;
  board.style.gridTemplateRows = `repeat(${puzzle.rows}, 1fr)`;
  board.setAttribute('aria-label', `${puzzle.name}, ${puzzle.rows} by ${puzzle.cols} puzzle board`);
  renderBoard();
  renderJourney();
  tracePath(false);
  updateControls();
  saveProgress();
}

function renderBoard() {
  const puzzle = level();
  const items = [];
  for (let row = 0; row < puzzle.rows; row++) {
    for (let col = 0; col < puzzle.cols; col++) {
      const mirror = mirrorAt(row, col);
      const isSource = puzzle.source.row === row && puzzle.source.col === col;
      const isTarget = puzzle.target.row === row && puzzle.target.col === col;
      const cell = document.createElement('button');
      cell.type = 'button';
      cell.className = `cell ${mirror ? 'mirror-cell' : isSource ? 'source-cell' : isTarget ? 'target-cell' : 'empty'}`;
      cell.dataset.row = row;
      cell.dataset.col = col;
      if (mirror) {
        cell.setAttribute('aria-label', `Mirror, row ${row + 1}, column ${col + 1}, ${mirror.dir === '/' ? 'slash' : 'backslash'}; tap to turn`);
        cell.innerHTML = `<span class="mirror-surface" aria-hidden="true"></span><svg class="mirror-stroke" viewBox="0 0 100 100" aria-hidden="true"><line x1="${mirror.dir === '/' ? 19 : 81}" y1="${mirror.dir === '/' ? 81 : 19}" x2="${mirror.dir === '/' ? 81 : 19}" y2="${mirror.dir === '/' ? 19 : 81}" /></svg>`;
      } else if (isSource) {
        cell.disabled = true;
        cell.tabIndex = -1;
        cell.setAttribute('aria-label', `Light source, pointing ${puzzle.source.dir}`);
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
      items.push(cell);
    }
  }
  board.replaceChildren(...items);
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
  document.querySelector('#moveCount').textContent = String(moveCount);
  hintMessage.textContent = '';
  renderBoard();
  tracePath(false);
  updateControls();
  playTone(520, .045);
}

function tracePath(animate = true) {
  const puzzle = level();
  let row = puzzle.source.row;
  let col = puzzle.source.col;
  let dir = puzzle.source.dir;
  const points = [{ row, col }];
  const visited = new Set();
  let solved = false;
  let looped = false;
  let steps = 0;

  while (steps++ < puzzle.rows * puzzle.cols * 4 + 8) {
    const state = `${row},${col},${dir}`;
    if (visited.has(state)) { looped = true; break; }
    visited.add(state);
    const delta = DIRECTIONS[dir];
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
    if (mirror) dir = (mirror.dir === '/' ? SLASH_TURNS : BACKSLASH_TURNS)[dir];
  }

  const coordinates = points.map(point => `${point.col + .5},${point.row + .5}`).join(' ');
  const viewWidth = puzzle.cols;
  const viewHeight = puzzle.rows;
  beamLayer.setAttribute('viewBox', `0 0 ${viewWidth} ${viewHeight}`);
  beamLine.setAttribute('points', coordinates);
  beamGlowLine.setAttribute('points', coordinates);
  beamLayer.classList.remove('trace');
  if (animate) {
    void beamLayer.getBoundingClientRect();
    beamLayer.classList.add('trace');
  }
  board.querySelector('.target-cell')?.classList.toggle('lit', solved);
  statusChip.classList.toggle('is-lit', solved);
  statusText.textContent = solved ? 'Crystal reached!' : looped ? 'The beam loops back' : 'Beam needs a path';
  if (solved) handleSolved();
  return { solved, looped };
}

function handleSolved() {
  const firstSolve = !progress.solved.includes(activeLevel);
  if (firstSolve) progress.solved.push(activeLevel);
  saveProgress();
  document.querySelector('.game-card').classList.add('celebration');
  setTimeout(() => document.querySelector('.game-card')?.classList.remove('celebration'), 550);
  if (firstSolve) {
    playTone(790, .11);
    showToast(activeLevel === LEVELS.length - 1 ? 'Every crystal is glowing. Beautifully done!' : 'Crystal glowing! A new puzzle is ready.');
  }
}

function updateControls() {
  document.querySelector('#undoBtn').disabled = history.length === 0;
}

function undo() {
  const last = history.pop();
  if (!last) return;
  const mirror = mirrorAt(last.row, last.col);
  mirror.dir = last.dir;
  moveCount = last.moveCount;
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
  renderBoard();
  tracePath(false);
  updateControls();
}

function hint() {
  const mismatch = currentMirrors.find(mirror => mirror.solution && mirror.dir !== mirror.solution);
  if (!mismatch) {
    hintMessage.textContent = 'Everything is lined up. Follow the beam to the crystal.';
    return;
  }
  const index = mismatch.row * level().cols + mismatch.col;
  const cell = board.children[index];
  cell.classList.add('hint-highlight');
  setTimeout(() => cell?.classList.remove('hint-highlight'), 1550);
  hintMessage.textContent = `Try turning the glowing mirror to ${mismatch.solution === '/' ? 'a slash /' : 'a backslash \\'}.`;
}

function renderJourney() {
  document.querySelector('#solvedCount').textContent = String(progress.solved.length);
  document.querySelector('#progressLabel').textContent = `${progress.solved.length} of ${LEVELS.length} complete`;
  document.querySelector('#progressBar').style.width = `${progress.solved.length / LEVELS.length * 100}%`;
  levelList.replaceChildren(...LEVELS.map((puzzle, index) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = `level-button${index === activeLevel ? ' active' : ''}`;
    button.setAttribute('aria-current', index === activeLevel ? 'step' : 'false');
    button.innerHTML = `<span class="level-number">${String(index + 1).padStart(2, '0')}</span><span class="level-title">${puzzle.name}</span>${progress.solved.includes(index) ? '<span class="level-check" aria-label="complete">✓</span>' : ''}`;
    button.addEventListener('click', () => loadLevel(index));
    return button;
  }));
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
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
  } catch { /* audio is optional */ }
}

document.querySelector('#traceBtn').addEventListener('click', () => {
  tracePath(true);
  playTone(660, .07);
});
document.querySelector('#undoBtn').addEventListener('click', undo);
document.querySelector('#restartBtn').addEventListener('click', restart);
document.querySelector('#hintBtn').addEventListener('click', hint);
document.querySelector('#soundBtn').addEventListener('click', event => {
  const enabled = event.currentTarget.getAttribute('aria-pressed') !== 'true';
  event.currentTarget.setAttribute('aria-pressed', String(enabled));
  event.currentTarget.setAttribute('aria-label', enabled ? 'Turn sound off' : 'Turn sound on');
  document.querySelector('#soundLabel').textContent = enabled ? 'Sound on' : 'Sound off';
  if (enabled) playTone(680, .08);
});

loadLevel(activeLevel);
