import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import { auth, createUserProfileDocument } from "./firebase/firebase.util"; 

// Import all pages required
import HomePage  from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
//import all required components
import Header from "./components/header/header.component";

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentUser: null
    }
  }

  //create instance variable to save subscription object, we'll use this to unsubscribe
  unsubscribeFromAuth =   null;

  // subscribe to firbase user session on component
  componentDidMount() {
    // get unsubscribtion method returned from onAuthStateChanged method
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async  (userAuth) => {
      //this.setState( { currentUser: user } );
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);  

      // userRef will get latest snapshot of our document, lets get the same
      userRef.onSnapshot( (snapshot) => {
        this.setState({ 
          currentUser: {
            id: snapshot.id,
            ...snapshot.data()
          }
         });
      } );
    }
    this.setState({ currentUser: userAuth });
    } );    
  }

  //unsubscribe before component gets unmounted
  componentWillUnmount() {
    // invoke unsubscription method before unmounting component to avoid memmory leak
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
      <Header currentUser={ this.state.currentUser }/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route  path='/shop' component={ShopPage} />
          <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
