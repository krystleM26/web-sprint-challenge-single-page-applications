import React, {useState} from "react";
import Form from './components/Form.js'







  


const App = () => {
  const [pizza, setPizza] = useState(intialPizza)
  // const [toppings, setToppings] = useState([""])



  return (
    <div className="pizzaApp">
        <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
      
      <Form /> 

      </div>
     
  )    

 
 
     
}


export default App
