import React from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './Home'
import Login from './Login'
import New from './New'
function Header() {
    return (
    <div>

        <nav className="navbar navbar-light bg-light navbar-expand-lg fixed top" >
            {/* <Link to="/">Secret Family Recipies</Link> */}
            <button 
            className="navbar-toggler" 
            data-toggle="collapse" 
            data-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <ul className="navbar-nav ml-left">
                    <li className="navbar-item">
                        <Link to="/" 
                        className="nav-link">
                            Home</Link>
                    </li>
                        
                    <li className="navbar-item">
                        
                        <Link to="/Login" 
                        className="nav-link">
                            Login</Link>
                        
                    </li>
                    <li className="navbar-item">
                        <Link to="/New"
                         className="nav-link">
                             New Recipies</Link>
                         
                    </li>
                </ul>
            </div>
            <form className="d-flex">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
        </nav>
                        
                        


        <Route exact path="/">
            <Home />
        </Route>
        <Route path="/Login">
            <Login />
        </Route>
        <Route path="/New">
            <New />
        </Route>

            
        
    </div> 
    )
}

export default Header
