import React from 'react';

const Photos = props => (
        <li>
            <img src={props.url} alt={props.alt}/>
        </li>
);

export default Photos;