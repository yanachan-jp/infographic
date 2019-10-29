import React from 'react';
import outlineWheel from '../Assets/Skateboard Wheel outline.svg'
import './wheelDurometer.css'

const WheelDurometer
 = () => {
    return ( <div>
        <h2> Wheel Durometer</h2>

<div className='wheelDurometerContainer'>
        <img className='outlineWheelHard' src={outlineWheel} alt="skateboard wheel" />
        <img className='outlineWheelSoft' src={outlineWheel} alt="skateboard wheel" />
        </div>

<p>
Durometer measures the skateboard wheel's hardness, which can in turn specify if that particular wheel is better suited for skateboards or longboards. 
</p>
<ul>
    <li>78a-87a	Soft wheel good for rough surfaces, longboards, or street boards that need lots of grip to easily roll over cracks and pebbles. Designed for smooth rides, cruising, longboards, hills, and rough surfaces.</li>
    <li>88a-95a	Slightly harder and faster with a little less grip, but the grip's still good. Good for street and rough surfaces.</li>
    <li>96a-99a	Nice speed and grip-- an all-around good wheel. Great for beginners skating street, skate parks, ramps, pools, and other smooth surfaces.</li>
    <li>101a +	Hardest and fastest wheel with the least grip. Ineffective on slick and rough surfaces. These are pro wheels.</li>
    <li>83b-84b	Wheels using the B scale are extremely hard, measuring 20 points fewer than the A Scale in order to allow the scale to extend another 20 points for the hardest wheels.</li>

</ul>


    </div> );
}
 
export default WheelDurometer
;