import React, { useState } from "react";
import Form from "./components/Form.js";
import { Route, Link } from "react-router-dom";
// import style from "./App.css";

const initialPizza = {
  name: " ",
  type: " ",
  size: " ",
  toppings: [],
  // special:"2 for 1"
  // price:"$5"
};

const App = () => {
  const [name, setName] = useState("");
  const [pizza, setPizza] = useState();
  const [sauce, setSauce] = useState([]);
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState("");
  const [order, setOrder] = useState([]);

  const handleSauce = (evt) => {
    setSauce(evt.target.value);
  };

  const handleToppings = (evt) => {
    setToppings(evt.target.value);
  };

  const handleSize = (evt) => {
    setSize(evt.target.value);
  };

  const handleOrder = () => {
    setOrder([...order, { name: name }]);
  };

  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <p>It's Pizza Time!!</p>
        {/* <nav>
          <Link to="/">Home</Link>
          <Link to="/form">Choose Your Pizza</Link>
          <Link to="/pizza">Order is Placed</Link>
          </nav>
          <Route path="/pizza">
         

            <Pizza pizza={pizza} />
            </Route> */}

        {/* <div className="pizza-wrapper">
          <h2>{pizza.name}</h2>
          <h3>{pizza.price}</h3>
          <div className="topping-wrapper">
            {pizza.toppings.map((topping, index) => (
              <p key={index}>{topping}</p>
            ))}
          </div>
        </div> */}

        <Form
          handleDrop={handleSize}
          handleSauce={handleSauce}
          handleToppings={handleToppings}
          handleOrder={handleOrder}
        />
      </header>
    </div>
  );
};

export default App;
