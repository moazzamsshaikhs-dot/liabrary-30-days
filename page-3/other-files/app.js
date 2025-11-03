const searchInput = document.getElementById('searchInput');
    const projectGrid = document.getElementById('projectGrid');
    const cards = projectGrid.getElementsByClassName('card');

    searchInput.addEventListener('input', function() {
      const query = this.value.toLowerCase();
      Array.from(cards).forEach(card => {
        const title = card.getAttribute('data-title').toLowerCase();
        card.style.display = title.includes(query) ? 'block' : 'none';
      });
    });