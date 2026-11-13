(() => {
  const search = document.querySelector('#gameSearch');
  const clear = document.querySelector('#clearSearch');
  let cards = [...document.querySelectorAll('.game-card')];
  const filters = [...document.querySelectorAll('[data-filter]')];
  const count = document.querySelector('#resultCount');
  const empty = document.querySelector('#emptyState');
  let active = 'all';
  const allCount = document.querySelector('[data-filter=all] span');
  function collectCards() {
    cards = [...document.querySelectorAll('.game-card')];
    for (const card of cards) {
      const title = card.dataset.title || card.querySelector('.game-card-title')?.textContent.trim() || card.dataset.name.split(/\s+/).slice(0, 5).join(' ');
      card.setAttribute('aria-label', `Play ${title}`);
      const copy = card.querySelector('.game-card-copy');
      const play = copy?.querySelector('.play-link');
      if (copy && play) {
        play.textContent = 'PLAY';
        copy.replaceChildren(play);
      }
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
      const show = matchesText && matchesCategory;
      card.hidden = !show;
      if (show) visible++;
    }
    count.textContent = `${visible} ${visible === 1 ? 'game' : 'games'}`;
    empty.hidden = visible !== 0;
    clear.hidden = query.length === 0;
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
  clear.addEventListener('click', () => { search.value = ''; search.focus(); update(); });
  document.addEventListener('arcade:catalog-updated', collectCards);
  collectCards();
})();
