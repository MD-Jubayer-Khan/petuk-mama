import React from 'react';

const Item = (props) => {
    console.log(props.food);
    return (
        <div>
            <h4>selected item{}</h4>
        </div>
    );
};

export default Item;