import {
    AXIOS_START,
    AXIOS_FAIL,
    LOAD_RECIPES_SUCCESS,
    LOAD_RECIPES_FAIL,
    SUBMIT_RECIPE_SUCCESS,
    SUBMIT_RECIPE_FAIL,
    EDIT_RECIPE_SUCCESS,
    EDIT_RECIPE_FAIL,
    DELETE_RECIPE_SUCCESS,
    DELETE_RECIPE_FAIL,
} from "./actions";

const intitialState = {
    recipes: [],
    isLoading: false,
    error: null,
};

export const reducer = (state = intitialState, action) => {
    switch (action.type) {
        case AXIOS_START:
            return { ...state, isLoading: true, error: null };
        case AXIOS_FAIL:
            return { ...state, isLoading: false, error: action.payload };
        case LOAD_RECIPES_SUCCESS:
            return { ...state, recipes: action.payload, isLoading: false };
        // case LOAD_RECIPES_FAIL:
        //     return { ...state, isLoading: false, error: action.payload };
        // case SUBMIT_RECIPE_SUCCESS:
        //     return {...state, isLoading: false};
        // case SUBMIT_RECIPE_FAIL:
        //     return { ...state, isLoading: false, error: action.payload };
        case EDIT_RECIPE_SUCCESS:
            const newRecipes = state.recipes.map((recipe) => {
                if (recipe.id === action.payload.id) {
                    return action.payload;
                } else {
                    return recipe;
                }
            });
            return { ...state, recipes: newRecipes, isLoading: false };
        case DELETE_RECIPE_SUCCESS:
            const newRecipes = state.recipes.filter(
                (recipe) => recipe !== action.payload
            );
            return { ...state, recipes: newRecipes, isLoading: false };
        default:
            return state;
    }
};
