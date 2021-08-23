import React, { useContext } from "react";
import { BooksContext } from "./BooksContext";
import Books from "./Books";

const BookList = () => {
  const [books, SetBooks] = useContext(BooksContext);
  return (
    <div>
      {books.map((book) => (
        <div className="border-2 w-2/5 m-auto mt-10 shadow-lg" key={book.id}>
          <Books name={book.name} date={book.date} time={book.time} />
        </div>
      ))}
    </div>
  );
};

export default BookList;
