 import { useRecipeStore } from './recipeStore';
 import AddRecipeForm from './AddRecipeForm';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );
   const { favorites, addFavorite, removeFavorite } = useRecipeStore()
    const handleDelete = useRecipeStore((state) => state.deleteRecipe);
    const isFavorite = favorites.includes(recipeId);
    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <AddRecipeForm />
        <button onClick={handleDelete}>Delete Recipe</button>
        <button
         onClick={() => isFavorite ? removeFavorite(recipeId) : addFavorite(recipeId)}
        >
            { isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    );
  };

  export default RecipeDetails;