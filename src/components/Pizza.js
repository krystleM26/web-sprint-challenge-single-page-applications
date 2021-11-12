import React from "react";

const Pizza = (props) => {
    const { pizza } = props;

    return (
        <div className="pizza-wrapper">
          <h2>{pizza.name}</h2>
          <h3>{pizza.price}</h3>
          <div className="topping-wrapper">
          {pizza.toppings.map((topping, index) => <p key={index}>{topping}</p> )}
          </div>
        </div>



    )
}


export default Pizza;