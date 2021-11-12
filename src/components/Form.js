import React from 'react';


export default function Form () {
return (


<div className="formInfo">

{/* DropDown Menu */}
<label> 
    Choice of size
    
    <select value={values.size} name="size" onChange={onChange}>
        <option value="">--- Select ---</option>
        <option value="12-inch"> 6-inch </option>
        <option value="8-inch"> 8-Inch </option>
        <option value="4-inch"> 4-Inch</option>
        
    </select>


</label>

{/* Radio Buttons */}


<label> 
    Choice of Sauce
    <p> Required</p>
    <input
    type="radio"
    id=""
    name="sauce"
    onChange={onChange}
    />

</label>

    <label>
    <input
    type="radio"
    id=""
    name="sauce"
    onChange={onChange}
    />
    </label>

<label>
    <input
    type="radio"
    id=""
    name="sauce"
    onChange={onChange}
    />
</label>

<label>
    <input
    type="radio"
    id=""
    name="sauce"
    onChange={onChange}
    />
</label>

{/* Checkboxes */}

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

<label>
    <input
    type="checkbox"
    value="toppings"
    name="pepperoni"
    checked={values.pepperoni}
    />
</label>

{/* Toggle */}
<label class ="swtich"> Choice of Substitute
    <input 
    type="checkbox"/>
    <span class ="slider"></span>
</label>
<label>
<input 
    type="checkbox"/>
    <span class ="slider"></span>
</label>

{/* Notes */}
<label>
    <input
    type="text"
    name="name"
    value={values.name}
    placeholder="Special Notes"
    />
</label>

{/* Add to Cart Button */}

<button onClick={}>Add to Order</button>







</div>
)
}