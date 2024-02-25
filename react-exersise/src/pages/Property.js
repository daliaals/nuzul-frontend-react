import React from "react";
import { useLocation } from "react-router-dom";

function Property(props) {
  const location = useLocation();
  const data = location.state;
  return (
    <div>
      <p>title: {data.title}</p>
      <p>address: {data.address}</p>
      <p>bedrooms: {data.bedrooms}</p>
      <p>bathrooms: {data.bathrooms}</p>
      <p>price: {data.price} SAR</p>
      <p>listing id: {data.id}</p>
    </div>
  );
}

export default Property;
