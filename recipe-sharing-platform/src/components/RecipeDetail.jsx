import React from "react";
import { useState, useEffect } from "react";

const RecipeDetail = () => {
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
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
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
      </div>
    </>
  );
};

export default RecipeDetail;
