import React, { useState } from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { submitRecipe } from "./store/actions";

function New(props) {
    const [recipeData, setRecipeData] = useState({
        title: "", // string, required
        source: "", // string, optional
        ingredients: "", // text, required
        instructions: "", // text, required
        notes: "", // text, optional
        categories: [1], // array of category ids*, optional
    });
    const history = useHistory();
    const state = useSelector((state) => state);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmitNewRecipe = (e) => {
        e.preventDefault();
        //dispatch and action to the reducer
        dispatch(submitRecipe(recipeData));
        history.push("/");
    };
    return (
        <div>
            <h1>This is my New page</h1>
            <Form>
                <Form.Group className="form-group">
                    <Form.Label>Recipe Name: </Form.Label>
                    <Form.Control
                        name="title"
                        value={recipeData.title}
                        onChange={handleChange}
                        type="Recipe Name"
                        placeholder="Recipe Name"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="form-group">
                    <Form.Label>Recipe Source: </Form.Label>
                    <Form.Control
                        name="source"
                        value={recipeData.source}
                        onChange={handleChange}
                        type="name"
                        placeholder="Source"
                    />
                    <Form.Text className="text-muted"></Form.Text>
                </Form.Group>

                <Form.Group className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Ingredients:{" "}
                    </label>
                    <textarea
                        name="ingredients"
                        value={recipeData.ingredients}
                        onChange={handleChange}
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows="5"
                    />
                </Form.Group>

                <Form.Group className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">
                        Instructions:{" "}
                    </label>
                    <textarea
                        className="form-control"
                        name="instructions"
                        value={recipeData.instructions}
                        onChange={handleChange}
                        id="exampleFormControlTextarea1"
                        rows="5"
                    />
                </Form.Group>
                <Form.Group className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Notes: </label>
                    <textarea
                        className="form-control"
                        name="notes"
                        value={recipeData.notes}
                        onChange={handleChange}
                        id="exampleFormControlTextarea1"
                        rows="5"
                    />
                </Form.Group>

                <div className="dropdown">
                    <button
                        className="btn btn-secondary dropdown-toggle"
                        type="button"
                        id="dropdownMenuButton"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Categories
                    </button>
                    <div
                        className="dropdown-menu"
                        name="category"
                        aria-labelledby="dropdownMenuButton"
                    >
                        <p className="dropdown-item" value={1}>
                            Breakfast
                        </p>
                        <p className="dropdown-item" value={2}>
                            Lunch
                        </p>
                        <p className="dropdown-item" value={3}>
                            Dinner
                        </p>
                        <p className="dropdown-item" value={4}>
                            Vegetarian
                        </p>
                        <p className="dropdown-item" value={5}>
                            Vegan
                        </p>
                        <p className="dropdown-item" value={6}>
                            Gluten-Free
                        </p>
                    </div>
                </div>
            </Form>
            <div>
                <button
                    className="btn btn-success"
                    type="submit"
                    onClick={handleSubmitNewRecipe}
                >
                    Submit Recipe
                </button>
            </div>
        </div>
    );
}
const mapStateToProps = (state) => {
    return state;
};

export default connect(mapStateToProps(), { submitRecipe })(New);
