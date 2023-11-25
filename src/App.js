import React, { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";

const Homepage = () => (
  <>
    <h1>Lambda Eats</h1>
    <p>You can remove this code and create your own header</p>
    <Link to="/pizza" id="order-pizza">
      Order Pizza
    </Link>
  </>
);

const PizzaForm = () => {
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const [size, setSize] = useState(""); 
  const [specialInstructions, setSpecialInstructions] = useState('');
  const [toppings, setToppings] = useState({
    topping1: false,
    topping2: false,
    topping3: false,
    topping4: false,
  });

  const handleNameChange = (event) => {
    const newName = event.target.value
    setName(newName)
    if(newName.length < 2) {
      setError("name must be at least 2 characters")
    } else {
      setError("")
    }
  };

  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleToppingChange = (toppingName) => {
    setToppings((prevToppings) => ({
      ...prevToppings,
      [toppingName]: !prevToppings[toppingName],
    }));
  };

  const handleSpecialInstructionsChange = (e) => {
    setSpecialInstructions(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const formData = {
      name: name,
      size: size,
      toppings: toppings,
      special: specialInstructions,
    };
    
    console.log(formData);
  };

  return (
    <form id="pizza-form" onSubmit={handleSubmit}>
      <label htmlFor="name-input">Name:</label>
      <input
        type="text"
        id="name-input"
        name="name"
        placeholder="Enter your name"
        value={name}
        onChange={handleNameChange}
      />
      {error && <p>{error}</p>}
      
      <label>
        Pizza Size:
        <select 
          id="size-dropdown" 
          name="size" 
          value={size} 
          onChange={handleSizeChange}
        >
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      
      <label>
        Toppings:
        {Object.keys(toppings).map((toppingName) => (
          <label key={toppingName}>
            <input
              type="checkbox"
              name={toppingName}
              checked={toppings[toppingName]}
              onChange={() => handleToppingChange(toppingName)}
            />
            {toppingName.charAt(0).toUpperCase() + toppingName.slice(1)}
          </label>
        ))}
      </label>

      <label>
        Special Instructions:
        <textarea
          id="special-text"
          name="special"
          placeholder="Special Instructions"
          value={specialInstructions}
          onChange={handleSpecialInstructionsChange}
        ></textarea>
      </label>
      
      <button type="submit" id="order-button">Order Pizza</button>
    </form>
  );
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/pizza" element={<PizzaForm />} />
    </Routes>
  );
};

export default App;
