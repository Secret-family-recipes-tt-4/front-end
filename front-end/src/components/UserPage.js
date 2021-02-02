import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { loadRecipes } from "../store/actions";
import Recipes from "./Recipes";

const UserPage = (props) => {
    const [filteredRecipes, setFilteredRecipes] = useState(props.recipes);
    useEffect(() => {
        props.loadRecipes();
    }, []);

    const handleSearchChange = (e) => {
        const searchWord = e.target.value;
        if (searchWord.length >= 3) {
            const filtered = props.recipes.filter((recipe) => {
                if (
                    recipe.title.toLowerCase().includes(searchWord) ||
                    recipe.categories.toLowerCase().includes(searchWord)
                ) {
                    return recipe;
                }
            });
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(props.recipes);
        }
    };

    return (
        <div>
            <h1>Hello, user</h1>
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    name="search"
                    onChange={handleSearchChange}
                />
            </form>
            <Recipes recipes={filteredRecipes} />
        </div>
    );
};
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { loadRecipes })(UserPage);
