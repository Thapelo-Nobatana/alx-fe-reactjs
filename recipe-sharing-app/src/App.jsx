import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useParams,
} from "react-router-dom";

import RecipesList from "./components/RecipesList";
import RecipeDetails from "./components/RecipeDetails";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm";

function RecipeDetailsWrapper() {
  const { id } = useParams();
  return <RecipeDetails recipeId={id} />;
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <a href="/recipes">Go to recipes</a>
            </div>
          }
        />
        <Route path="/recipes" element={<RecipesList />} />
        <Route path="/recipes/:id" element={<RecipeDetails />} />
        <Route path="/recipes" element={ <div>
           <SearchBar />
           <RecipesList />
           </div>} />
                     <Route path="/add-recipe" element={<AddRecipeForm />} />
      </Routes>
    </Router>
  );
}
