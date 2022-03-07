import React from 'react';
// import logo from './logo.svg';
import './App.css';

class App extends React.Component{
  render(){
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.PUBLIC_URL+'/assets/logo_react.png'} className="App-logo" alt="logo" />
        <h3 className='tittle'>
          Projek Pertama ReactJS
        </h3>
        <p className='subtittle'>
          coding React JS itu menyenangkan
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
  }
}

export default App;
