(() => {
    function blink(element) {
        window.setInterval(() => {
            if (element.style.display != 'none') {
                element.style.display = 'none';
            }
            else {
                element.style.display = 'initial';
            }
        }, 500);
    }

    function init() {
        const blinkers = document.querySelectorAll('.blink');
    
        if (blinkers) {
            blinkers.forEach(blink);
        }
    }

    init();
})();