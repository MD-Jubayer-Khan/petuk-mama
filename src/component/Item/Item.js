import React from 'react';

const Item = (props) => {
    const {item} = props
    return (
        <div>
             <h4>selected item{}</h4>
             <p>item:{item.length}</p>
        </div>
    );
};

export default Item;