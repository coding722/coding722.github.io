const menuContainer = document.querySelector('.menu-container');

menuContainer.addEventListener('click', () => {
	menuContainer.classList.toggle('open');
});
if (window.location.href.indexOf(".html") > -1) {
    var newUrl = window.location.href.replace(".html", "");
    window.history.replaceState(null, null, newUrl);
  }