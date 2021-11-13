import React from "react";

export default function Form(props) {
  const {
    handleSize,
    handleSauce,
    handleToppings,
    handleOrder,
    size,
    sauce,
    handleNotes,
    errors,
    handleName,
    toppings,
  } = props;
  console.log(props);
  return (
    <div id="pizza-form" className="formInfo">
      <div className="errors">
        {/* 🔥 RENDER THE VALIDATION ERRORS HERE */}
        <div>{errors.name}</div>
        <div>{errors.type}</div>
        <div>{errors.size}</div>
      </div>
      {/* Name input */}
      <label>
        <input
          id="name-input"
          type="text"
          name="name"
          minLength="2"
          onChange={handleName}
        />
      </label>

      {/* DropDown Menu */}
      <label>
        Choice of size
        <select id="size-dropdown" value={size} onChange={handleSize}>
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
        </label>{" "}
        Spinach Alfredo
        <label>
          <input
            type="radio"
            value="spinach alfredo"
            name="sauce"
            onChange={handleSauce}
            checked={sauce === "spinach alfredo"}
          />
        </label>
        <label>
          {" "}
          Original Red
          <input
            type="radio"
            value="original red"
            name="sauce"
            onChange={handleSauce}
            checked={sauce === "original red"}
          />
        </label>
        <label>
          {" "}
          Garlic Ranch
          <input
            type="radio"
            value="garlic ranch"
            name="sauce"
            onChange={handleSauce}
            checked={sauce === "garlic ranch"}
          />
        </label>
        <label>
          {" "}
          BBQ Sauce
          <input
            type="radio"
            value="bbq sauce"
            name="sauce"
            onChange={handleSauce}
            checked={sauce === "bbq sauce"}
          />
        </label>
      </div>

      {/* Checkboxes */}

      <div className="toppings">
        <label>
          Peppercorn
          <input
            type="checkbox"
            value="peppercorn"
            name="toppings"
            onChange={handleToppings}
            checked={toppings === "peppercorn"}
          />
        </label>

        <label>
          Sausage
          <input
            type="checkbox"
            value="sausage"
            name="toppings"
            onChange={handleToppings}
            checked={toppings === "sausage"}
          />
        </label>
        <label>
          Black Olives
          <input
            type="checkbox"
            value="black olives"
            name="pepperoni"
            onChange={handleToppings}
            checked={toppings === "black olives"}
          />
        </label>
        <label>
          Artichoke Hearts
          <input
            type="checkbox"
            values="artichoke hearts"
            name="pepperoni"
            onChange={handleToppings}
            checked={toppings === "artichoke hearts"}
          />
        </label>
        <label>
          Three Cheese
          <input
            type="checkbox"
            value="three cheese "
            name="pepperoni"
            onChange={handleToppings}
            checked={toppings === "three cheese"}
          />
        </label>
      </div>

      {/* Toggle */}
      <div className="choices">
        Choice of Substitute:
        <label className="swtich">
          {" "}
          Gluten-Free
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
        <label className="switch">
          {" "}
          Vegetarian
          <input type="checkbox" />
          <span className="slider"></span>
        </label>
      </div>

      {/* Notes */}
      <div className="notes">
        <label>
          <input
            id="special-text"
            type="text"
            name="name"
            placeholder="Additional Notes"
            onChange={handleNotes}
          />
        </label>
      </div>
      {/* Quantity */}

      <label>
        <input type="number" name="number" min="1" max="100" />
      </label>
      {/* Add to Cart Button */}
      <div className=" button">
        <button id="order-pizza" onClick={handleOrder}>
          Add to Order
        </button>
      </div>
    </div>
  );
}
