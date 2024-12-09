import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import * as BookAPI from './BooksAPI';
import BookShelf from './components/BookShelf';
import Search from './components/Search';
import './App.css';
import BookDetail from './components/BookDetail';

const App = () => {
  // temp - hard coded list and state for books
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {
    try {
      const result = await BookAPI.getAll(); // Get All books from API
      // console.log(result); // confirmed we have books
      setBooks(result);
    }
    catch (error) {
      console.error('error fetching books from the server.', error);
    }
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  const updateBookShelf = async (book, shelf) => {
    try {
      await BookAPI.update(book, shelf);
      book.shelf = shelf;
      setBooks((prevBooks) => {
        const otherBooks = prevBooks.filter((b) => b.id !== book.id); // remove the book that's updated
        return [...otherBooks, book]; // adding book with updated shelf
      });
    }
    catch (error) {
      console.error("Error updating shelf: ", error);
    }
  }

  return (
    <Router>
      <div className="app">
        <nav className='navbar'>
          <div className='app-title'>Book Trek</div>
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/search" className="nav-link">Search</Link>
        </nav>
        <Routes>
          <Route path="/" element={
            <div className="list-books">
              <div className="list-books-content">
                <div>
                  <BookShelf
                    shelfTitle="Currently Reading"
                    books={books.filter((book) => book.shelf === 'currentlyReading')}
                    updateBookShelf={updateBookShelf}
                  />
                  <BookShelf
                    shelfTitle="Want to Read"
                    books={books.filter((book) => book.shelf === 'wantToRead')}
                    updateBookShelf={updateBookShelf}
                  />
                  <BookShelf
                    shelfTitle="Read"
                    books={books.filter((book) => book.shelf === 'read')}
                    updateBookShelf={updateBookShelf}
                  />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a Book</Link>
              </div>
            </div>
          } />
          <Route path="/search" element={
            <Search books={books} updateBookShelf={updateBookShelf} />
          } />
          <Route
            path="/book/:id"
            element={<BookDetail />}
          />
        </Routes>
      </div>
    </Router>
  );
}


export default App;