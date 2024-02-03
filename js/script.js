function toggleLanguage(button) {
    const buttons = document.querySelectorAll('.ru_en_button');
    buttons.forEach(function(btn) {
        btn.classList.remove('select');
    });
    button.classList.add('select');
}