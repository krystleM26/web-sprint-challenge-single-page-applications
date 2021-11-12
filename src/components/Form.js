import React from "react";


export default function Form(props) {
  const { handleSize, handleSauce, handleToppings, handleOrder } = props;
  console.log(props);
  return (
    <div className="formInfo">
      {/* DropDown Menu */}
      <label>
        Choice of size
        <select name="size" onChange={handleSize}>
          <option value="">--- Select ---</option>
          <option value="12-inch"> 12-inch </option>
          <option value="8-inch"> 8-Inch </option>
          <option value="4-inch"> 4-Inch</option>
        </select>
      </label>

      {/* Radio Buttons */}
    <div className="sauces">
      <label>
        Choice of Sauce
        <p> Required</p>

        </label> Spinach Alfredo
        <label>
        <input type="radio" id="" name="sauce" onChange={handleSauce} />
      </label>

      <label> Original Red
        <input type="radio" id="" name="sauce" onChange={handleSauce} />
      </label>

      <label> Garlic Ranch
        <input type="radio" id="" name="sauce" onChange={handleSauce} />
      </label>

      <label> BBQ Sauce
        <input type="radio" id="" name="sauce" onChange={handleSauce} />
      </label>
      </div>

      {/* Checkboxes */}

      <div className="toppings">

      <label> Peppercorn
        <input type="checkbox" name="pepperoni" onChange={handleToppings} />
      </label>

      <label> Sausage
        <input type="checkbox" name="pepperoni" onChange={handleToppings} />
      </label>

      <label> Black Olives
        <input type="checkbox" name="pepperoni" onChange={handleToppings} />
      </label>

      <label> Artichoke Hearts
        <input type="checkbox" name="pepperoni" onChange={handleToppings} />
      </label>

      <label> Three Cheese
        <input type="checkbox" name="pepperoni" onChange={handleToppings} />
      </label>

      </div>

      {/* Toggle */}
      <div className="choices">
        
        Choice of Substitute:
        <label class="swtich"> Gluten-Free
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
      <label class="switch"> Vegetarian
        <input type="checkbox" />
        <span class="slider"></span>
      </label>
      </div>

      {/* Notes */}
      <div className="notes">
      <label> 
        <input type="text" name="name" placeholder="Additional Notes" />
      </label>
      </div>

      {/* Add to Cart Button */}
<div className=" button">
<button onClick={handleOrder}>Add to Order</button>
</div>
    
    </div>
  );
}
