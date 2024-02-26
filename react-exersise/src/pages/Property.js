import React from "react";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Property(props) {
  const location = useLocation();
  const data = location.state;
  const navigate = useNavigate();
  return (
    <div>
      <p>title: {data.title}</p>
      <p>address: {data.address}</p>
      <p>bedrooms: {data.bedrooms}</p>
      <p>bathrooms: {data.bathrooms}</p>
      <p>price: {data.price} SAR</p>
      <p>listing id: {data.id}</p>
      <button
        onClick={() => navigate("/editProperty", { state: { id: data.id } })}
      >
        Edit Property Listing
      </button>
    </div>
  );
}

export default Property;
