import React from 'react';

const style = {
    container: {
        flexGrow: 1,
        flexBasis: 0,
        background: '#E5E9F0',
        margin: '4px',
        paddingVertical: '8px',
        paddingHorizontal: '16px',
    },
    text: {
        color: 'black'
    }
}

const WordCard = (props) => {
    return (
        <div className="word-card" index={props.index} onClick={props.onClick} style={style.container}>
            <p index={props.index} style={style.text}>原词: {props.english}</p>
            <p index={props.index} style={style.text}>译本译词: {props.chinese}</p>
        </div>
    )
}

export default WordCard;