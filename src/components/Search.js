import React from 'react'

const Search = (props) => {
    return (
        <div>
            <input type="text"
                onChange={(e) => {props.updateSearch(e)}}
                value={props.search}
            />
        </div>
    )
}

export default Search