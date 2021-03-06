/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import './wheelDiameter.css';
import outlineWheel from '../Assets/Skateboard Wheel outline.svg';


const WheelDiameter = () => (
  <div className="WheelDiameter">
    <h2>Wheel Diameter</h2>

    <div className="WheelDiagram-container">
      <div>
        <img className="outlineWheel1" src={outlineWheel} alt="skateboard wheel" />
        <div className="wheelSize" id="48mm ">48mm</div>
      </div>
      <div>

        <img className="outlineWheel2" src={outlineWheel} alt="skateboard wheel" />
        <div className="wheelSize" id="52mm">52mm</div>
      </div>
      <div>
        <img className="outlineWheel3" src={outlineWheel} alt="skateboard wheel" />
        <div className="wheelSize" id="56mm">56mm</div>
      </div>

      <div>
        <img className="outlineWheel4" src={outlineWheel} alt="skateboard wheel" />
        <div className="wheelSize" id="60mm">60mm</div>
      </div>

    </div>

    <div className="SpeedContainer">
      <p className="label">Less</p>
      <hr className="speedLine" />
      <p className="label">More</p>
      {/* <p class='label'>Speed</p> */}
    </div>


    <div className="AccelerationContainer">
      <p className="label">Quick</p>
      <hr className="accelerationLine" />
      <p className="label">Slow</p>
      {/* <p class='label'>Acceleration</p> */}
    </div>


    <p>

In addition to size variations, skateboard wheels also come in different shapes, or cuts, including narrow or wide lip, and cruiser wheel shape. If you’re looking for a ride with less friction and weight, the narrow lip wheels are the way to go, and can help you master that next trick because they’re much more responsive to quick movements.
    </p>

  </div>

);

export default WheelDiameter;
