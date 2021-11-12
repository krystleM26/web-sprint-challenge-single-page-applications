import React, {useState} from "react";
import PizzaForm from "../components/PizzaForm";


const intialPizza ={
    name: 'Pepperoni',
    size: '8-inch',
    // otopping1: bool,
    // tpping2: bool,
    special: '2-free toppings'
}


  


const App = () => {
  const [pizza, setPizza] = useState(intialPizza)
  // const [toppings, setToppings] = useState([""])



  return (
    <div className="pizzaApp">
        <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      
      {pizza.map((pizza, index) => {
        <div key={index}>
          {pizza.name} is a {pizza.type}
            </div>
      })}
      
<PizzaForm />
      </div>
  )    

    
       
     
}
export default App
