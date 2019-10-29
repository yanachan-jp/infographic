import React from 'react';
import './wheelDiameter.css'
import outlineWheel from '../Assets/Skateboard Wheel outline.svg'


const WheelDiameter
 = () => {
    return ( 
        <div className='WheelDiameter'>
        <h2>Wheel Diameter</h2>
    

<div className='WheelDiagram-container'>
<div>
    <img className='outlineWheel1' src={outlineWheel} alt="skateboard wheel" />
    <div className='wheelSize'>48mm</div>
</div>
<div>

        <img className='outlineWheel2' src={outlineWheel} alt="skateboard wheel" />
        <div className='wheelSize'>52mm</div>
</div>
        <div>
        <img className='outlineWheel3' src={outlineWheel} alt="skateboard wheel" />
        <div className='wheelSize'>56mm</div>
        </div>

<div>
<img className='outlineWheel4' src={outlineWheel} alt="skateboard wheel" />
        <div className='wheelSize'>60mm</div>

        <div class='line'></div>
</div>
  
    




</div>
       
        
        <p>
        In addition to size variations, skateboard wheels also come in different shapes, or cuts, including narrow or wide lip, and cruiser wheel shape. If you’re looking for a ride with less friction and weight, the narrow lip wheels are the way to go, and can help you master that next trick because they’re much more responsive to quick movements.
        </p>

        </div>
      
     );
}
 
export default WheelDiameter
;