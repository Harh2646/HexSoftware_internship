document.addEventListener("DOMContentLoaded", function() {
    const searchBar = document.getElementById("searchBar");
    const bookContainer = document.getElementById("bookContainer");
    const historyContainer = document.getElementById("historyContainer");

    const books = [
        { title: "The Great Gatsby", category: "Fiction" },
        { title: "1984", category: "Dystopian" },
        { title: "To Kill a Mockingbird", category: "Classic" },
        { title: "The Catcher in the Rye", category: "Classic" }
    ];

    function displayBooks() {
        bookContainer.innerHTML = "";
        books.forEach(book => {
            const li = document.createElement("li");
            li.textContent = `${book.title} - ${book.category}`;
            bookContainer.appendChild(li);
        });
    }

    searchBar.addEventListener("keyup", function() {
        const query = searchBar.value.toLowerCase();
        const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
        bookContainer.innerHTML = "";
        filteredBooks.forEach(book => {
            const li = document.createElement("li");
            li.textContent = `${book.title} - ${book.category}`;
            bookContainer.appendChild(li);
        });
    });

    displayBooks();
});
