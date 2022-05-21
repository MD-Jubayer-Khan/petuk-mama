import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import React from 'react';
import './Food.css'

const Food = (props) => {
    const {name, price, img} =props.food
    return (
          <div className="col food m-2">
              <div className="card h-100">
              <img src={img} className="card-img-top img-fluid" alt="..."/>
              <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p>Price: {price}</p>
                 <button  className='btn btn-warning food-btn' onClick={()=> props.handleAddToCart(props.food)}>Add Item <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon></button>
              </div>
                  
              </div>
          </div>

    );
};

export default Food;