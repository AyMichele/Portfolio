import React from 'react';
import logo from './logo.svg';
import Selection from './selectionWindow/selectionMask';
import './index.css';

const welcomeStyle = {
  height: "100vh",
}

const selectionStyle = {
  height: "100vh",
}

function App() {
  return (
      <div className="App">
        <div className="startWindow">
          <div className="text-center mt-5" style={welcomeStyle} >
            <h1>Hi, my name is Michele</h1>
            <h1 className="text-center mt-5" >I´m a web developer</h1>
            <div className="flex mt-5">
              <h2>My Story</h2>
              <h2>CV</h2>
            </div>
            <h1 className="text-center mt-5">↓</h1>
            <h2 className="text-center mt-5" >Here are my projects</h2>
            <h2 className="text-center mt-5">↓</h2>
          </div>
          <div style={selectionStyle} >
            <Selection />    
          </div>
        </div>
      </div>
  );
}

export default App;
