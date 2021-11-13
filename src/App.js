import React, { useState } from "react";
import Form from "./components/Form.js";
import Home from "./components/Home";

import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import "./App.css";

const initialPizza = {
  name: " ",
  type: " ",
  size: "",
  toppings: [],
  // special:"2 for 1"
  // price:"$5"
};

const App = () => {
  const [pizza, setPizza] = useState();
  const [sauce, setSauce] = useState("");
  const [toppings, setToppings] = useState([]);
  const [size, setSize] = useState("asfasfas");
  const [order, setOrder] = useState([]);
  const [notes, setNotes] = useState("");

  const handleSauce = (evt) => {
    setSauce(evt.target.value);
    console.log("sauces", evt.target.value);
  };

  const handleToppings = (evt) => {
    setToppings(evt.target.value);
  };

  const handleSize = (evt) => {
    console.log("call finc");
    setSize(evt.target.value);
    console.log(evt.target.value);
  };

  const handleOrder = () => {
    setOrder([...order, { size: size, sauce: sauce, notes: notes }]);
  };

  const handleNotes = (evt) => {
    setNotes(evt.target.value);
    console.log(evt.target.value);
  };

  return (
    <div className="App">
      <header>
        <h1>Lambda Eats</h1>
        <p>It's Pizza Time!!</p>
        <Router>
          <nav className="navBar">
            <Link  to="/">Home</Link>
            <Link id="order-pizza" to="/pizza">Pizza Order</Link>
          </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/pizza">
              <Form
                handleSize={handleSize}
                handleSauce={handleSauce}
                handleToppings={handleToppings}
                handleOrder={handleOrder}
                handleNotes={handleNotes}
                size={size}
                sauce={sauce}
              />
            </Route>
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
      </header>
    </div>
  );
};

export default App;
