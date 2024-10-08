function switchLanguage(language) {
    // Get both containers
    var engContainer = document.getElementById("eng-container");
    var japContainer = document.getElementById("jap-container");

    // Show the selected language container
    if (language === 'eng') {
        engContainer.style.display = 'block';
        japContainer.style.display = 'none';
    } else if (language === 'jap') {
        japContainer.style.display = 'block';
        engContainer.style.display = 'none';
    }
}

// Default language to English when the page loads
window.onload = function() {
    switchLanguage('eng');
};