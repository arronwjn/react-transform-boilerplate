import React,{Component} from 'react'
import Header from './Header'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
      </div>
    )
  }
}

export default Home;
