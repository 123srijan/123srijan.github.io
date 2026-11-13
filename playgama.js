(() => {
  const grid = document.querySelector('#partnerGameGrid');
  const count = document.querySelector('#partnerResultCount');
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
    const card = document.createElement('a');
    card.className = 'game-card partner-game-card';
    card.href = href;
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
    const category = document.createElement('span');
    category.className = 'game-category';
    category.textContent = (game.genres || []).slice(0, 2).join(' · ').toUpperCase() || 'ARCADE';
    const title = document.createElement('span');
    title.className = 'game-card-title';
    title.textContent = game.title;
    const description = document.createElement('span');
    description.className = 'game-card-meta';
    description.textContent = game.description || 'Play this partner game in the arcade player.';
    const play = document.createElement('span');
    play.className = 'play-link';
    play.textContent = 'Play here  ↗';
    copy.append(category, title, description, play);
    card.append(art, copy);
    return card;
  }

  fetch('playgama-games.json')
    .then(response => {
      if (!response.ok) throw new Error(`Catalog request failed (${response.status})`);
      return response.json();
    })
    .then(games => {
      const fragment = document.createDocumentFragment();
      let total = 0;
      for (const game of games) {
        const card = makeCard(game);
        if (!card) continue;
        fragment.append(card);
        total++;
      }
      if (!total) throw new Error('No playable entries were found in the catalog.');
      grid.replaceChildren(fragment);
      count.textContent = `${total} partner games`;
      document.dispatchEvent(new CustomEvent('arcade:catalog-updated'));
    })
    .catch(error => {
      console.error('Playgama catalog could not load:', error);
      status.textContent = 'Partner games could not load right now. Your Srijan’s Arcade games are still available above.';
      status.hidden = false;
    });
})();
