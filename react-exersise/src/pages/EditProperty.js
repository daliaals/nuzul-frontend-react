import React from "react";
import "../styles/Form.css";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function EditProperty(props) {
  const location = useLocation();
  const id = location.state.id;
  const navigate = useNavigate();

  const [title, setTitle] = useState(location.state.title);
  const [address, setAddress] = useState(location.state.address);
  const [price, setPrice] = useState(location.state.price);
  const [bedrooms, setBedrooms] = useState(location.state.bedrooms);
  const [bathrooms, setBathrooms] = useState(location.state.bathrooms);

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
      .put(
        `https://65d9c550bcc50200fcdc131a.mockapi.io/api/properties/rent/${id}`,
        propertyData
      )
      .then((response) => {
        navigate("/properties");
        console.log(response.status, response.data);
      });
  };

  return (
    <form id="edit-property-form" onSubmit={handleSubmit}>
      <h1>Edit a property</h1>
      <label htmlFor="title">Title</label>
      <input
        name="title"
        placeholder="Enter new listing's title (optional)"
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      />
      <label htmlFor="address">address</label>
      <input
        name="address"
        placeholder="Enter new address (optional)"
        type="text"
        onChange={(event) => setAddress(event.target.value)}
      />
      <label htmlFor="price">Price</label>
      <input
        name="price"
        placeholder="Enter new price (optional)"
        type="text"
        onChange={(event) => setPrice(event.target.value)}
      />
      <label htmlFor="bedrooms">Bedrooms</label>
      <input
        name="bedrooms"
        placeholder="Enter new bedrooms (optional)"
        type="text"
        onChange={(event) => setBedrooms(event.target.value)}
      />
      <label htmlFor="bathrooms">Bathrooms</label>
      <input
        name="bathrooms"
        placeholder="Enter new bathrooms (optional)"
        type="text"
        onChange={(event) => setBathrooms(event.target.value)}
      />

      <button type="submit"> Edit Property</button>
    </form>
  );
}

export default EditProperty;
