import React from 'react';
import './Item.css'

const Item = (props) => {
    const {name, img} = props.item
    return (
    <div>
        <div className="food-item d-flex align-items-center m-3">
             <img src={img} alt="" />
             <p>{name}</p>
        </div>
        
        </div>
    );
};

export default Item;