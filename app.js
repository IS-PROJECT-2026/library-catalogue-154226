function renderBooks(list) {
  const grid = document.getElementById('bookGrid');
  grid.innerHTML = list.length ? list.map(b => `
    <div class="book-card" onclick="openModal(${b.id})">
      <img src="${b.cover}" alt="${b.title}" onerror="this.src='https://via.placeholder.com/180x220?text=No+Cover'" />
      <div class="card-body">
        <h3>${b.title}</h3>
        <p>${b.author}</p>
        <span class="genre-tag">${b.genre}</span>
      </div>
    </div>
  `).join('') : '<p style="color:#777">No books found.</p>';
}

function populateGenres() {
  const select = document.getElementById('genreFilter');
  const genres = [...new Set(books.map(b => b.genre))].sort();
  genres.forEach(g => {
    const opt = document.createElement('option');
    opt.value = g; opt.textContent = g;
    select.appendChild(opt);
  });
}

renderBooks(books);
populateGenres();