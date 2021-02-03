import React, { useEffect, useState } from "react";
import { connect } from "react-redux";

import { loadRecipes } from "../store/actions";
import Recipes from "./Recipes";

const UserPage = (props) => {
    const [filteredRecipes, setFilteredRecipes] = useState(props.recipes);
    const [searchWord, setSearchWord] = useState("");
    useEffect(() => {
        props.loadRecipes();
    }, []);

    useEffect(() => {
        setFilteredRecipes(props.recipes);
        setSearchWord("");
    }, [props.recipes]);

    useEffect(() => {
        if (searchWord.length >= 3) {
            const filtered = props.recipes.filter((recipe) => {
                if (
                    recipe.title.toLowerCase().includes(searchWord) ||
                    recipe.categories.toLowerCase().includes(searchWord)
                ) {
                    return recipe;
                }
                return null;
            });
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(props.recipes);
        }
    }, [props.recipes, searchWord]);

    const handleSearchChange = (e) => {
        setSearchWord(e.target.value);
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchWord.length >= 3) {
            const filtered = props.recipes.filter((recipe) => {
                if (
                    recipe.title.toLowerCase().includes(searchWord) ||
                    recipe.categories.toLowerCase().includes(searchWord)
                ) {
                    return recipe;
                }
                return null;
            });
            setFilteredRecipes(filtered);
        } else {
            setFilteredRecipes(props.recipes);
        }
    };

    if (props.isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h1>Hello, user</h1>
<<<<<<< HEAD
            <Recipes recipes={props.recipes} />
            <h1>This is my Homepage</h1>
            <Card className='mb-10'>
                <Card.Body img src='https://picsum.photos/200/300'>
                    
                    <Card.Text>
                        <h1>This is a new recipe</h1>
                    </Card.Text>
                        <button className='editbtn' class='btn' style={{marginLeft: 2 }} >Edit</button>
                
                        <button className='deletebtn' class='btn'>Delete</button>
                </Card.Body>
            </Card>


=======
            <form className="d-flex">
                <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    name="search"
                    value={searchWord}
                    onChange={handleSearchChange}
                />
                <button
                    className="btn btn-success"
                    type="submit"
                    onClick={handleSearch}
                >
                    Search
                </button>
            </form>
            <Recipes recipes={filteredRecipes} />
>>>>>>> 0f3ddb66b26c0441aa106d2dde001b77f3b32b7a
        </div>
    );
};
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { loadRecipes })(UserPage);
