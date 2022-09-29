import React from 'react';

const Search = (props) => {
console.log(props);
    const handleSubmit = (event) =>{
        event.preventDefault();
        props.findBooks(props.keyword);
    };

    return (
        <div className="searchBar">
        <form onSubmit={ (e) => handleSubmit(e)}>
        <label>
            <input type="text" placeholder="Enter name, author, keyword or genre..." name="search" value={props.keyword} onChange={(e) => props.setKeyword(e.target.value)}/>
        </label>
        <input type="submit" value="Search"/>
        </form>
        <h1>{props.keyword && 'Searching for keyword:' + props.keyword}</h1>
    </div>
    )
}

export default Search;