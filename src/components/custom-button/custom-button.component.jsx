import React from "react";

import './custom-button.styles.scss';

/**
 *  children are the value of component tag written within opening and closing tag 
 *  <component>children</component>
 * 
 * isGoogleSignIn boolean we have added to use it to apply custom styling if button is google
 * signin button
 * */ 
const CustomButton = ({ children, isGoogleSignIn, ...otherProps }) => (
    <button 
        className={ `${isGoogleSignIn ? 'google-sign-in' : '' } custom-button` } { ...otherProps }
    >
        { children }
    </button>
);

export default CustomButton;