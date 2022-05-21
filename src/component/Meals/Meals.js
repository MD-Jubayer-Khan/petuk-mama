import React, { useEffect, useState } from 'react';
import Food from '../Food/Food';
import Item from '../Item/Item';
import './Meals.css'

const Meals = () => {
    const [foods, setFoods] = useState([]);
    const [item , setItem] = useState([])

    useEffect(() =>{
        fetch('items.json')
        .then(res => res.json())
        .then(data => setFoods(data))
    },[]);

    const handleAddToCart = (food) => {
        const newItem = [...item, food];
            setItem (newItem)
       };
    return (
        <div className='d-flex container'>
             <div className="row row-cols-1 row-cols-md-3 w-75 me-4"> 
             {
                foods.map(food => <Food
                     key={food.id} food={food} handleAddToCart={handleAddToCart}
                     ></Food>)
             }
             </div>
             <div className="food-cart w-25">
             <h4>selected item{}</h4>
             <p>item:{item.length}</p>
             </div>
            
        </div>
    );
};

export default Meals;