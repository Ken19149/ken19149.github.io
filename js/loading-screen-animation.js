// JavaScript to remove the loading screen when the page is fully loaded
window.addEventListener('load', function () {
    const loadingScreen = document.querySelector('.loading-screen');
    const content = document.querySelector('.content');

    loadingScreen.style.display = 'none'; // Hide the loading screen
    content.style.display = 'block'; // Show the content
});
