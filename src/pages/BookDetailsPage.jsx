import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function BookDetailsPage() {
  const { id } = useParams();
  const [book, setBook] = useState(null);

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then((response) => response.json())
      .then((data) => setBook(data));
  }, [id]);

  if (!book) return <p>Loading...</p>;

  return (
    <div>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} />
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetailsPage;
