import React  from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch } from  'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signin-and-signup.component';
import './App.css';
import Header from './components/header/header.component';
import {Redirect} from 'react-router-dom';
import {selectCurrentUser} from './redux/user/user.selectors'

import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {connect} from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';
import {createStructuredSelector} from 'reselect';
import CheckoutPage from './pages/checkout/checkout-page.component';




	



class App extends React.Component {
  unsubscribeFromAuth= null;
  componentDidMount(){
    const {setCurrentUser}=this.props;
    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
       setCurrentUser({
            id:snapShot.id,
            ...snapShot.data()
        })});
        } else {
        setCurrentUser(userAuth)
       }})

    
  }

   
    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
   

  render(){
  return (<div>
    <Header />
  	<Switch>
  	<Route exact  path='/' component={HomePage}/>
  	<Route  path='/shop' component={ShopPage}/>
    <Route exact path='/signin' render={()=>this.props.currentUser ? (<Redirect to='/' />):(<SignInAndSignUpPage/>)}/>
    <Route  exact path='/checkout' component={CheckoutPage}/>

  	</Switch>
  </div>
  )
 }

}
const mapStateToProps=createStructuredSelector({
  currentUser:selectCurrentUser,
 
})

const mapDispatchToProps=dispatch =>({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps,mapDispatchToProps)(App);
