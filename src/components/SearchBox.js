import React from 'react';

const SearchBox = ({searchChange}) => {
    return (
        <div className='pa2'>
        <input 
        className='pa3 ba b--green bg-lightest-blue'
        // Link: https://tachyons.io/docs/table-of-properties/
        type='search' 
        placeholder='Find Your Assistant'
        onChange={searchChange}
        />
        </div>
    );
}

export default SearchBox;