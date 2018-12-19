import React, { Component } from 'react';
import './App.css';
import Photo from './components/body'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div >
        <header >
         <Header/>           
        </header>
        <body>
          <Photo/>

        </body>
        <footer>

        </footer>

      </div>
    );
  }
}

export default App;
