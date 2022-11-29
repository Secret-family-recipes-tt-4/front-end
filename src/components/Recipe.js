import React, { useState } from "react";
// import { connect } from 'react-redux'
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import {
  deleteRecipe,
  editRecipe,
  //   submitRecipe,
  loadRecipes,
} from "../store/actions";

const Recipe = ({ recipe }) => {
  const dispatch = useDispatch();

  const [isEdit, toggleIsEdit] = useState(false);
  //toggling this will open a new component that is passed props from this one

  // const [recipeToEdit,setRecipeToEdit]=useState(recipe);
  //this state will determine which recipe is being passed to edit menu

  const [editRecipeData, setEditRecipeData] = useState({
    title: recipe.title,
    source: recipe.source,
    ingredients: recipe.ingredients,
    instructions: recipe.instructions,
    notes: recipe.notes,
    categories: [1],
  });

  const handleDelete = (e) => {
    e.preventDefault();
    console.log("delete");
    dispatch(deleteRecipe(recipe.id));
  };
  const handleEdit = (e) => {
    toggleIsEdit(!isEdit);
    console.log(recipe.id);
  };
  const handleEditChange = (e) => {
    setEditRecipeData({
      ...editRecipeData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmitNewRecipe = (e) => {
    e.preventDefault();
    dispatch(editRecipe(recipe.id, editRecipeData));
    dispatch(loadRecipes());
  };

  return (
    <div>
      <Card className="mb-10">
        <Card.Body>
          <h1>{recipe.title}</h1>
          {isEdit && (
            <input
              type="text"
              name="title"
              value={editRecipeData.title}
              onChange={handleEditChange}
            />
          )}
          <h2>Source: {recipe.source}</h2>
          {isEdit && (
            <input
              type="text"
              name="source"
              value={editRecipeData.source}
              onChange={handleEditChange}
            />
          )}
          <h3>Category: {recipe.categories}</h3>
          <Card.Text>
            <ul>
              <li>ingredients: {recipe.ingredients}</li>
              {isEdit && (
                <input
                  type="text"
                  name="ingredients"
                  value={editRecipeData.ingredients}
                  onChange={handleEditChange}
                />
              )}
              <li> instructions: {recipe.instructions}</li>
              {isEdit && (
                <input
                  type="text"
                  name="instructions"
                  value={editRecipeData.instructions}
                  onChange={handleEditChange}
                />
              )}
              <li> notes: {recipe.notes}</li>
              {isEdit && (
                <input
                  type="text"
                  name="notes"
                  value={editRecipeData.notes}
                  onChange={handleEditChange}
                />
              )}
            </ul>
          </Card.Text>
          <button
            onClick={handleEdit}
            className="editbtn"
            style={{ marginLeft: 2 }}
          >
            Edit
          </button>

          <button
            className="deletebtn"
            onClick={handleDelete}
            style={{ marginLeft: 20 }}
          >
            Delete
          </button>
          <button onClick={handleSubmitNewRecipe} style={{ marginLeft: 20 }}>
            Save
          </button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Recipe;
