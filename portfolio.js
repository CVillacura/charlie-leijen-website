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
