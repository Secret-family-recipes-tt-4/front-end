import {
    AXIOS_START,
    AXIOS_FAIL,
    LOAD_RECIPES_SUCCESS,
    EDIT_RECIPE_SUCCESS,
    DELETE_RECIPE_SUCCESS,
    SUBMIT_RECIPE_SUCCESS,
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
        case SUBMIT_RECIPE_SUCCESS: //submit recipe doesn`t change isloading because API doesnt return submitted recipe. after every SUBMIT_RECIPE, LOAD_RECIPES must be called.
            return { ...state, isLoading: true };
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
            const updatedRecipes = state.recipes.filter(
                (recipe) => recipe.id !== action.payload
            );
            return { ...state, recipes: updatedRecipes, isLoading: false };
        default:
            return state;
    }
};
