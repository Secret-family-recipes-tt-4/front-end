import React, { useState } from "react";
import { Route } from "react-router-dom";
import { connect } from 'react-redux';
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Sign from "./Sign";
import New from "./New";
import { Container, Col } from "react-bootstrap";
import PrivateRoute from './components/PrivateRoute';
import UserPage from './components/UserPage';

function App(props) {

  return (
    <div>
      <Header />
      <Container>
        <Col>
          <Route exact path="/">
            <Home />
          </Route>
          <PrivateRoute exact path='/User-page/:id' component={UserPage}/>
          <Route exact path="/Login">
            <Login />
          </Route>
          <Route exact path="/New">
            <New />
          </Route>
          <Route exact path="/Sign">
            <Sign />
          </Route>
        </Col>
      </Container>
    </div>
  );
}

const mapStateToProps=(state)=>{
  return state;
}
export default connect(mapStateToProps,{})(App);
