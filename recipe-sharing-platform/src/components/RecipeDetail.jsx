import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import recipesData from "./src/data.json"

const RecipeDetail = () => {

  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

   useEffect(() => {
    const selectedRecipe = recipesData.find(
      (item) => item.id === parseInt(id)
    );
    setRecipe(selectedRecipe);
   }, [id]);
   if (!recipe) {
      return (
        <div className="flex justify-center items-center h-screen text-gray-500 text-lg">
          Loading recipe details...
        </div>
      )
   }
  return (
    <>
     <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>

          <section className="mb-6">
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              ingredients
            </h2>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-700 mb-2">
              Cooking instructions
            </h2>
            <ol className="list-decimal list-inside text-gray-600 space-y-2">
              {recipe.instructions.map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>
          </section>

          <div className="mt-6">
            <Link
              to="/"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default RecipeDetail;
