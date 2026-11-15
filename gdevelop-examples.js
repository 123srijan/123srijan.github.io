(() => {
  const grid = document.querySelector('#exampleGrid');
  const search = document.querySelector('#exampleSearch');
  const count = document.querySelector('#exampleCount');
  const empty = document.querySelector('#emptyState');
  let examples = [];

  function render() {
    const query = search.value.trim().toLowerCase();
    const shown = examples.filter(example => `${example.name} ${example.categories.join(' ')}`.toLowerCase().includes(query));
    grid.replaceChildren();
    for (const example of shown) {
      const card = document.createElement('article');
      card.className = 'example-card';
      const image = document.createElement('img');
      image.className = 'example-image';
      image.src = example.image || '';
      image.alt = '';
      image.loading = 'lazy';
      image.addEventListener('error', () => {
        const fallback = document.createElement('div');
        fallback.className = 'image-fallback';
        fallback.textContent = '✳';
        image.replaceWith(fallback);
      }, { once: true });

      const copy = document.createElement('div');
      copy.className = 'example-copy';
      const badge = document.createElement('span');
      badge.className = 'example-kind';
      badge.textContent = 'GDevelop example';
      const title = document.createElement('h2');
      title.className = 'example-title';
      title.textContent = example.name;
      const credit = document.createElement('p');
      credit.className = 'credit-line';
      credit.textContent = 'Open the official project page for its original creator and license.';
      const link = document.createElement('a');
      link.className = 'source-link';
      link.href = example.url;
      link.target = '_blank';
      link.rel = 'noopener noreferrer';
      link.textContent = 'Creator & license details ↗';
      copy.append(badge, title, credit, link);
      card.append(image, copy);
      grid.append(card);
    }
    count.textContent = `${shown.length} of ${examples.length} examples`;
    empty.hidden = shown.length !== 0;
  }

  fetch('gdevelop-examples.json')
    .then(response => {
      if (!response.ok) throw new Error('The example list could not be loaded.');
      return response.json();
    })
    .then(data => {
      examples = data;
      render();
    })
    .catch(() => {
      count.textContent = 'Examples could not be loaded';
      empty.textContent = 'Please refresh this page to load the collection.';
      empty.hidden = false;
    });
  search.addEventListener('input', render);
})();
