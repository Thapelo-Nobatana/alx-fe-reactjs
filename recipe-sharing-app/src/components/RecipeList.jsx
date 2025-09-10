import { useRecipeStore } from '/Projects/alx-webFrontend/recipe-sharing-app/src/store/recipeStore';

const RecipeList = () => {
    const recipes = useRecipeStore(state => state.recipes);

    return (
        <div>
            {
                recipes.map(recipe => ( 
                    <div key={recipe.id}>
                        <h3>{recipe.title}</h3>
                        <p>{recipe.description}</p>
                    </div>
                ))
            }
        </div>
    )
}

export default RecipeList;
