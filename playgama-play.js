(() => {
  const gameId = new URLSearchParams(location.search).get('id');
  const title = document.querySelector('#gameTitle');
  const message = document.querySelector('#playMessage');
  const wrap = document.querySelector('#gameWrap');
  const frame = document.querySelector('#gameFrame');
  const allowedGameHosts = new Set([
    'playgama.com', 'deadlydescent.net', 'mrracer.online',
    'blockblastmaster.io', 'snake-2048.com', 'stickmankombat.io'
  ]);

  function fail(text) {
    title.textContent = 'Game unavailable';
    message.textContent = text;
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
      title.textContent = game.title;
      frame.title = `${game.title} game`;
      frame.src = gameUrl.href;
      wrap.hidden = false;
      message.hidden = true;
      document.title = `${game.title} — Srijan’s Arcade`;
    })
    .catch(error => {
      console.error('Partner game could not load:', error);
      fail('This game could not be loaded. Return to the arcade and try another.');
    });
})();
