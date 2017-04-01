import React,{Component} from 'react'
import Header from './Header'
import Footer from './Footer'

class Home extends React.Component{
  render(){
    return(
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    )
  }
}

export default Home;
