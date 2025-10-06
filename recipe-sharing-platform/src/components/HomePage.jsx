import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import recipesData from "/src/data.json"
export const HomePage = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setTimeout(() => {
      fetch("/src/data.json")
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => console.error("Error fetching data:", error));
    }, 1000);
  }, []);
  return (
    <>
      <div>Fecthed data</div>
      <div>
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <div
              key={index}
              className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-[#ffffff] text-black rounded-lg item-center hover:shadow-lg p-4 m-4"
            >
              <h1>{item.id}</h1>
              <p>{item.title}</p>
              <p>{item.summary}</p>
              <img src={item.image} alt="image" />
            </div>
          ))
        ) : (
          <div>Loading...</div>
        )}
        <div>
          <Link to ={`/recipe/ ${recipe.id}`}
           className="text-blue-600 hover:text-blue-800 font-medium"
          >
          View Details 
          </Link>
        </div>
      </div>
    </>
  );
};
