 import { useRecipeStore } from './recipeStore';
 import AddRecipeForm from './AddRecipeForm';

  const RecipeDetails = ({ recipeId }) => {
    const recipe = useRecipeStore(state =>
      state.recipes.find(recipe => recipe.id === recipeId)
    );

    const handleDelete = useRecipeStore((state) => state.deleteRecipe);

    return (
      <div>
        <h1>{recipe.title}</h1>
        <p>{recipe.description}</p>
        {/* Render EditRecipeForm and DeleteRecipeButton here */}
        <AddRecipeForm />
        <button onClick={handleDelete}>Delete Recipe</button>
      </div>
    );
  };

  export default RecipeDetails;