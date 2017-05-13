document.addEventListener('keyup', function (event) {
    var key = event.key,
        scrollPos = window.innerHeight;
    if (key === "ArrowDown" || event.keyCode === 40) {
        event.preventDefault();
        window.scrollBy(0, scrollPos);
    }
    if (key === "ArrowUp" || event.keyCode === 38) {
        event.preventDefault();
        window.scrollBy(0, -scrollPos);
    }
});