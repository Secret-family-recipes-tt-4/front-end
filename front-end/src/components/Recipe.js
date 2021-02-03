import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRecipe, editRecipe } from "../store/actions";

export default function Recipe({ recipe }) {
    const dispatch = useDispatch();

    const handleDelete = (e) => {
        e.preventDefault();
        console.log("delete");
        dispatch(deleteRecipe(recipe.id));
    };
   
    return (
        <div>
            <Card className="mb-10">
                <Card.Body>
                    <h1>{recipe.title}</h1>
                    <h2>Source: {recipe.source}</h2>
                    <h3>Category: {recipe.categories}</h3>
                    <Card.Text>
                        <ul>
                        <li>ingredients: {recipe.ingredients}</li>
                        <li> instructions: {recipe.instructions}</li>
                        <li> notes: {recipe.notes}</li>
                        </ul>
                    </Card.Text>
                    <button className="editbtn" style={{ marginLeft: 2 }}>
                        Edit
                    </button>

                    <button
                        className="deletebtn"
                        onClick={handleDelete}
                        style={{ marginLeft: 20 }}
                    >
                        Delete
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}

