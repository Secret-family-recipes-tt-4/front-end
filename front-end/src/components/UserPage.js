import React, { useEffect, useDispatch } from "react";
import { connect } from "react-redux";

import { loadRecipes } from "../store/actions";
import Recipes from "./Recipes";

<<<<<<< HEAD
const  UserPage=(props)=> {
    props.dispatch(loadRecipes());
=======
const UserPage = (props) => {
    console.log(props);
    useEffect(() => {
        props.loadRecipes();
    }, []);
>>>>>>> 13aff3f2c198b311e520ced9798cca805c035a78
    return (
        <div>
            <h1>Hello, user</h1>
            <Recipes recipes={props.recipes} />
        </div>
    );
};
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { loadRecipes })(UserPage);
