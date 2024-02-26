import React from "react";
import "../styles/Form.css";
import { useState } from "react";
import axios from "axios";

function AddPropertyForm() {
  const [title, setTitle] = useState("");
  const [address, setAddress] = useState("");
  const [price, setPrice] = useState(0);
  const [bedrooms, setBedrooms] = useState(0);
  const [bathrooms, setBathrooms] = useState(0);

  const displayInfo = () => {
    console.log(title);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const propertyData = {
      title: title,
      address: address,
      price: price,
      bedrooms: bedrooms,
      bathrooms: bathrooms,
    };
    axios
      .post(
        "https://65d9c550bcc50200fcdc131a.mockapi.io/api/properties/rent",
        propertyData
      )
      .then((response) => {
        console.log(response.status, response.data);
      });
  };
  return (
    <form id="add-property-form" onSubmit={handleSubmit}>
      <h1>Add a property</h1>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        placeholder="Enter listing's title"
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="address">address</label>
      <input
        name="address"
        placeholder="Enter address"
        type="text"
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        name="price"
        placeholder="Enter price"
        type="text"
        onChange={(event) => setPrice(event.target.value)}
      />
      <label htmlFor="bedrooms">Bedrooms</label>
      <input
        name="bedrooms"
        placeholder="Enter bedrooms"
        type="text"
        onChange={(event) => setBedrooms(event.target.value)}
      />
      <label htmlFor="bathrooms">Bathrooms</label>
      <input
        name="bathrooms"
        placeholder="Enter bathrooms"
        type="text"
        onChange={(event) => setBathrooms(event.target.value)}
      />

      <button type="submit" onClick={displayInfo}>
        {" "}
        Add New Property
      </button>
    </form>
  );
}

export default AddPropertyForm;
