(() => {
  const owned = [
    { id:'star-patrol', title:'Star Patrol', emoji:'🚀', a:'#3149ba', b:'#ed5fbd', categories:['action','arcade'] },
    { id:'prism-path', title:'Prism Path', emoji:'💎', a:'#35a7d0', b:'#8856df', categories:['puzzle'] },
    { id:'tower-builder', title:'Tower Builder', emoji:'🏗️', a:'#cf7a43', b:'#d9ba50', categories:['arcade','puzzle'] },
    { id:'block-workshop', title:'Block Workshop', emoji:'🧩', a:'#7352cd', b:'#d15da3', categories:['puzzle','arcade'] },
    { id:'snake-run', title:'Snake Run', emoji:'🐍', a:'#26864a', b:'#a6c94e', categories:['arcade'] },
    { id:'bubble-burst', title:'Bubble Burst', emoji:'🫧', a:'#3695d2', b:'#b264db', categories:['puzzle','arcade'] },
    { id:'fruit-swipe', title:'Fruit Swipe', emoji:'🍉', a:'#e55155', b:'#f2a346', categories:['action','arcade'] },
    { id:'tic-tac-toe', title:'Tic Tac Trio', emoji:'⭕', a:'#3975ca', b:'#7c5bd2', categories:['puzzle'] },
    { id:'territory-trail', title:'Territory Trail', emoji:'🗺️', a:'#258b86', b:'#59bd74', categories:['action','puzzle'] },
    { id:'firefly-frenzy', title:'Firefly Frenzy', emoji:'✨', a:'#203d68', b:'#53a890', categories:['action','arcade'] }
  ];
  const routes = Object.fromEntries(owned.map(game => [game.id, `${game.id === 'tower-builder' ? 'stack-panic/' : game.id === 'fruit-swipe' || game.id === 'tic-tac-toe' || game.id === 'territory-trail' ? `play.html?game=${game.id}` : `${game.id}/`}`]));
  const params = new URLSearchParams(location.search);
  const gameId = params.get('game');
  const partnerId = params.get('partner');
  const miniId = params.get('mini');
  const miniGames = (window.GameBoxMiniGames || []).map(game => ({ id: game.id, title: game.title, emoji: game.emoji, a: game.color, b: '#20274e', categories: [game.category || 'arcade'], mini: true }));
  const current = owned.find(game => game.id === gameId) || miniGames.find(game => game.id === (params.get('mini') || ''));
  const title = document.querySelector('#playerTitle');
  const frame = document.querySelector('#gameFrame');
  const error = document.querySelector('#loadError');
  const fullscreen = document.querySelector('#fullscreenGame');
  const actionTitle = document.querySelector('#actionGameTitle');
  const gameBadge = document.querySelector('#gameBadge');
  const actionButtons = [...document.querySelectorAll('[data-reaction]')];
  const preferenceKey = 'gamebox-library-v1';
  let partnerGames = [];

  function safeInternal(path) {
    const url = new URL(path, location.href);
    return url.origin === location.origin ? url.href : null;
  }
  function makeRecommendation(game, kind='owned') {
    const card = document.createElement('a');
    card.className = 'recommendation-card';
    card.setAttribute('aria-label', `Play ${game.title}`);
    const destination = game.mini
      ? `arcade-player.html?mini=${encodeURIComponent(game.id)}`
      : kind === 'partner'
      ? `arcade-player.html?partner=${encodeURIComponent(game.id)}`
      : `arcade-player.html?game=${encodeURIComponent(game.id)}`;
    card.href = safeInternal(destination) || 'index.html#games';
    const art = document.createElement('span');
    art.className = 'recommendation-art';
    const name = document.createElement('span');
    name.className = 'recommendation-title';
    const play = document.createElement('span');
    play.className = 'recommendation-play';
    play.textContent = 'PLAY';
    name.append(play);
    if (kind === 'partner' && game.image) {
      const image = document.createElement('img');
      image.src = game.image;
      image.alt = '';
      image.loading = 'lazy';
      image.referrerPolicy = 'no-referrer';
      image.className = 'partner-thumb';
      art.append(image);
    } else {
      art.textContent = game.emoji || '🎮';
      art.style.setProperty('--art-a', game.a || '#4c57b9');
      art.style.setProperty('--art-b', game.b || '#c45b9a');
    }
    card.append(art, name);
    return card;
  }
  function renderRecommendations() {
    const shelves = ['#leftRecommendations','#rightRecommendations','#bottomRecommendations'].map(selector => document.querySelector(selector));
    shelves.forEach((shelf, index) => {
      if (!shelf) return;
      const candidates = [...owned.filter(game => game.id !== gameId), ...partnerGames.filter(game => String(game.id) !== String(partnerId)), ...miniGames.filter(game => game.id !== miniId)];
      const offset = [0, 5, 10][index];
      const amount = [5, 5, 18][index];
      candidates.slice(offset, offset + amount).forEach(game => shelf.append(makeRecommendation(game, game.emoji ? 'owned' : 'partner')));
    });
  }
  function simplifyOwnedGame() {
    try {
      const doc = frame.contentDocument;
      if (!doc || doc.getElementById('gamebox-compact-embed')) return;
      const style = doc.createElement('style');
      style.id = 'gamebox-compact-embed';
      style.textContent = '.arcade-top,.game-intro,.info-panel,.page-footer,.action-note,.campaign-badge{display:none!important}.arcade-shell{width:100%!important;max-width:none!important;margin:0!important;padding:8px!important}.game-layout{display:block!important}.game-card-panel{width:100%!important;margin:0!important;border-radius:12px!important}';
      if (miniId) style.textContent += 'html,body{height:100%!important;min-height:0!important;overflow:hidden!important}.wrap{height:100dvh!important;max-width:none!important;margin:0!important;padding:0!important;display:block!important}.top,.instructions,.mini-ad-slot{display:none!important}.card{height:100%!important;display:grid!important;grid-template-rows:auto minmax(0,1fr)!important;border:0!important;border-radius:0!important}.head{padding:8px 12px!important}.head p{font-size:11px!important;margin:2px 0 0!important}.board{height:auto!important;min-height:0!important}.dialog{padding:18px!important}';
      doc.head.append(style);
    } catch { /* Partner games may be hosted on another site. */ }
  }
  function chooseGame() {
    if (current) {
      title.textContent = current.title;
      actionTitle.textContent = current.title;
      gameBadge.textContent = current.emoji;
      const path = safeInternal(current.mini ? `mini-game.html?game=${encodeURIComponent(current.id)}` : routes[current.id]);
      if (path) { frame.src = path; return; }
    }
    if (partnerId) {
      fetch('playgama-games.json').then(response => {
        if (!response.ok) throw new Error('Catalog unavailable');
        return response.json();
      }).then(games => {
        const selected = games.find(item => String(item.id) === partnerId);
        if (!selected) throw new Error('Game not found');
        title.textContent = selected.title;
        actionTitle.textContent = selected.title;
        gameBadge.textContent = '🎮';
        const path = safeInternal(`playgama-play.html?id=${encodeURIComponent(selected.id)}`);
        if (!path) throw new Error('Invalid game path');
        frame.src = path;
      }).catch(() => { error.hidden = false; title.textContent = 'Game unavailable'; });
      return;
    }
    error.hidden = false;
    title.textContent = 'Choose a game';
  }
  frame.addEventListener('error', () => { error.hidden = false; });
  frame.addEventListener('load', simplifyOwnedGame);
  renderRecommendations();
  chooseGame();
  function getPreferenceKey() {
    if (gameId) return `arcade-player.html?game=${encodeURIComponent(gameId)}`;
    if (miniId) return `arcade-player.html?mini=${encodeURIComponent(miniId)}`;
    if (partnerId) return `arcade-player.html?partner=${encodeURIComponent(partnerId)}`;
    return '';
  }
  function readPreferences() {
    try { return JSON.parse(localStorage.getItem(preferenceKey) || '{}') || {}; } catch { return {}; }
  }
  function updateActionButtons() {
    const saved = readPreferences()[getPreferenceKey()] || {};
    actionButtons.forEach(button => {
      const kind = button.dataset.reaction;
      const active = kind === 'favorite' ? Boolean(saved.favorite) : saved.reaction === kind;
      button.setAttribute('aria-pressed', String(active));
      if (kind === 'favorite') button.firstChild.textContent = active ? '★ ' : '☆ ';
    });
  }
  actionButtons.forEach(button => button.addEventListener('click', () => {
    const key = getPreferenceKey();
    if (!key) return;
    const preferences = readPreferences();
    const saved = preferences[key] || {};
    const kind = button.dataset.reaction;
    if (kind === 'favorite') saved.favorite = !saved.favorite;
    else saved.reaction = saved.reaction === kind ? '' : kind;
    preferences[key] = saved;
    try { localStorage.setItem(preferenceKey, JSON.stringify(preferences)); } catch {}
    updateActionButtons();
  }));
  updateActionButtons();
  fetch('playgama-games.json').then(response => response.ok ? response.json() : []).then(games => {
    const allowedHosts = new Set(['playgama.com','deadlydescent.net','mrracer.online','blockblastmaster.io','snake-2048.com','stickmankombat.io']);
    partnerGames = games.filter(game => {
      try { const url = new URL(game.gameURL); return url.protocol === 'https:' && allowedHosts.has(url.hostname) && game.title; } catch { return false; }
    }).sort((a, b) => {
      const featured = title => /arrow|bus parking|park tycoon|perfect makeover|pick me up|war survival z|tele.?explorer/i.test(title) ? 1 : 0;
      return featured(b.title) - featured(a.title);
    }).slice(0, 60);
    ['#leftRecommendations','#rightRecommendations','#bottomRecommendations'].forEach(selector => document.querySelector(selector).replaceChildren());
    renderRecommendations();
  }).catch(() => {});
  fullscreen?.addEventListener('click', () => {
    if (frame.requestFullscreen) frame.requestFullscreen();
  });
})();
