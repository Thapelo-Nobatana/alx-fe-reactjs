import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useRecipeStore from '../stores/recipeStore';

export default function EditRecipeForm({ recipe, onSaved, onCancel }) {
  const updateRecipe = useRecipeStore((s) => s.updateRecipe);
  const navigate = useNavigate();

  // local form state (ingredients/steps are edited as newline-separated)
  const [title, setTitle] = useState(recipe.title || '');
  const [description, setDescription] = useState(recipe.description || '');
  const [ingredientsText, setIngredientsText] = useState(
    (recipe.ingredients || []).join('\n')
  );
  const [stepsText, setStepsText] = useState((recipe.steps || []).join('\n'));

  const handleSubmit = (event) => {
    event.preventDefault();
    const updated = {
      title,
      description,
      ingredients: ingredientsText
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
      steps: stepsText
        .split('\n')
        .map((s) => s.trim())
        .filter(Boolean),
    };

    updateRecipe(recipe.id, updated);

    if (onSaved) {
      onSaved();
    } else {
      // default behavior: go back to recipe detail
      navigate(`/recipes/${recipe.id}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label>
        <br />
        <input value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div>
        <label>Description</label>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <div>
        <label>Ingredients (one per line)</label>
        <br />
        <textarea
          rows={4}
          value={ingredientsText}
          onChange={(e) => setIngredientsText(e.target.value)}
        />
      </div>

      <div>
        <label>Steps (one per line)</label>
        <br />
        <textarea
          rows={6}
          value={stepsText}
          onChange={(e) => setStepsText(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 8 }}>
        <button type="submit">Save</button>
        <button type="button" onClick={onCancel} style={{ marginLeft: 8 }}>
          Cancel
        </button>
      </div>
    </form>
  );
}