// This script will remove ".html" from the URL
(function() {
    var path = window.location.pathname;

    // Check if the current URL ends with .html
    if (path.endsWith('.html')) {
        // Remove the .html part and redirect
        var newPath = path.slice(0, -5);
        window.location.replace(newPath);
    }
})();