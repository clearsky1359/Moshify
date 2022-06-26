const collapsible = document.querySelectorAll('.collapsible');

collapsible.forEach((item) =>
  item.addEventListener('click', () => {
    this.classList.toggle('collapsible--expanded');
    console.log('clicked');
  })
);
