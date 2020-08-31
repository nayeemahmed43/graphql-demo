import React from 'react';
import { graphql } from 'react-apollo';
import {getBooksQuery} from '../queries/queries';
import BookDetails from './BookDetails';

const BookList = (props) => {

    const displayBooks = () =>{
        let data = props.data;
        if(data.loading){
            return(<div>Loading...</div>)
        }else {
            return data.books.map(book => {
                return(
                <li key={book.id}>{book.name}</li>
                )
            })
        }
    }
    console.log(props)
    return (
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
            <BookDetails />
        </div>
    );
};

export default graphql(getBooksQuery)(BookList);