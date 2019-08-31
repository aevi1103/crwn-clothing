import React from 'react';
import './App.css';

import { Switch, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import { selectCurrentuser } from './redux/user/user.selectors'
import { createStructuredSelector } from 'reselect'

import Header from './components/header/header.component'

import HomePage from './pages/homepage/homepage.component'
import ShopPage from './pages/shop/shop.component'
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component'
import CheckoutPage from './pages/checkout/checkout.component'

import { selectCollectionsForPreview } from './redux/shop/shop.selector'
import { checkUserSession } from './redux/user/user.action'

class App extends React.Component {

  unSubscribeFromAuth = null;
  
  componentDidMount() {

    const { checkUserSession } = this.props;
    checkUserSession();

    //usinf observables in firebase
    // this.unSubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);
    //     userRef.onSnapshot(snapShot => {

    //       setCurrentUser({
    //         id: snapShot.id,
    //         ...snapShot.data()
    //       })

    //     });

    //   } else {
    //     setCurrentUser(userAuth);
    //   }
      
    //   // addCollectionAndCocuments('collections', collectionsArray.map(({title, items}) => ({title, items})))
    // })
  }
  
  componentWillUnmount() {
    this.unSubscribeFromAuth();
  }
  
  render() {

    const { currentUser } = this.props;

    return (
      <div>
        <Header/>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/checkout" component={CheckoutPage} />
          <Route exact path="/signin" 
            render={() => currentUser 
                          ? (<Redirect to='/'/>)
                          : (<SignInAndSignUpPage/>)
                        } />
        </Switch>
      </div>
    );
  }

}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentuser,
  collectionsArray: selectCollectionsForPreview
})

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
})

export default  connect(mapStateToProps, mapDispatchToProps)(App);

