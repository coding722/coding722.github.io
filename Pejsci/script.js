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

// Get the current URL without the base URL and the query string
const currentPath = window.location.pathname.substring(1);

// Check if the URL ends with .html
if (currentPath.endsWith('.html')) {
  // Replace the .html extension with a trailing slash
  const newPath = currentPath.replace(/\.html$/, '') + '/';

  // Use the History API to change the URL without a page refresh
  window.history.replaceState(null, null, newPath);
}