import React, { useState } from "react";

const AddRecipeForm = () => {
  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    instructions: "",
  });

  const [errors, setErrors] = useState(null);
  // input change handler

  const handleChange = (value) => {
    const { name, value } = target.value;
    setRecipe((prevRecipe) => ({
      ...prevRecipe,
      [name]: value,
    }));
  };

  // validation form before submit
  const validateForm = () => {
    let formErrors = {};
    if (!recipe.title.trim()) formErrors.title = "Recipe title is required.";
    if (!recipe.ingredients.trim())
      formErrors.ingredients = "Ingredients are required.";
    else if (recipe.ingredients.split(",").length < 2)
      formErrors.ingredients = "Please include at least two ingredients.";

    if (!recipe.steps.trim())
      formErrors.steps = "Preparation steps are required.";

    setErrors(formErrors);

    return Object.keys(formErrors).length === 0;
  };
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("✅ Recipe submitted:", recipe);
      alert("Recipe submitted successfully!");

      // Clear form
      setRecipe({
        title: "",
        ingredients: "",
        steps: "",
      });
      setErrors({});
    }
  };

  return (
    <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
        Add a New Recipe
      </h2>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Title */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Recipe Title
          </label>
          <input
            type="text"
            name="title"
            value={recipe.title}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.title ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. Spaghetti Carbonara"
          />
          {errors.title && (
            <p className="text-red-500 text-sm mt-1">{errors.title}</p>
          )}
        </div>

        {/* Ingredients */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Ingredients (comma separated)
          </label>
          <textarea
            name="ingredients"
            value={recipe.ingredients}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2 h-28 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.ingredients ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. pasta, eggs, cheese, bacon"
          ></textarea>
          {errors.ingredients && (
            <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>
          )}
        </div>

        {/* Steps */}
        <div>
          <label className="block text-gray-700 font-medium mb-2">
            Preparation Steps
          </label>
          <textarea
            name="steps"
            value={recipe.steps}
            onChange={handleChange}
            className={`w-full border rounded-lg px-4 py-2 h-32 resize-none focus:outline-none focus:ring-2 focus:ring-green-400 ${
              errors.steps ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="e.g. Boil the pasta, fry the bacon, mix with sauce..."
          ></textarea>
          {errors.steps && (
            <p className="text-red-500 text-sm mt-1">{errors.steps}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 rounded-lg transition duration-200"
        >
          Submit Recipe
        </button>
      </form>
    </div>
  );
};

export default AddRecipeForm;
