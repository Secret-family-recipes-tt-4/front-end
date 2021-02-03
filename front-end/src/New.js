import React, { useState } from "react";
import { connect } from "react-redux";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { submitRecipe, loadRecipes } from "./store/actions";

function New(props) {
    const [recipeData, setRecipeData] = useState({
        title: "", // string, required
        source: "", // string, optional
        ingredients: "", // text, required
        instructions: "", // text, required
        notes: "", // text, optional
        categories: [], // array of category ids*, optional
    });
    const history = useHistory();

    const handleChange = (e) => {
        setRecipeData({
            ...recipeData,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmitNewRecipe = (e) => {
        e.preventDefault();
        //dispatch and action to the reducer
        props.submitRecipe(recipeData);
        //!!! IMPORTANT !!!
        //submit recipe doesn`t change isloading to True because API doesnt return submitted recipe.
        //when SUBMIT_RECIPE called, LOAD_RECIPES must be called afterwards.
        props.loadRecipes();
        history.push("/User-page");
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
                            Dessert
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

export default connect(mapStateToProps(), { submitRecipe, loadRecipes })(New);
