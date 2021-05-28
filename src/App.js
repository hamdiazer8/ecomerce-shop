import React ,{Component} from 'react';
import HomePage from './pages/homepage/homepage.component';



class App extends Component {
  constructor(){
    super();
    this.state={}

  }

  render(){
  return (<div>
    <HomePage/>
    
  </div>
  )
 }
}

export default App;
