import React, { useState } from "react";
import Form from "./components/Form.js";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

// import "./App.css";

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
        <Router>
          <nav className="navBar">
            <Link to="/">Home</Link>
            <Link t0="/form">Pizza Order</Link>
          </nav>
          <Switch>
            <Route path="/"/>
            <Route path="/form"/>
            
          </Switch>
        </Router>

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
