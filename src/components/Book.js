import PropTypes from "prop-types";
/*
* Book component: Recieves individual book as prop which contains book properties like 
* title, author, image etc.
*/
const Book = ({ book, updateBookShelf }) => {
    //console.log(book);
    const {title, authors, imageLinks, shelf} = book;

    return (
        <div className="book">
            <div className="book-top">
                <div
                    className="book-cover"
                    style={{
                        width: 128,
                        height: 192,
                        backgroundImage:
                            `url(${imageLinks.thumbnail})`,
                    }}
                ></div>
                <div className="book-shelf-changer">
                    <select value={shelf || 'none'} onChange={(e) => updateBookShelf(book, e.target.value)}>
                        <option value="none" disabled>
                            Move to...
                        </option>
                        <option value="currentlyReading">
                            Currently Reading
                        </option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                    </select>
                </div>
            </div>
            <div className="book-title">{title}</div>
            <div className="book-authors">{authors?.join(', ')}</div>
        </div>
    );
};

Book.propTypes ={
    book: PropTypes.object.isRequired,
    updateBookShelf: PropTypes.func.isRequired
};

export default Book;