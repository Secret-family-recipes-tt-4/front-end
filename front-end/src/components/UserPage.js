import React,{useEffect} from 'react';
import { connect } from 'react-redux';

import { loadRecipes } from '../store/actions';

const  UserPage=(props)=> {
    props.dispatch(loadRecipes())
    return (
        <div>
            <h1>Hello, Test sebastian</h1>
        </div>
    )
};
const mapStateToProps=(state)=>{
    return( state );
}
export default connect(mapStateToProps,{loadRecipes})(UserPage)