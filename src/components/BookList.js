import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { CardDeck } from 'react-bootstrap';

import '../css/BookList.css';
import Book from './Book';
import SearchBox from './SearchBox';
import Paginator from './Paginator';

function BookList(){ 

    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () => {
        const fetchBooks = async() => {
            setLoading(true);
            const res = await Axios('https://www.googleapis.com/books/v1/volumes?q={search terms}');
            setBooks(res.data.items);
            setLoading(false);
        }    

        fetchBooks();
    }, [])

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(5);

    // Get current posts
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = books.slice(indexOfFirstItem, indexOfLastItem);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber);

    const [inputValue, setInputValue] = useState("");

    //search box function
    const desiredTitles = (inputValue === "") ? 
        currentItem : currentItem.filter(book => {
                    return book.volumeInfo.title.toLowerCase().includes(inputValue.toLowerCase())
                });
                
    return (
        <div>

            <header className="top-bar py-4 py-md-2 px-1 mx-0">
                <nav className="container-xxl d-md-flex align-items-md-center">
                    <form  className="me-auto mb-3 mb-md-auto">
                        <SearchBox inputValue={inputValue} setInputValue={setInputValue}/>
                    </form>
                    
                    <Paginator
                        itemsPerPage={itemsPerPage}
                        totalItems={books.length}
                        paginate={paginate}
                        setItemsPerPage={setItemsPerPage}
                    />                   
                </nav>  
            </header>
           
            <CardDeck className="mt-3">
            {        
                desiredTitles.map((book, i) => {
                    return(
                        <Book book={book} key={i} loading={loading}/> 
                    )
                })
            } 
            </CardDeck>

            {(!desiredTitles.length) && <div className="alert mt-5">Sorry! Try a different title</div>}

        </div>
    );
}

export default BookList;