import React from 'react';
import Selection from './selectionWindow/selectionMask';
import './index.css';


const selectionStyle = {
  height: "100vh",
  width: "100%",
  position: "absolute",
  top: "0px",
}

const appStyle = {
  overflow: "hidden",
}


function App() {
  return (
      <div style={appStyle}>
        <div style={selectionStyle} >
          <Selection />    
        </div>
      </div>
  );
}

export default App;
