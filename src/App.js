import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import './App.css';

// Components
import BookShelf from './components/BookShelf';
import Header from './components/Header';
import Search from './components/Search';

const App = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={
            <div className="list-books">
              <div className="list-books-title">
                <h1>Book Trek</h1>
              </div>
              <div className="list-books-content">
                <div>
                  <BookShelf title="Currently Reading" />
                  <BookShelf title="Want to Read" />
                  <BookShelf title="Read" />
                </div>
              </div>
              <div className="open-search">
                <Link to="/search">Add a Book</Link>
              </div>
            </div>
          } />
          <Route path="/search" element={
            <Search />
          } />
        </Routes>
      </div>
    </Router>
  );
}

export default App;