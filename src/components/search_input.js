import React from 'react';

const style = {
    input: {
        margin: '12px',
        padding: '12px'
    }
}

const SearchInput = (props) => {
    return(
            <input 
                style={style.input}
                type="text" 
                placeholder="Tiefling" 
                value={props.value}
                onChange={props.handleQuery} 
            />
    )
}

export default SearchInput;