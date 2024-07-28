
import styles from "../css/S1Mobiles.module.css"
import { useNavigate } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
const logo = new URL("../images/image.jpeg",import.meta.url);
const s1_1miphone = new URL("../images/s1.1miphone.jpeg",import.meta.url);
const s1_1mnothing = new URL("../images/s1.1mnothing.jpg",import.meta.url);
const s1_1moppo= new URL("../images/s1.1moppo.jpg",import.meta.url);
const s1_1msale= new URL("../images/s1.1msale.jpg",import.meta.url);
const s1_1msamsung = new URL("../images/s1.1msamsung.jpg",import.meta.url);

// sector2//
const fashion = new URL("../images/fashion.jpeg",import.meta.url);
const home = new URL("../images/home&furniture.jpeg",import.meta.url);
const appliances = new URL("../images/appliances.jpeg",import.meta.url);
const beauty = new URL("../images/beauty and toys.jpeg",import.meta.url);
const travel = new URL("../images/travel.jpeg",import.meta.url);
const wheeler = new URL("../images/two wheeler.jpeg",import.meta.url);
const gadgets = new URL("../images/gadgets.jpeg",import.meta.url);



function S1Mobiles () {
  const navigate = useNavigate();
const handleLogin =(event)=>{
   event.preventDefault();
  {
     navigate('/Login');
   }
  }
  return (
    <div id={styles.heading}>
       <div className={styles.Header}>
     <div className={styles.navbar}> 
    <img src={logo}/>
  <input type='text'placeholder='Search for products, Brands and More'/>


<select >
 <option onClick={handleLogin} className={styles.login}>Login</option> 
  <option>New Customer ?</option>
  <option>My Profile</option>
  <option>Wishlist</option>
</select>

<button><LuShoppingCart id={styles.icon}/>Cart</button>

<BsThreeDotsVertical className={styles.icon} />

    </div>

    </div>

<br/>

{/* sector1 */}
    <h1 id={styles.h1}>JUST LAUNCHED</h1>
    <div id={styles.sector1}>
      <img src={s1_1miphone}/>
      <img src={s1_1mnothing}/>
      <img src={s1_1moppo}/>
      <img src={s1_1msale}/>
      <img src={s1_1msamsung}/>
    </div>


    <br/>
{/* sector2 */}
    <h3>Motorola smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>


<br/>
{/* sector3 */}
    <h3>Poco smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>

<br/>
{/* sector4 */}
    <h3>Vivo smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>



<br/>
{/* sector5 */}
    <h3>Realme smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>


<br/>
{/* sector6 */}
    <h3>Apple smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>


<br/>
{/* sector7 */}
    <h3>Samsung smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>


<br/>
{/* sector8 */}
    <h3>Redmi smartphones</h3>
<div className={styles.sector2}>

  <div id={styles.set1}>
     <img src={fashion}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={home}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={appliances}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={beauty}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={travel}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={gadgets}/>
  <h5>Motorola G64 5G<br/>(Pearl blue,128 GB)</h5>
  <p>4.5*</p>
  <span>$25.000</span>
  </div>

</div>



{/* Footer */}

<div className={styles.footer}>
     
<div id={styles.left}>
  <span>About</span>
   <ul>
    <li>Contact us</li>
    <li>About us</li>
    <li>Careers</li>
    <li>Press</li>
    <li>Information</li>
   </ul>
</div>

<div id={styles.right}>
     <p>Mail Us</p>

<span>ShopZone Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India
</span>

<p>Registered Office Address:</p>
<span>Flipkart Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India

CIN : U51109KA2012PTC066107

Telephone: 044-45614700 / 044-67415800
</span>
</div>
</div>








    </div>
  )
}

export default S1Mobiles
