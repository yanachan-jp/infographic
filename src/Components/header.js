import React from 'react';
import Wheel from '../Assets/wheels-selfie-stick-52-mm.jpg'
import './header.css'

const Header = () => {
    return ( 
        <div className= "Header">
            <h1 className= 'tracking-in-contract'>Skateboard Wheel Guide</h1>
            <img className='skateboardWheel' src={Wheel} alt="skateboard wheel" />
        </div>
     );
}
 
export default Header;