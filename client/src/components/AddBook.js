import React, { useState } from 'react';
import { graphql } from 'react-apollo';
import {getAuthorsQuery} from '../queries/queries';


const AddBook = (props) => {

    const [name,setName] = useState('');
    const [genre,setGenre] = useState('');
    const [authorId, setAuthorId] = useState(null);

    const displayAuthor = () => {
        let data = props.data;
        if(data.loading){
            return ( <option disabled>Loading Author...</option> );
        }else {
            return data.authors.map(author => {
                return (<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    }
    return (
        <form id="add-book" onS>

            <div className="field">
                <label>Book Name:</label>
                <input type="text" onChange={e => setName(e.target.value)}/>
            </div>

            <div className="field">
                <label>Genre:</label>
                <input type="text" onChange={e => setGenre(e.target.value)}/>
            </div>

            <div className="field">
                <label>Author:</label>
                <select onChange={e => setAuthorId(e.target.value)}>
                    <option>select author</option>
                    {displayAuthor()}
                </select>
            </div>

            <button>+</button>
        </form>
    );
};

export default graphql(getAuthorsQuery)(AddBook);