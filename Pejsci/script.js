const links = document.querySelectorAll('.items a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', function(event) {
    event.preventDefault();
    const link = this.getAttribute('href');
    const items = document.querySelectorAll('.items .item');
    for (let j = 0; j < items.length; j++) {
      items[j].classList.remove('highlight');
    }
    this.parentElement.classList.add('highlight');
    document.body.classList.add('fade-out');
    setTimeout(function() {
      window.location.href = link;
    }, 800);
  });
}

window.addEventListener('pageshow', function(event) {
  if (event.persisted) {
    document.body.classList.remove('fade-out');
  }
});