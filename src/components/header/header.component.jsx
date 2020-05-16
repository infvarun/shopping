import React from "react";
import { Link } from "react-router-dom";
//import firebase auth to implemetn signout
import { auth } from "../../firebase/firebase.util";

import './header.styles.scss';
import { ReactComponent as Logo } from "../../assets/crown.svg";


const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">SHOP</Link>
            <Link className="option" to="/contact">CONTACT</Link>

            {
                // render conditional signin - signout
                 currentUser 
                 ? <Link className="option" to="" onClick={ () => { auth.signOut()} }> {(currentUser.displayName).toUpperCase()} ❌</Link>
                 : <Link className="option" to="/signin">SIGN IN</Link>
            }
        </div>
    </div>
);

export default Header;