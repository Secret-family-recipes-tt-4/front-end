import { axiosWithAuth } from "../utils/axiosWithAuth";

export const AXIOS_START = "AXIOS_START";
export const AXIOS_FAIL = "AXIOS_FAIL";

//export const LOAD_RECIPES_START = "LOAD_RECIPES_START";
export const LOAD_RECIPES_SUCCESS = "LOAD_RECIPES_SUCCESS";
//export const LOAD_RECIPES_FAIL = "LOAD_RECIPES_FAIL";

//export const SUBMIT_RECIPE_START = "SUBMIT_RECIPE_START";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
//export const SUBMIT_RECIPE_FAIL = "SUBMIT_RECIPE_FAIL";

export const EDIT_RECIPE_SUCCESS = "EDIT_RECIPE_SUCCESS";
//export const EDIT_RECIPE_FAIL = "EDIT_RECIPE_FAIL";

export const DELETE_RECIPE_SUCCESS = "DELETE_RECIPE_SUCCESS";
//export const DELETE_RECIPE_FAIL = "DELETE_RECIPE_FAIL";

export const loadRecipes = () = dispatch => {
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .get("/recipes")
        .then((response) => {
            dispatch({ type: LOAD_RECIPES_SUCCESS, payload: response.data });
        })
        .catch((error) => dispatch({ type: AXIOS_FAIL, payload: error.data }));
};
export const submitRecipe = (recipe) = dispatch => {
    // doesnt need id
    dispatch({ type: AXIOS_START });
    axiosWithAuth()
        .post("/recipes", recipe)
        .then((response) => {
            loadRecipes(); //after add new recipe we need to get recipes again
            //dispatch({ type: SUBMIT_RECIPE_SUCCESS, payload: recipe });
        })
        .catch((error) => {
            dispatch({ type: AXIOS_FAIL, payload: error.data });
        });
};

export const editRecipe = (recipe) = dispatch => {
    // needs id
    dispatch({ type: AXIOS_START });

    axiosWithAuth()
        .put(`/recipes${recipe.id}`, recipe)
        .then((response) => {
            dispatch({
                type: EDIT_RECIPE_SUCCESS,
                payload: response.data.recipe[0],
            });
        })
        .catch((error) => {
            dispatch({ type: AXIOS_FAIL, payload: error.data });
        });
};

export const deleteRecipe = (recipeID) = dispatch => {
    dispatch({ type: AXIOS_START });

    axiosWithAuth()
        .delete(`recipes/${recipeID}`)
        .then((response) => {
            dispatch({ type: DELETE_RECIPE_SUCCESS, payload: recipeID });
        })
        .catch((error) => {
            dispatch({ type: AXIOS_FAIL, payload: error.data });
        });
};
