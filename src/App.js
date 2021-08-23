
import './App.css';
import BookList from './Components/BookList';
import Header from './Components/Header'
import {BooksProvider} from './Components/BooksContext'

function App() {
  return (
    <BooksProvider>
    <div className="App">
      <Header />
     <BookList />
    </div>
    </BooksProvider>
  );
}

export default App;
