(() => {
  const grid = document.querySelector('#gameGrid');
  const status = document.querySelector('#partnerStatus');
  if (!grid) return;

  const allowedGameHosts = new Set([
    'playgama.com', 'deadlydescent.net', 'mrracer.online',
    'blockblastmaster.io', 'snake-2048.com', 'stickmankombat.io'
  ]);

  function categoriesFor(game) {
    const genres = (game.genres || []).map(value => String(value).toLowerCase());
    const tags = new Set(['arcade']);
    if (genres.some(value => /action|adventure|shooter|platform|racing|runner|survival|fight/.test(value))) tags.add('action');
    if (genres.some(value => /puzz|logic|brain|merge|match|board|mahjong|chess|card/.test(value))) tags.add('puzzle');
    if (genres.some(value => /sport|football|soccer|cricket|basketball|tennis|golf/.test(value))) tags.add('sports');
    return [...tags].join(' ');
  }

  function gameLink(game) {
    const url = new URL(game.gameURL);
    if (url.protocol !== 'https:' || !allowedGameHosts.has(url.hostname)) return null;
    return `playgama-play.html?id=${encodeURIComponent(game.id)}`;
  }

  function makeCard(game) {
    const href = gameLink(game);
    if (!href || !game.title || !game.image) return null;
    if (/chicken road|skyline runner|ludo|happy glass|cricket/i.test(game.title)) return null;
    const card = document.createElement('a');
    card.className = 'game-card partner-game-card';
    card.href = href;
    card.dataset.title = game.title;
    card.setAttribute('aria-label', `Play ${game.title}`);
    card.dataset.name = `${game.title} ${game.description || ''} ${(game.genres || []).join(' ')}`;
    card.dataset.categories = categoriesFor(game);

    const art = document.createElement('span');
    art.className = 'game-art partner-game-art';
    const image = document.createElement('img');
    image.src = game.image;
    image.alt = '';
    image.loading = 'lazy';
    image.referrerPolicy = 'no-referrer';
    art.append(image);

    const copy = document.createElement('span');
    copy.className = 'game-card-copy';
    const play = document.createElement('span');
    play.className = 'play-link';
    play.textContent = 'PLAY';
    card.append(art, copy);
    copy.append(play);
    return card;
  }

  fetch('playgama-games.json')
    .then(response => {
      if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
      return response.json();
    })
    .then(games => {
      const fragment = document.createDocumentFragment();
      for (const game of games) {
        const card = makeCard(game);
        if (!card) continue;
        fragment.append(card);
      }
      if (!fragment.childElementCount) throw new Error('No playable entries were found in the catalog.');
      grid.append(fragment);
      document.dispatchEvent(new CustomEvent('arcade:catalog-updated'));
    })
    .catch(error => {
      console.error('Playgama catalog could not load:', error);
      status.textContent = 'More games could not load right now. Your original games are still available.';
      status.hidden = false;
    });
})();
