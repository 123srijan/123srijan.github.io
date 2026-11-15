(() => {
  const search = document.querySelector('#gameSearch');
  const clear = document.querySelector('#clearSearch');
  let cards = [...document.querySelectorAll('.game-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const collectionFilters = [...document.querySelectorAll('[data-collection]')];
  const count = document.querySelector('#resultCount');
  const empty = document.querySelector('#emptyState');
  let active = 'all';
  let collection = 'all';
  const storageKey = 'gamebox-library-v1';
  let library = {};
  try { library = JSON.parse(localStorage.getItem(storageKey) || '{}') || {}; } catch { library = {}; }
  const allCount = document.querySelector('[data-filter=all] span');
  function mixCatalogCards() {
    const grid = document.querySelector('#gameGrid');
    if (!grid) return;
    const originals = cards.filter(card => !card.classList.contains('partner-game-card'));
    const partners = cards.filter(card => card.classList.contains('partner-game-card'));
    const mixed = [];
    for (let i = 0; i < Math.max(originals.length, partners.length); i++) {
      if (originals[i]) mixed.push(originals[i]);
      if (partners[i]) mixed.push(partners[i]);
    }
    for (const card of mixed) {
      const tile = card.closest('.game-tile');
      if (tile) grid.append(tile);
    }
    cards = mixed;
  }
  function collectCards() {
    cards = [...document.querySelectorAll('.game-card')];
    for (const card of cards) {
      const title = card.dataset.title || card.querySelector('.game-card-title')?.textContent.trim() || card.dataset.name.split(/\s+/).slice(0, 5).join(' ');
      card.setAttribute('aria-label', `Play ${title}`);
      if (!card.dataset.gameId) {
        const cardUrl = new URL(card.getAttribute('href') || '', location.href);
        const cardParams = new URLSearchParams(cardUrl.search);
        card.dataset.gameId = cardParams.has('partner') ? `arcade-player.html?partner=${cardParams.get('partner')}` : cardParams.has('mini') ? `arcade-player.html?mini=${cardParams.get('mini')}` : `arcade-player.html?game=${cardParams.get('game') || title}`;
      }
      const copy = card.querySelector('.game-card-copy');
      const play = copy?.querySelector('.play-link');
      if (copy && play) {
        play.textContent = 'PLAY';
        copy.replaceChildren(play);
      }
      let tile = card.closest('.game-tile');
      if (!tile) {
        tile = document.createElement('article');
        tile.className = 'game-tile';
        card.before(tile);
        tile.append(card);
      }
      if (!tile.querySelector('.game-reactions')) {
        const reactions = document.createElement('div');
        reactions.className = 'game-reactions';
        reactions.setAttribute('aria-label', `${title} preferences`);
        for (const [kind, label, icon] of [['like','Like','👍'],['dislike','Dislike','👎'],['favorite','Add to favorites','☆']]) {
          const button = document.createElement('button');
          button.type = 'button';
          button.className = `reaction-button reaction-${kind}`;
          button.textContent = icon;
          button.setAttribute('aria-label', `${label}: ${title}`);
          button.title = `${label}: ${title}`;
          button.addEventListener('click', () => {
            const item = library[card.dataset.gameId] || {};
            if (kind === 'favorite') item.favorite = !item.favorite;
            else item.reaction = item.reaction === kind ? '' : kind;
            library[card.dataset.gameId] = item;
            try { localStorage.setItem(storageKey, JSON.stringify(library)); } catch {}
            syncTile(card, tile);
            update();
          });
          reactions.append(button);
        }
        tile.append(reactions);
      }
      syncTile(card, tile);
    }
    mixCatalogCards();
    // Two optional display-ad spaces break up the long catalog. They remain
    // hidden for short searches and small personal collections.
    const adPositions = [36, 136];
    document.querySelectorAll('.catalog-ad-tile').forEach(tile => tile.remove());
    for (const position of adPositions) {
      const after = cards[position - 1]?.closest('.game-tile');
      if (!after) continue;
      const tile = document.createElement('aside');
      tile.className = 'catalog-ad-tile';
      tile.setAttribute('aria-label', 'Advertisement');
      tile.innerHTML = '<div class="ad-slot catalog-ad-slot" data-ad-placement="catalog-inline"><span>ADVERTISEMENT</span></div>';
      after.after(tile);
    }
    if (allCount) allCount.textContent = String(cards.length);
    update();
  }
  function update() {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    for (const card of cards) {
      const matchesText = `${card.dataset.name} ${card.dataset.categories}`.toLowerCase().includes(query);
      const matchesCategory = active === 'all' || card.dataset.categories.split(' ').includes(active);
      const saved = library[card.dataset.gameId] || {};
      const reactionFilter = collection === 'liked' ? 'like' : collection === 'disliked' ? 'dislike' : collection;
      const matchesCollection = collection === 'all' || (collection === 'favorites' ? saved.favorite : saved.reaction === reactionFilter);
      const show = matchesText && matchesCategory && matchesCollection;
      card.closest('.game-tile')?.classList.toggle('is-filtered-out', !show);
      if (show) visible++;
    }
    count.textContent = `${visible} ${visible === 1 ? 'game' : 'games'}`;
    document.querySelectorAll('.catalog-ad-tile').forEach(tile => { tile.hidden = visible < 24; });
    empty.hidden = visible !== 0;
    clear.hidden = query.length === 0;
  }
  function syncTile(card, tile) {
    const saved = library[card.dataset.gameId] || {};
    tile.querySelector('.reaction-like')?.setAttribute('aria-pressed', String(saved.reaction === 'like'));
    tile.querySelector('.reaction-dislike')?.setAttribute('aria-pressed', String(saved.reaction === 'dislike'));
    const favorite = tile.querySelector('.reaction-favorite');
    if (favorite) { favorite.setAttribute('aria-pressed', String(Boolean(saved.favorite))); favorite.textContent = saved.favorite ? '★' : '☆'; favorite.setAttribute('aria-label', `${saved.favorite ? 'Remove from' : 'Add to'} favorites: ${card.getAttribute('aria-label')?.replace(/^Play /,'') || 'game'}`); }
  }
  filters.forEach(button => button.addEventListener('click', () => {
    active = button.dataset.filter;
    filters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  search.addEventListener('input', update);
  collectionFilters.forEach(button => button.addEventListener('click', () => {
    collection = button.dataset.collection;
    collectionFilters.forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    update();
  }));
  clear.addEventListener('click', () => { search.value = ''; search.focus(); update(); });
  document.addEventListener('arcade:catalog-updated', collectCards);
  collectCards();
})();
