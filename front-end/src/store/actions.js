import { axiosWithAuth } from "../utils/axiosWithAuth";
import React from 'react';

export const FETCH_START = "FETCH_START";
export const FETCH_SUCCESS = "FETCH_SUCCESS";
export const FETCH_FAIL = "FETCH_FAIL";
export const LOAD_RECIPES_SUCCESS = "LOAD_RECIPES_SUCCESS";
export const LOAD_RECIPES_FAIL = "LOAD_RECIPES_FAIL";
export const SUBMIT_RECIPE_SUCCESS = "SUBMIT_RECIPE_SUCCESS";
export const SUBMIT_RECIPE_FAIL = "SUBMIT_RECIPE_FAIL";
export const EDIT_RECIPE = "EDIT_RECIPE";

// export const submitSignUp = (username, password) => {
//     dispatch({ type: FETCH_START });
//     axios
//         .post("https://secret-fam-recipes.herokuapp.com/api/register", {
//             username: username,
//             password: password,
//         })
//         .then((response) => {
//             dispatch({ type: FETCH_SUCCESS});
//         })
//         .catch((error) => {
//             dispatch({ type: FETCH_FAIL, payload: error.data });
//         });
// };
// export const submitSignIn = (username, password) => {
//     axios
//         .post("https://secret-fam-recipes.herokuapp.com/api/login", {
//             username: username,
//             password: password,
//         })
//         .then((response) => {
//             localStorage.setItem("token", response.data.token);
//             dispatch({ type: FETCH_SUCCESS, payload: response.data });
//         });
// };
export const loadRecipes = () => {
     dispatch({ type: FETCH_START });
    axiosWithAuth()
        .get("/recipes")
        .then((response) => {
            dispatch({ type: LOAD_RECIPES_SUCCESS, payload: response.data });
        })
        .catch((error) =>
            dispatch({ type: LOAD_RECIPES_FAIL, payload: error.data })
        );
};
export const submitRecipe = (recipe) => {
    dispatch({ type: FETCH_START });
    axiosWithAuth()
        .post("/recipes", recipe)
        .then((response) => {
            dispatch({ type: SUBMIT_RECIPE_SUCCESS, payload: recipe });
        })
        .catch((error) => {
            dispatch({ type: SUBMIT_RECIPE_FAIL, payload: error.data });
        });
};
