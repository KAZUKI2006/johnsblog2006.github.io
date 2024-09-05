window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.fade-in-on-scroll');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('show');
        }
    });
});

document.querySelectorAll('.category-item').forEach(item => {
    item.addEventListener('click', () => {
        // Add the behavior you want when a category is clicked
        // Example: smooth scroll to another section or display posts under this category
    });
});

// Get all the buttons and modals
var buttons = document.querySelectorAll('.popup-btn');
var modals = document.querySelectorAll('.popup-modal');
var spans = document.querySelectorAll('.close-btn');

// When the user clicks a button, open the corresponding modal
buttons.forEach(button => {
    button.addEventListener('click', function() {
        var modalId = button.getAttribute('data-modal');
        var modal = document.getElementById(modalId);
        if (modal) {
            modal.style.display = "block";
        }
    });
});

// When the user clicks on <span> (x), close the modal
spans.forEach(span => {
    span.addEventListener('click', function() {
        modals.forEach(modal => modal.style.display = "none");
    });
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.classList.contains('popup-modal') && !event.target.classList.contains('popup-btn')) {
        event.target.style.display = "none";
    }
}

/* 右クリック時に警告メッセージを表示 */
document.addEventListener('contextmenu', function(event) {
    alert('この画像は保護されています。無断でのコピーは禁止です。');
    event.preventDefault();
});
