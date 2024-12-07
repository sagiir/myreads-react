import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI'

import Book from './Book';

const Search = ({ books, updateBookShelf }) => {
    // States
    const [query, setQuery] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    // handle search, invoked by query change
    useEffect(() => {
        //console.log('use effect');
        const fetchSearchResults = async () => {
            // clear search results
            if (!query.trim()) {
                setSearchResults([]);
                return;
            }

            try {
                console.log(`API Call: search(${query})`);
                const apiResponse = await search(query.trim());
                if (apiResponse.error) {
                    console.log('error: ', apiResponse.error);
                    setSearchResults([]);
                }
                else {
                    console.log(`search results: ${apiResponse.length}`);

                    // map search results and include the shelf information from current books 
                    const updatedBooks = () => apiResponse.map((r) => {
                        const bookShelf = books.find((b) => b.div === r.id);
                        return {
                            ...r,
                            shelf: bookShelf ? bookShelf.shelf : 'none'
                        }
                    });

                    setSearchResults(updatedBooks);
                    //console.log(searchResults);
                }
            }
            catch (error) {
                console.error("Error while searching for books: ", error);
                setSearchResults([]);
            }
        };

        fetchSearchResults();

    }, [query, books])

    const handleInputChange = (e) => {
        //console.log(e.target.value);
        setQuery(e.target.value);
    }

    return (
        <div className="search-books">
            <div className="search-books-bar">
                <Link to="/" className="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        value={query}
                        placeholder="Search by title, author, or ISBN"
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">                
                    {searchResults.map((book) => (
                        <li>
                            <Book 
                                key={book.id}
                                book={book}
                                updateBookShelf={updateBookShelf}
                            />
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

Search.propTypes = {
    books: PropTypes.array.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Search;