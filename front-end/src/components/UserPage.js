import React from 'react';
import { connect } from 'react-redux';
const  UserPage=(props)=> {
    console.log(props)
    return (
        <div>
            <h1>Hello, User</h1>
        </div>
    )
};
const mapStateToProps=(state)=>{
    return state;
}
export default connect(mapStateToProps,{})(UserPage)