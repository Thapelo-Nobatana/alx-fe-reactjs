import create from 'zustand';

const useRecipeStore = create((set) => ({
 recipes: [
        {
      id: '1',
      title: 'Spaghetti Bolognese',
      description: 'Classic Italian pasta with meat sauce',
      ingredients: ['Spaghetti', 'Ground beef', 'Tomato sauce'],
      steps: ['Boil pasta', 'Cook beef', 'Mix and serve'],
    },
 ],
 searchTerm: '',
 filteredRecipes: [],
 favorites: [],
 recommendations: [],
 addRecipe: (newRecipe) => set((state) => ({ recipes: [ ...state.recipes, newRecipe ] })),
 setRecipes: (recipes) => set({ recipes }),
 deleteRecipe: (id) => set((state) => ({ recipes: state.recipes.filter((recipe) => recipe.id !== id)})),
 updateRecipe: (id, updatedRecipe) => set((state) => ({recipes: state.recipes.map((recipe) => recipe.id === id ? { ...recipe, ...updatedRecipe } : recipe)})),
 setSearchTerm: (term) => set({searchTerm: term}),
 filterRecipes:() => set(state => ({ 
    filteredRecipes: state.recipes.filter(recipe => recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())),
 
 })),
addFavorite: (recipeId) => set( state => ({ favorites: [ ...state.favorites, recipeId] })),
removeFavorite: (recipeId) => set(state => ({ favorites: state.addFavorite.filter( id => id !== recipeId) })),
generateRecommendations: () => set(state => { 
    const recommended = state.recipes.filter( recipe => state.favorites.includes(recipe.id) && Math.random() > 0.5 );
    return { recommendations: recommended }
})
}));


export default useRecipeStore;