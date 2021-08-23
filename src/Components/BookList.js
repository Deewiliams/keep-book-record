import React, {useState} from 'react'
// import Books from './Books'

const BookList = () => {
    const [books, SetBooks] = useState([{
        name: 'Little Bear',
        date: '2021.09.5',
        time: '11:00',
        id: 1
    }])

    return (
        <div>
            <h1>hello books</h1>
            {
                books.map(book => (
                   <h1>{book.name}</h1>
                ))
            }
        </div>
    )
}

export default BookList
