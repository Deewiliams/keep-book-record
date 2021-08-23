import React, {useContext} from 'react'
import { BooksContext } from './BooksContext'

const BookList = () => {
    const value = useContext(BooksContext)

  

    return (
        <div>
            <h1>{value}</h1>
            {/* {
                books.map(book => (
                   <h1>{book.name}</h1>
                ))
            } */}
        </div>
    )
}

export default BookList
