import React,{useEffect, useDispatch} from 'react';
import { connect } from 'react-redux';

import { loadRecipes } from '../store/actions';
import Recipes from './Recipes'

const  UserPage=(props)=> {
    console.log(props)
    return (
        <div>
            <h1>Hello, user</h1>
            <Recipes recipes={props.recipes}/>
        </div>
    )
};
const mapStateToProps=(state)=>{
    return( state );
}
export default connect(mapStateToProps,{loadRecipes})(UserPage)