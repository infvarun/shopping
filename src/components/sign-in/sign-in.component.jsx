import React, { Component } from "react";
// import custom component for form
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

import { auth, signInWithGoogle } from "../../firebase/firebase.util";

import './sign-in.styles.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };
    }

    //custom method to handle form submit
    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password }= this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            // clear out fields on submit
            this.setState({ email: '', password: '' });

        } catch (error) {
            console.error(error);
        }

        
    }

    // custom method to handle change in input fields
    handleChange = (event) => {
        // destructure value and target name from event target
        const { value, name } = event.target;
        // dynamicaly set whatever target name either email or password the value on change
        this.setState({ [name]: value });

    }

    render() {
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign In with your email and password</span>

                <form onSubmit={this.handleSubmit}>

                    <FormInput 
                        name="email" 
                        type="email" 
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="Email"
                        required 
                    />

                    <FormInput 
                        name="password" 
                        type="password" 
                        value={this.state.password}
                        handleChange={this.handleChange}
                        label="Password"
                        required 
                    />

                    <div className="buttons">
                        <CustomButton type="submit" onSubmit={ this.handleSubmit }>
                            Sign In
                        </CustomButton>

                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                            Sign In with Google
                        </CustomButton>
                    </div>
            
                </form>
            </div>
        );
    }
}

export default SignIn;