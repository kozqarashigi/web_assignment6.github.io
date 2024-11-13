
// for my book recomendations
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-buttons button');
    const bookCards = document.querySelectorAll('.book-card');
    const savedFilter = localStorage.getItem('bookFilter') || 'all';

    // Apply the saved filter when the page loads
    filterBooks(savedFilter);

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            filterBooks(filter);
            localStorage.setItem('bookFilter', filter);  // Save filter to local storage
        });
    });

    function filterBooks(filter) {
        bookCards.forEach(card => {
            if (filter === 'all' || card.getAttribute('data-category') === filter) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
        
        // Highlight active filter button
        filterButtons.forEach(button => {
            button.classList.toggle('active', button.getAttribute('data-filter') === filter);
        });
    }
});

