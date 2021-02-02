import React, { useEffect, useDispatch } from "react";
import { connect } from "react-redux";

import { loadRecipes } from "../store/actions";
import Recipes from "./Recipes";

const UserPage = (props) => {

    useEffect(() => {
        props.loadRecipes();
    }, []);
    return (
        <div>
            <h1>Hello, user</h1>
            <Recipes recipes={props.recipes} />
            <h1>This is my Homepage</h1>
            <Card className='mb-10'>
                <Card.Body img src='https://picsum.photos/200/300'>
                    
                    <Card.Text>
                        <h1>This is a new recipie</h1>
                    </Card.Text>
                        <button className='editbtn' class='btn' style={{marginLeft: 2 }} >Edit</button>
                
                        <button className='deletebtn' class='btn'>Delete</button>
                </Card.Body>
            </Card>


        </div>
    );
};
const mapStateToProps = (state) => {
    return state;
};
export default connect(mapStateToProps, { loadRecipes })(UserPage);
