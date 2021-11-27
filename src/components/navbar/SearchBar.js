import React, { useState } from "react";

const SearchBar = () => {
    const [ input, setInput ] = useState("");

    const changeInput = ( evnt ) => {
        setInput( evnt.target.value );
    }

    return (
        <div>
            <label htmlFor="searchbar">Search Recipes</label>
            <input type="text" name="searchbar" value={ input } onChange={ changeInput } />
            <button>Search</button>
        </div>
    );
}

export default SearchBar;