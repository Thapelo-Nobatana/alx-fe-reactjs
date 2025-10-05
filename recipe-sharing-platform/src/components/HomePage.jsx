import React from "react";
import { useState, useEffect } from "react";

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
              className="grid grid-col-1 md:grid-col-2 lg:grid-col-4 bg-[#ffffff] text-black rounded-lg item-center hover:shadow-lg p-4 m-4"
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
