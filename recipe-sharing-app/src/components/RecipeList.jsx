import React from "react";
import useRecipeStore from "../recipeStore";
import { Link } from "react-router-dom";

const RecipesList = () => {
  const { recipes, filteredRecipes, searchTerm } = useRecipeStore();

  const listToRender =
    searchTerm.trim().length > 0 ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        {listToRender.map((recipe) => (
          <li key={recipe.id}>
            <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipesList;