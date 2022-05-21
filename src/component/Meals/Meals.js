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
       if(item.length < 4){
        const newItem = [...item, food];
        setItem (newItem)
       }
       else{
           alert("You cant't add more than 4 item")
       }
       };
     const chooseRandom =(item) =>{
         const clearItem = []
            setItem(clearItem);
     }
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
                 {       
                   item.map(EachItem => <Item key={EachItem.id} item={EachItem}></Item>)   
                 }
                <div>
                <button className='btn btn-warning food-btn m-4'>Choose for me</button><br/>
                 <button onClick={chooseRandom} className='btn btn-success food-btn'>Choose Again</button>
                 
                </div>
             </div>
            
        </div>
    );
};

export default Meals;