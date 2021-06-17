import React ,{Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch } from  'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signin-and-signup.component';
import './App.css';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';


	



class App extends Component {
  constructor(){
    super();
    this.state={currentUser: null}


  }
  unsubscribeFromAuth= null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
      createUserProfileDocument(userAuth)
    })
  }

    componentWillUnmount(){
      this.unsubscribeFromAuth();
    }
   

  render(){
  return (<div>
    <Header currentUser={this.state.currentUser} />
  	<Switch>
  	<Route exact  path='/' component={HomePage}/>
  	<Route  path='/shop' component={ShopPage}/>
    <Route  path='/signin' component={SignInAndSignUpPage}/>

  	</Switch>
  </div>
  )
 }
}

export default App;
