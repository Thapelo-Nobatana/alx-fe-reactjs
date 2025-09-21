// src/components/DeleteRecipeButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

export default function DeleteRecipeButton({ recipeId }) {
  const deleteRecipe = useRecipeStore((s) => s.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    const ok = window.confirm('Are you sure you want to delete this recipe?');
    if (!ok) return;
    deleteRecipe(recipeId);
    // navigate back to list
    navigate('/recipes');
  };

  return (
    <button
      onClick={handleDelete}
      style={{ marginLeft: 8, background: 'red', color: 'white' }}
    >
      Delete
    </button>
  );
}