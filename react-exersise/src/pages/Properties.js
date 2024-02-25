import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/Property.css";

function Properties() {
  const [properties, setProperties] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://65d9c550bcc50200fcdc131a.mockapi.io/api/properties/rent"
        );
        setProperties(response.data);
      } catch (err) {
        if (err.response) {
          console.log(err);
        } else {
          console.log(`Error: ${err.message}`);
        }
      }
    };
    fetchPosts();
  }, []);
  return (
    <div className="properties">
      <h1 className="listingsTitle">Listings</h1>
      <div className="propertiesList"></div>
      {properties.map((item, i) => (
        <>
          <div className="propertyItem">
            <div key={i}></div>
            <div>{item.title}</div>
            <div>address: {item.address}</div>
            <div>price: {item.price}</div>
          </div>
        </>
      ))}
    </div>
  );
}

export default Properties;
