import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const BooksPage = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("https://seussology.info/api/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data); // Verify property names here
        setBooks(data);
      })
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div>
      <h1>Dr. Seuss Books</h1>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {books.map((book) => (
          <div key={book.id} style={{ margin: "10px" }}>
            <Link to={`/books/${book.id}`}>
              <img
                src={book.image}
                alt={book.title}
                style={{ width: "150px", height: "auto" }}
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BooksPage;
