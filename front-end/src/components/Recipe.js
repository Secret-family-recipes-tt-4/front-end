import React from "react";
import { Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../store/actions";

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
                <Card.Body img src="https://picsum.photos/200/300">
                    <Card.Text>
                        <h1>{recipe.title}</h1>
                        <h2>Source: {recipe.source}</h2>
                        <h3>Category: {recipe.categories}</h3>
                        <p>ingredients: {recipe.ingredients}</p>
                        <p>instructions: {recipe.instructions}</p>
                        <p>notes: {recipe.notes}</p>
                    </Card.Text>
                    <button
                        className="editbtn"
                        class="btn"
                        style={{ marginLeft: 2 }}
                    >
                        Edit
                    </button>

                    <button
                        className="deletebtn"
                        class="btn"
                        onClick={handleDelete}
                    >
                        Delete
                    </button>
                </Card.Body>
            </Card>
        </div>
    );
}
