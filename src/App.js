import React, {useState} from "react";

const intialPizza ={
    name: string,
    size: string,
    topping1: bool,
    topping2: bool,
    special: string,
}
const [toppings, setToppings] = useState([""])

  
}

const App = () => {
  const [pizza, setPizza] = useState [""]
  const [toppings, setToppings] = useState([""])

  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
