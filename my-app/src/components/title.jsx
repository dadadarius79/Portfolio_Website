import React from 'react';

const Title = (props) => {
    return(
        <>
        <h1>{props.name}</h1>
        <p className="paragraph_title">{props.text}</p>
        </>
    )
}

export default Title;