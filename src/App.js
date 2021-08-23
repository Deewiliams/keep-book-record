
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header'
import {BooksProvider} from './Components/BooksContext'
import AddBooks from './Components/AddBooks';

function App() {
  return (
    <BooksProvider>
    <div className="App">
      <Header />
      <AddBooks />
     <BookList />
    </div>
    </BooksProvider>
  );
}

export default App;
