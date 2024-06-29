document.addEventListener('DOMContentLoaded', function() {
    const triggerBtn = document.querySelector('.theme-toggle-btn');
    if (triggerBtn) {
        triggerBtn.addEventListener('click', function toggleDarkMode() {
            var element = document.body;
            element.classList.toggle("dark-mode");
            var element3 = document.querySelector('.sideelement1');
            element3.classList.toggle("dark-mode");
            var element4 = document.querySelector('.sideelement2');
            element4.classList.toggle("dark-mode");
            var element2 = document.querySelector('.root');
            if (element2) {
                element2.classList.toggle("dark-mode");
            } else {
                console.error('The .root element was not found.');
            }
        });
    } else {
        console.error('The toggle button was not found.');
    }
});