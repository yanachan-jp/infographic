import React from 'react';
import Header from './Components/header'
import WheelDiameter from './Components/wheelDiameter';
import WheelDurometer from './Components/wheelDurometer';
import ContactPatch from './Components/contactPatch';
import Footer from './Components/footer'
import './App.css'

function App() {
  return (
    <div className= "App">
      <Header/>
      <WheelDiameter/>
      <WheelDurometer/>
      <ContactPatch/>
      <Footer/>
    </div>
  );
}

export default App;
