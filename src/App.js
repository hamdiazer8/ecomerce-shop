import React ,{Component} from 'react';
import HomePage from './pages/homepage/homepage.component';
import {Route,Switch } from  'react-router-dom';
import ShopPage from './pages/shop/shop.component';
import './App.css'
	



class App extends Component {
  constructor(){
    super();
    this.state={}

  }

  render(){
  return (<div>
  	<Switch>
  	<Route exact  path='/' component={HomePage}/>
  	<Route  path='/shop' component={ShopPage}/>
  	</Switch>
  </div>
  )
 }
}

export default App;
