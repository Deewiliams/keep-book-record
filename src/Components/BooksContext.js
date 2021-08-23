import React, {useState, createContext} from 'react'

export const BooksContext = createContext();

export const BooksProvider = (props) => {

    const [books, SetBooks] = useState([{
        name: 'Little Bear',
        date: '2021.09.5',
        time: '11:00',
        id: 1
    }])

    return (
       <BooksContext.Provider value={'Desire'}>
           {props.children}
       </BooksContext.Provider>
    )
}

