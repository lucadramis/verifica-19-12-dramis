import React, { Component } from 'react';
import './App.css';
import Photo from './components/body'
import Header from './components/header'
import Footer from './components/footer'

class App extends Component {
  render() {
    return (
      <div >
        
         <Header/>           
          <Photo/>
          <Footer/>
      </div>
    );
  }
}

export default App;
