import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { get } from "../BooksAPI";
import PropTypes from "prop-types";
import { Atom } from "react-loading-indicators";

const BookDetail = () => {
    const { id } = useParams();
    const [book, setBooks] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const getBook = async () => {
            try {
                const res = await get(id);
                setBooks(res);
                setIsLoading(false);
            }
            catch (error) {
                console.error('Error retrieving book details: ', error);
                setIsLoading(false);
            }
        }

        getBook();
    }, [id]);

    if (isLoading || !book) return (
        <Atom color="#32cd32" size="medium" text="" textColor="" />

    )
    const {
        title, authors, description, imageLinks, publisher, publishedDate, categories
    } = book;


    return (
        <div className="book-detail">
            <div className="book-detail-header">
                <img
                    src={imageLinks?.thumbnail || 'placeholder_image_url_here'}
                    alt={title} />
                <h2>{title}</h2>
                <p>by {authors ? authors.join(', ') : 'Unknown Author'}</p>
            </div>
            <div className="book-detail-body">
                    <p><strong>Description: </strong>{description || 'No description'}</p>
                    <p><strong>Publisher: </strong>{publisher || 'Unkonwn'}</p>
                    <p><strong>Published Date: </strong>{publishedDate || 'N/A'}</p>
                    <p><strong>Categories: </strong>{categories?.join(', ') || 'N/A'}</p>
            </div>
        </div>
    )
};

BookDetail.propTypes = {
    id: PropTypes.string
};

export default BookDetail;
