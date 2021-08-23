import React, {useContext} from 'react'
import { BooksContext } from './BooksContext'

const BookList = () => {
    const [books, SetBooks] = useContext(BooksContext);
    return (
        <div>
            {
                books.map(book => (
                <div key={book.id}>
                   <h1>{book.name}</h1>
                   <h1>{book.date}</h1>
                   <h1>{book.time}</h1>
                   </div>
                ))
            }
        </div>
    )
}

export default BookList
