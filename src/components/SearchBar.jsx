import React from 'react';

const SearchBar = ({ searchfield, searchChange }) => {
    return (
        <input className= 'pa3 ba2 bg-lightest-blue'
        type = 'searchbar'
        placeholder = 'search robots'
        onChange = {searchChange}
        />
    )  
}

export default SearchBar;