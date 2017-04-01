import React,{Component} from 'react'
import {Router,Route,browserHistory,Redirect,IndexRoute} from 'react-router';
import  Home  from './components/Home';
import Index from './components/Index';
import   './main.css'

class App extends React.Component{
  render(){
    return(
      <div>
        <Router history={browserHistory}>
          <Route path='/' component={Home}>
            <IndexRoute component={Index}/>
          </Route>
        </Router>
      </div>
    )
  }
}

export default App;
