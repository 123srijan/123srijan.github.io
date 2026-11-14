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
    { id:'territory-trail', title:'Territory Trail', emoji:'🗺️', a:'#258b86', b:'#59bd74', categories:['action','puzzle'] }
  ];
  const routes = Object.fromEntries(owned.map(game => [game.id, `${game.id === 'tower-builder' ? 'stack-panic/' : game.id === 'fruit-swipe' || game.id === 'tic-tac-toe' || game.id === 'territory-trail' ? `play.html?game=${game.id}` : `${game.id}/`}`]));
  const params = new URLSearchParams(location.search);
  const gameId = params.get('game');
  const partnerId = params.get('partner');
  const current = owned.find(game => game.id === gameId);
  const title = document.querySelector('#playerTitle');
  const frame = document.querySelector('#gameFrame');
  const error = document.querySelector('#loadError');
  const open = document.querySelector('#openGame');
  let partnerGames = [];

  function safeInternal(path) {
    const url = new URL(path, location.href);
    return url.origin === location.origin ? url.href : null;
  }
  function makeRecommendation(game, kind='owned') {
    const card = document.createElement('a');
    card.className = 'recommendation-card';
    const destination = kind === 'partner'
      ? `arcade-player.html?partner=${encodeURIComponent(game.id)}`
      : `arcade-player.html?game=${encodeURIComponent(game.id)}`;
    card.href = safeInternal(destination) || 'index.html#games';
    const art = document.createElement('span');
    art.className = 'recommendation-art';
    const name = document.createElement('span');
    name.className = 'recommendation-title';
    name.textContent = game.title;
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
    const shelves = ['#topRecommendations','#leftRecommendations','#rightRecommendations','#bottomRecommendations'].map(selector => document.querySelector(selector));
    shelves.forEach((shelf, index) => {
      if (!shelf) return;
      const candidates = [...owned.filter(game => game.id !== gameId), ...partnerGames.filter(game => String(game.id) !== String(partnerId))];
      const offset = [0, 4, 8, 12][index];
      const amount = [6, 4, 4, 8][index];
      candidates.slice(offset, offset + amount).forEach(game => shelf.append(makeRecommendation(game, game.emoji ? 'owned' : 'partner')));
    });
  }
  function chooseGame() {
    if (current) {
      title.textContent = current.title;
      const path = safeInternal(routes[current.id]);
      if (path) { frame.src = path; open.href = path; return; }
    }
    if (partnerId) {
      fetch('playgama-games.json').then(response => {
        if (!response.ok) throw new Error('Catalog unavailable');
        return response.json();
      }).then(games => {
        const selected = games.find(item => String(item.id) === partnerId);
        if (!selected) throw new Error('Game not found');
        title.textContent = selected.title;
        const path = safeInternal(`playgama-play.html?id=${encodeURIComponent(selected.id)}`);
        if (!path) throw new Error('Invalid game path');
        frame.src = path;
        open.href = path;
      }).catch(() => { error.hidden = false; title.textContent = 'Game unavailable'; });
      return;
    }
    error.hidden = false;
    title.textContent = 'Choose a game';
  }
  frame.addEventListener('error', () => { error.hidden = false; });
  renderRecommendations();
  chooseGame();
  fetch('playgama-games.json').then(response => response.ok ? response.json() : []).then(games => {
    const allowedHosts = new Set(['playgama.com','deadlydescent.net','mrracer.online','blockblastmaster.io','snake-2048.com','stickmankombat.io']);
    partnerGames = games.filter(game => {
      try { const url = new URL(game.gameURL); return url.protocol === 'https:' && allowedHosts.has(url.hostname) && game.title; } catch { return false; }
    }).slice(0, 30);
    ['#topRecommendations','#leftRecommendations','#rightRecommendations','#bottomRecommendations'].forEach(selector => document.querySelector(selector).replaceChildren());
    renderRecommendations();
  }).catch(() => {});
})();
