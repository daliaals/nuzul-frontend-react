import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import "../styles/Property.css";
import { useNavigate } from "react-router-dom";

function Properties() {
  const navigate = useNavigate();
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
          <div
            onClick={() => navigate("/property", { state: item })}
            className="propertyItem"
          >
            <div key={i}></div>
            <div>{item.title}</div>
            <div>address: {item.address}</div>
            <div>price: {item.price}</div>
            <div>
              <button type="button">edit</button>
            </div>
            <button
              onClick={() =>
                axios
                  .delete(
                    `https://65d9c550bcc50200fcdc131a.mockapi.io/api/properties/rent/${item.id}`
                  )
                  .then((response) => {
                    navigate("/deletedProperty");
                    console.log(
                      "Property deleted successfully:",
                      response.data
                    );
                  })
                  .catch((error) => {
                    console.error("Error deleting property:", error);
                  })
              }
            >
              delete
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default Properties;
