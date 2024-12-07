import PropTypes from 'prop-types';
import Book from './Book';

const BookShelf = ({ shelfTitle, books, updateBookShelf }) => {
    //console.log(books);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{shelfTitle}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {/* Map over book array, render each book using Book component */}
                    {books.map((book) => (
                        <li key={book.id}>
                            <Book book={book} updateBookShelf={updateBookShelf} />{/* passing book data to Book component */}
                        </li>
                    ))};
                </ol>
            </div>
        </div>
    );
};

BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    shelfTitle: PropTypes.string.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default BookShelf;