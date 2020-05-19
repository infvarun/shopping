import React, { Component } from "react";

import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component"

import { auth, createUserProfileDocument } from "../../firebase/firebase.util";

import "./sign-up.styles.scss";

class SignUp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        };
    }

    // Custom handler Handle Submit method for signup form button
    handleSubmit = async (event) => {
        //prevent default event of submit button
        event.preventDefault();
        // destructure state
        const { displayName, email, password, confirmPassword } = this.state;
        //Password and confirmPassword should match
        if(password !== confirmPassword) {
            alert("Password doesn't match!");
            return;
        }

        try {
            const { user } = await auth.createUserWithEmailAndPassword( email, password);
            createUserProfileDocument(user, {displayName});
            this.setState({ 
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
             });
        } catch (error) {
            console.error(error);
        }
    }

    // Handler for change in form input
    handleChange = (event) => {
        const {name, value} = event.target;

        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign Up with your email and password</span>
                <form className="sign-up-form" onSubmit={ this.handleSubmit }>
                    <FormInput
                        type="text"
                        name="displayName"
                        value={ this.state.displayName }
                        onChange={ this.handleChange }
                        label="Enter Display Name"
                        required 
                    />

                    <FormInput
                        type="email"
                        name="email"
                        value={ this.state.email }
                        onChange={ this.handleChange }
                        label="Enter Email"
                        required 
                    />

                    <FormInput
                        type="password"
                        name="password"
                        value={ this.state.password }
                        onChange={ this.handleChange }
                        label="Enter Password"
                        required 
                    />
                    <FormInput
                        type="password"
                        name="confirmPassword"
                        value={ this.state.confirmPassword }
                        onChange={ this.handleChange }
                        label="Enter Password again"
                        required 
                    />

                    <CustomButton type="submit" onSubmit={ this.handleSubmit }>
                        SIGN UP
                    </CustomButton>
                </form>

            </div>
        )
    }
}

export default SignUp;