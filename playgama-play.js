(() => {
  const gameId = new URLSearchParams(location.search).get('id');
  const title = document.querySelector('#gameTitle');
  const message = document.querySelector('#playMessage');
  const wrap = document.querySelector('#gameWrap');
  const frame = document.querySelector('#gameFrame');
  const openLink = document.querySelector('#openPartnerGame');
  let loadTimer;
  const allowedGameHosts = new Set([
    'playgama.com', 'deadlydescent.net', 'mrracer.online',
    'blockblastmaster.io', 'snake-2048.com', 'stickmankombat.io'
  ]);

  function fail(text) {
    clearTimeout(loadTimer);
    frame.src = 'about:blank';
    wrap.hidden = true;
    message.hidden = false;
    title.textContent = 'Game unavailable';
    message.textContent = text;
    if (openLink && openLink.dataset.ready === 'true') openLink.hidden = false;
  }

  if (!gameId) {
    fail('This game link is incomplete. Return to the arcade and choose a game.');
    return;
  }

  fetch('playgama-games.json')
    .then(response => {
      if (!response.ok) throw new Error('The game list could not be loaded.');
      return response.json();
    })
    .then(games => {
      const game = games.find(item => String(item.id) === gameId);
      if (!game) throw new Error('This game is not in the current catalog.');
      const gameUrl = new URL(game.gameURL);
      if (gameUrl.protocol !== 'https:' || !allowedGameHosts.has(gameUrl.hostname)) throw new Error('This game URL is not approved for embedding.');
      if (openLink) { openLink.href = gameUrl.href; openLink.dataset.ready = 'true'; }
      title.textContent = game.title;
      frame.title = `${game.title} game`;
      wrap.hidden = false;
      message.hidden = true;
      frame.src = gameUrl.href;
      loadTimer = setTimeout(() => fail('The partner game did not finish loading. You can open it directly with the partner.'), 18000);
      document.title = `${game.title} — GameBox Arcade`;
    })
    .catch(error => {
      console.error('Partner game could not load:', error);
      fail('This game could not be loaded. Return to the arcade and try another.');
    });

  frame.addEventListener('load', () => {
    try {
      const landed = new URL(frame.contentWindow.location.href);
      if (landed.origin === location.origin && landed.pathname !== '/playgama-play.html') {
        fail('The partner sent this game back to the arcade homepage instead of loading it. Open it directly with the partner.');
      } else if (landed.origin !== location.origin) clearTimeout(loadTimer);
    } catch {
      // The partner game loaded cross-origin, where browser security blocks inspection.
      clearTimeout(loadTimer);
    }
  });
  frame.addEventListener('error', () => fail('The partner game failed to load. Try opening it directly with the partner.'));
})();
