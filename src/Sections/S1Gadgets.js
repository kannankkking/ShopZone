import React from 'react'
import styles from "../css/S1Gadgets.module.css"
import { LuShoppingCart } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaLaptop } from 'react-icons/fa6';

const logo = new URL("../images/image.jpeg",import.meta.url);

// sector1//
const airpods = new URL("../images/s1_2_1airpods.jpeg",import.meta.url);
const headphone = new URL("../images/s1_2_1headphone.jpeg",import.meta.url);
const laptop = new URL("../images/s1_2_1laptop.jpeg",import.meta.url);
const remote= new URL("../images/s1_2_1remote.jpeg",import.meta.url);
const smart = new URL("../images/s1_2_1smart.jpeg",import.meta.url);
const wired = new URL("../images/s1_2_1wired.jpeg",import.meta.url);


// sector2//
const aroma= new URL("../images/s1_2_2aroma.jpeg",import.meta.url);
const boat = new URL("../images/s1_2_2boat.jpeg",import.meta.url);
const number = new URL("../images/s1_2_2number.jpeg",import.meta.url);
const speaker= new URL("../images/s1_2_2speaker.jpeg",import.meta.url);
const zebronics = new URL("../images/s1_2_2zebronics.jpeg",import.meta.url);
const boult = new URL("../images/s1_2_2boult.jpeg",import.meta.url);

// sector3//
const camera3= new URL("../images/s1_2_3camera.jpeg",import.meta.url);
const gamepad = new URL("../images/s1_2_3gamepad.jpeg",import.meta.url);
const keyboard = new URL("../images/s1_2_3keyboard.jpeg",import.meta.url);
const mini= new URL("../images/s1_2_3mini.jpeg",import.meta.url);
const mouse = new URL("../images/s1_2_3mouse.jpeg",import.meta.url);
const tab3= new URL("../images/s1_2_3tab.jpeg",import.meta.url);

// sector4//
const charger= new URL("../images/s1_2_4charger.jpeg",import.meta.url);
const camera4 = new URL("../images/s1_2_4camera.jpeg",import.meta.url);
const laptop4 = new URL("../images/s1_2_4laptop.jpeg",import.meta.url);
const otg= new URL("../images/s1_2_4otg.jpeg",import.meta.url);
const smart4 = new URL("../images/s1_2_4smart.jpeg",import.meta.url);
const tab4 = new URL("../images/s1_2_4tab.jpeg",import.meta.url);

// sector5//
const holder= new URL("../images/s1_2_5holder.jpeg",import.meta.url);
const power = new URL("../images/s1_2_5power.jpeg",import.meta.url);
// const laptop4 = new URL("../images/s1_2_4laptop.jpeg",import.meta.url);
// const otg= new URL("../images/s1_2_4otg.jpeg",import.meta.url);
// const smart4 = new URL("../images/s1_2_4smart.jpeg",import.meta.url);
// const tab4 = new URL("../images/s1_2_4tab.jpeg",import.meta.url);

const S1Gadgets = () => {
  return (
    <div id={styles.heading}>
        <div className={styles.Header}>
     <div className={styles.navbar}> 
    <img src={logo}/>
  <input type='text'placeholder='Search for products, Brands and More'/>


<select >
 <option className={styles.login}>Login</option> 
  <option>New Customer ?</option>
  <option>My Profile</option>
  <option>Wishlist</option>
</select>

<button><LuShoppingCart id={styles.icon}/>Cart</button>

<BsThreeDotsVertical className={styles.icon} />

    </div>
    </div>
{/* sector1 */}

<h1></h1>
    <div className={styles.sector1}>

  <div className={styles.set1}>
     <img src={airpods}/><CiHeart className={styles.heart}/>
      <h5> Boult Airpods</h5>
     <p>4.5*</p>
     <span>$30</span>
  </div>

  <div className={styles.set1}>
  <img src={headphone}/><CiHeart className={styles.heart}/>
  <h5>Wireless Headphones</h5>
  <p>4.5*</p>
  <span>$45</span>
  </div>

  <div className={styles.set1}>
  <img src={laptop}/><CiHeart className={styles.heart}/>
  <h5>Asus Laptop<br/>(256 GB)</h5>
  <p>4.5*</p>
  <span>$50.000</span>
  </div>

  <div className={styles.set1}>
  <img src={remote}/><CiHeart className={styles.heart}/>
  <h5>LED Tv Remote</h5>
  <p>4.5*</p>
  <span>$10</span>
  </div>

  <div className={styles.set1}>
  <img src={smart}/><CiHeart className={styles.heart}/>
  <h5>Smart Watch</h5>
  <p>4.2*</p>
  <span>$35</span>
  </div>


  <div className={styles.set1}>
  <img src={wired}/> <CiHeart className={styles.heart}/>
  <h5>Boat wired Headset</h5>
  <p>4.3*</p>
  <span>$25</span>
  </div>

</div>


{/* sector2 */}

<div className={styles.sector2}>

<div className={styles.set2}>
   <img src={aroma}/><CiHeart className={styles.heart}/>
    <h5>Aroma Airpods</h5>
   <p>4.2*</p>
   <span>$30</span>
</div>

<div className={styles.set2}>
<img src={boat}/><CiHeart className={styles.heart}/>
<h5>Boat Headphone Wirless</h5>
<p>4.1*</p>
<span>$45</span>
</div>

<div className={styles.set2}>
<img src={number}/><CiHeart className={styles.heart}/>
<h5>Number Airpods</h5>
<p>4.4*</p>
<span>$50.000</span>
</div>

<div className={styles.set2}>
<img src={speaker}/><CiHeart className={styles.heart}/>
<h5>Wirless Speaker</h5>
<p>4.5*</p>
<span>$10</span>
</div>

<div className={styles.set2}>
<img src={zebronics}/><CiHeart className={styles.heart}/>
<h5>Zebronics</h5>
<p>4.2*</p>
<span>$35</span>
</div>


<div className={styles.set2}>
<img src={boult}/> <CiHeart className={styles.heart}/>
<h5>Boult</h5>
<p>4.3*</p>
<span>$25</span>
</div>

</div>



{/* sector3 */}

<div className={styles.sector3}>

<div className={styles.set3}>
   <img src={camera3}/><CiHeart className={styles.heart}/>
    <h5>Canon Camera</h5>
   <p>4.4*</p>
   <span>$40</span>
</div>

<div className={styles.set3}>
<img src={gamepad}/><CiHeart className={styles.heart}/>
<h5>Gaming Pad</h5>
<p>4.1*</p>
<span>$35</span>
</div>

<div className={styles.set3}>
<img src={keyboard}/><CiHeart className={styles.heart}/>
<h5>Gaing Keyboard</h5>
<p>4.5*</p>
<span>$20</span>
</div>

<div className={styles.set3}>
<img src={mini}/><CiHeart className={styles.heart}/>
<h5>Mini Camera</h5>
<p>4.5*</p>
<span>$10</span>
</div>

<div className={styles.set3}>
<img src={mouse}/><CiHeart className={styles.heart}/>
<h5>Wirless Mouse</h5>
<p>4.2*</p>
<span>$35</span>
</div>


<div className={styles.set3}>
<img src={tab3}/> <CiHeart className={styles.heart}/>
<h5>Samsung Tab</h5>
<p>4.3*</p>
<span>$25</span>
</div>

</div>


{/* sector4 */}

<div className={styles.sector4}>

<div className={styles.set4}>
   <img src={charger}/><CiHeart className={styles.heart}/>
    <h5>C Type Charger</h5>
   <p>4.5*</p>
   <span>$30</span>
</div>

<div className={styles.set4}>
<img src={camera4}/><CiHeart className={styles.heart}/>
<h5>Camera</h5>
<p>4.5*</p>
<span>$55</span>
</div>

<div className={styles.set4}>
<img src={laptop4}/><CiHeart className={styles.heart}/>
<h5>Lenova Laptop</h5>
<p>4.5*</p>
<span>$70.00</span>
</div>

<div className={styles.set4}>
<img src={otg}/><CiHeart className={styles.heart}/>
<h5>OTG</h5>
<p>4.5*</p>
<span>$10</span>
</div>

<div className={styles.set4}>
<img src={smart4}/><CiHeart className={styles.heart}/>
<h5>Noise Smart Watch</h5>
<p>4.2*</p>
<span>$35</span>
</div>


<div className={styles.set4}>
<img src={tab4}/> <CiHeart className={styles.heart}/>
<h5>Lenova Tab</h5>
<p>4.3*</p>
<span>$25</span>
</div>

</div>


{/* sector5 */}

<div className={styles.sector5}>

<div className={styles.set5}>
   <img src={holder}/><CiHeart className={styles.heart}/>
    <h5>Phone Holder</h5>
   <p>4.5*</p>
   <span>$30</span>
</div>

<div className={styles.set5}>
<img src={power}/><CiHeart className={styles.heart}/>
<h5>Power Bank</h5>
<p>4.5*</p>
<span>$45</span>
</div>

<div className={styles.set5}>
<img src={number}/><CiHeart className={styles.heart}/>
<h5>Number Airpods</h5>
<p>4.5*</p>
<span>$50</span>
</div>

<div className={styles.set5}>
<img src={speaker}/><CiHeart className={styles.heart}/>
<h5>Wirless Speaker</h5>
<p>4.5*</p>
<span>$10</span>
</div>

<div className={styles.set5}>
<img src={zebronics}/><CiHeart className={styles.heart}/>
<h5>Zebronics</h5>
<p>4.2*</p>
<span>$35</span>
</div>


<div className={styles.set5}>
<img src={boult}/> <CiHeart className={styles.heart}/>
<h5>Boult</h5>
<p>4.3*</p>
<span>$25</span>
</div>

</div>
    </div>
  )
}

export default S1Gadgets;
