document.addEventListener('keyup', function (event) {
    var key = event.key,
        scrollPos = window.innerHeight;
    if (key === "ArrowDown") {
        event.preventDefault();
        window.scrollBy(0, scrollPos);
    }
    if (key === "ArrowUp") {
        event.preventDefault();
        window.scrollBy(0, -scrollPos);
    }
});