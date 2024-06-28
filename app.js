document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const genre = document.getElementById('genre').value;
    
    let query = '';
    if (title) query += `title=${title}&`;
    if (author) query += `author=${author}&`;
    if (genre) query += `subject=${genre}&`;
    
    fetch(`https://openlibrary.org/search.json?${query}`)
        .then(response => response.json())
        .then(data => displayResults(data.docs))
        .catch(error => console.error('Error:', error));
});

function displayResults(books) {
    const results = document.getElementById('results');
    results.innerHTML = '';
    books.forEach(book => {
        const bookElement = document.createElement('div');
        bookElement.classList.add('book');
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author_name ? book.author_name.join(', ') : 'N/A'}</p>
            <p><strong>First Published:</strong> ${book.first_publish_year || 'N/A'}</p>
            <p><strong>Subjects:</strong> ${book.subject ? book.subject.join(', ') : 'N/A'}</p>
        `;
        results.appendChild(bookElement);
    });
}
