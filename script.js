document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        // Cambiar estado activo
        document.querySelector('.active').classList.remove('active');
        button.classList.add('active');

        const filter = button.getAttribute('data-filter');
        document.querySelectorAll('.project-card').forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});