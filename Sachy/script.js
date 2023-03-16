// Remove .html extension from URL if present
if (window.location.href.indexOf(".html") > -1) {
    var newUrl = window.location.href.replace(".html", "");
    window.history.replaceState(null, null, newUrl);
  }
