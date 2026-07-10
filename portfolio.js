const filterToggle = document.querySelector('.filter-toggle');
const filterPanel = document.querySelector('#collection-filters');

if (filterToggle && filterPanel) {
  filterToggle.addEventListener('click', () => {
    const isOpen = filterToggle.getAttribute('aria-expanded') === 'true';
    filterToggle.setAttribute('aria-expanded', String(!isOpen));
    filterPanel.hidden = isOpen;
    const symbol = filterToggle.querySelector('span');
    if (symbol) symbol.textContent = isOpen ? '+' : '−';
  });
}

const buttons = document.querySelectorAll('.filter-button');
const items = document.querySelectorAll('.portfolio-item');
const groups = document.querySelectorAll('.year-group');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;

    items.forEach(item => {
      const show = filter === 'all' || item.dataset.collection === filter;
      item.hidden = !show;
    });

    groups.forEach(group => {
      const visible = [...group.querySelectorAll('.portfolio-item')].some(item => !item.hidden);
      group.hidden = !visible;
    });
  });
});
