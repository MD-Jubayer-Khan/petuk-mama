import React from 'react';
import './Item.css'

const Item = (props) => {
    const {name} = props.item
    return (
    <div>
        <p>{name}</p>
        </div>
    );
};

export default Item;