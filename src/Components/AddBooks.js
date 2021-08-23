import React,{useState,useContext} from 'react'
import { BooksContext } from './BooksContext'

const initialState = {
    name: "",
    date: "",
    time: ""
};
const AddBooks = () => {
    const [update, setUpdate] = useState (initialState)
    const [books, setBooks] = useContext(BooksContext)

    function handleChange (event) {
        setUpdate({...update,[event.target.name]:event.target.value});
    }

    function AddBooks (event){
        event.preventDefault();
        setBooks(prevbooks => [...prevbooks,{name:update.name,date:update.date,time:update.time}])
    }
    return (
        <form onSubmit={AddBooks}>
            <input className="placeholder-gray-500 placeholder-opacity-100 ..." 
            placeholder="Book Name"
            type="text"
            name="name"
            value={update.name}
            onChange={handleChange}
            />

            <input className="placeholder-gray-500 placeholder-opacity-100 ..." 
            placeholder="Enter Date"
            type="date"
            name="date"
            value={update.date}
            onChange={handleChange}
            />

            <input className="placeholder-gray-500 placeholder-opacity-100 ..." 
            placeholder="Time to read the book"
            type="text"
            name="time"
            value={update.time}
            onChange={handleChange}
            />
            <button>submit</button>
        </form>
    )
}

export default AddBooks
