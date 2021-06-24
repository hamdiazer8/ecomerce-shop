import React ,{Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch } from  'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/signin-and-signup.component';
import './App.css';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import {setCurrentUser} from './redux/user/user.actions'



	



class App extends Component {
  constructor(){
    super();
    this.state={currentUser: null}


  }
  unsubscribeFromAuth= null;
  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged( async userAuth=>{
      if(userAuth){
      const userRef = await createUserProfileDocument(userAuth);
      userRef.onSnapshot(snapShot=>{
        this.setState({
          currentUser:{
            id:snapShot.id,
            ...snapShot.data()
          } 
        });
      })} else {
        this.setState({currentUser:userAuth})
       }
    })
   
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
    <Route  path='/signin' component={SignInAndSignUpPage}/>

  	</Switch>
  </div>
  )
 }
}
const mapDispatchToProps=dispatch =>({
  setCurrentUser:user =>dispatch(setCurrentUser(user))
})

export default connect(null,mapDispatchToProps)(App);
