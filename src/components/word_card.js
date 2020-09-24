import React from 'react';

const style = {
    container: {
        flexGrow: 1,
        flexBasis: 0,
        background: 'white',
        margin: '4px',
        paddingVertical: '8px',
        paddingHorizontal: '16px'
    },
    text: {
        color: 'black'
    }
}

const WordCard = (props) => {
    return (
        <div style={style.container} key={props.key}>
            <p style={style.text}>原词: {props.english}</p>
            <p style={style.text}>译本译词: {props.chinese}</p>
        </div>
    )
}

export default WordCard;