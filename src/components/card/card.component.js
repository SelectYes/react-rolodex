import React from 'react';
import './card.styles.css';

export const Card = (props) => {
    return(
        <div className="card">
            <img alt="entry" src={`https://robohash.org/${props.entry.id}?set=set1&size=180x180`}/>
            <h2>{props.entry.name}</h2>
            <p>{props.entry.email}</p>
        </div>
    )
}