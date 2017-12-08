import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = (props) => {
    return (
        <nav className="navbar navbar-toggleable-md" style={{backgroundColor: "blue", color: "white"}}>
            <div className="container-fluid">
                <a className="navbar-item"> E-Commerce </a>
                <span><i className="material-icons" style={{"fontSize": 35}}>shopping_cart</i></span>
            </div>
        </nav>
    )
}

export default Navbar;