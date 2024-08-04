
import styles from "../css/S1Mobiles.module.css"
import { useNavigate } from 'react-router-dom';
import { LuShoppingCart } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa6";
import { RiTwitterXLine } from "react-icons/ri";
import { FaYoutube } from "react-icons/fa";

const logo = new URL("../images/image.jpeg",import.meta.url);
const s1_1miphone = new URL("../images/s1.1m5g.jpeg",import.meta.url);
const s1_1mnothing = new URL("../images/s1.1mnothing.jpg",import.meta.url);
const s1_1moppo= new URL("../images/s1.1moppo.jpg",import.meta.url);
const s1_1msale= new URL("../images/s1.1msale.jpg",import.meta.url);
const s1_1msamsung = new URL("../images/s1.1msamsung.jpg",import.meta.url);  

// sector1//
const motorola1 = new URL("../images/s1_1motorola1.jpeg",import.meta.url);
const motorola2 = new URL("../images/s1_1motorola2.jpeg",import.meta.url);
const motorola3 = new URL("../images/s1_1motorola3.jpeg",import.meta.url);
const motorola4= new URL("../images/s1_1motorola4.jpeg",import.meta.url);
const motorola5 = new URL("../images/s1_1motorola5.jpeg",import.meta.url);
const motorola6 = new URL("../images/s1_1motorola6.jpeg",import.meta.url);



// sector2//
const fashion = new URL("../images/fashion.jpeg",import.meta.url);
const home = new URL("../images/home&furniture.jpeg",import.meta.url);
const appliances = new URL("../images/appliances.jpeg",import.meta.url);
const beauty = new URL("../images/beauty and toys.jpeg",import.meta.url);
const travel = new URL("../images/travel.jpeg",import.meta.url);
const wheeler = new URL("../images/two wheeler.jpeg",import.meta.url);
const gadgets = new URL("../images/gadgets.jpeg",import.meta.url);


// sector3//
const poco1 = new URL("../images/s1_1poco1.jpeg",import.meta.url);
const poco2 = new URL("../images/s1_1poco2.jpeg",import.meta.url);
const poco3 = new URL("../images/s1_1poco3.jpeg",import.meta.url);
const poco4 = new URL("../images/s1_1poco4.jpeg",import.meta.url);
const poco5 = new URL("../images/s1_1poco5.jpeg",import.meta.url);
const poco6 = new URL("../images/s1_1poco6.jpeg",import.meta.url);


// sector4//
const vivo1 = new URL("../images/s1_1realme1.jpeg",import.meta.url);
const vivo2 = new URL("../images/s1_1realme2.jpeg",import.meta.url);
const vivo3 = new URL("../images/s1_1realme3.jpeg",import.meta.url);
const vivo4 = new URL("../images/s1_1realme4.jpeg",import.meta.url);
const vivo5 = new URL("../images/s1_1realme5.jpeg",import.meta.url);
const vivo6 = new URL("../images/s1_1realme6.jpeg",import.meta.url);


// sector5//
const realme1 = new URL("../images/s1_1realme1.jpeg",import.meta.url);
const realme2 = new URL("../images/s1_1realme2.jpeg",import.meta.url);
const realme3 = new URL("../images/s1_1realme3.jpeg",import.meta.url);
const realme4 = new URL("../images/s1_1realme4.jpeg",import.meta.url);
const realme5 = new URL("../images/s1_1realme5.jpeg",import.meta.url);
const realme6 = new URL("../images/s1_1realme6.jpeg",import.meta.url);

// sector6//
const iphone1 = new URL("../images/s1_1iphone1.jpeg",import.meta.url);
const iphone2 = new URL("../images/s1_1iphone2.jpeg",import.meta.url);
const iphone3 = new URL("../images/s1_1iphone3.jpeg",import.meta.url);
const iphone4 = new URL("../images/s1_1iphone4.jpeg",import.meta.url);
const iphone5 = new URL("../images/s1_1iphone5.jpeg",import.meta.url);
const iphone6 = new URL("../images/s1_1iphone6.jpeg",import.meta.url);

// sector7//
const samsung1 = new URL("../images/s1_1samsung1.jpeg",import.meta.url);
const samsung2 = new URL("../images/s1_1samsung2.jpeg",import.meta.url);
const samsung3 = new URL("../images/s1_1samsung3.jpeg",import.meta.url);
const samsung4 = new URL("../images/s1_1samsung4.jpeg",import.meta.url);
const samsung5 = new URL("../images/s1_1samsung5.jpeg",import.meta.url);
const samsung6 = new URL("../images/s1_1samsung6.jpeg",import.meta.url);

// sector8//
const redmi1 = new URL("../images/s1_1redmi1.jpeg",import.meta.url);
const redmi2 = new URL("../images/s1_1redmi2.jpeg",import.meta.url);
const redmi3 = new URL("../images/s1_1redmi3.jpeg",import.meta.url);
const redmi4 = new URL("../images/s1_1redmi4.jpeg",import.meta.url);
const redmi5 = new URL("../images/s1_1redmi5.jpeg",import.meta.url);
const redmi6 = new URL("../images/s1_1redmi6.jpeg",import.meta.url);

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
     <img src={motorola1}/><CiHeart id={styles.heart}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={motorola2}/><CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={motorola3}/><CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={motorola4}/><CiHeart id={styles.heart}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={motorola5}/><CiHeart id={styles.heart}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={motorola6}/> <CiHeart id={styles.heart}/>
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
     <img src={poco1}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={poco2}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={poco3}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={poco4}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={poco5}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={poco6}/>
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
   <img src={vivo1}/> <CiHeart id={styles.heart}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={vivo2}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={vivo3}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={vivo4}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={vivo5}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={vivo6}/> <CiHeart id={styles.heart}/>
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
     <img src={realme1}/> <CiHeart id={styles.heart}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={realme2}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={realme3}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={realme4}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={realme5}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={realme6}/> <CiHeart id={styles.heart}/>
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
     <img src={iphone1}/> <CiHeart id={styles.heart}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={iphone2}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={iphone3}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={iphone4}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={iphone5}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={iphone6}/> <CiHeart id={styles.heart}/>
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
     <img src={samsung1}/> <CiHeart id={styles.heart}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={samsung2}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={samsung3}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={samsung4}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={samsung5}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={samsung6}/> <CiHeart id={styles.heart}/>
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
     <img src={redmi1}/> <CiHeart id={styles.heart}/>
      <h5>Motorola G85 5G<br/>(Cobalt blue,128 GB)</h5>
     <p>4.5*</p>
     <span>$25.000</span>
  </div>

  <div id={styles.set1}>
  <img src={redmi2}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(olivia Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={redmi3}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G85 5G<br/>(Urban Grey,128 GB)</h5>
  <p>4.5*</p>
  <span>$20.000</span>
  </div>

  <div id={styles.set1}>
  <img src={redmi4}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G64 5G<br/>(Mint Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$45.000</span>
  </div>

  <div id={styles.set1}>
  <img src={redmi5}/> <CiHeart id={styles.heart}/>
  <h5>Motorola G34 5G<br/>(Ocean Green,128 GB)</h5>
  <p>4.5*</p>
  <span>$35.000</span>
  </div>


  <div id={styles.set1}>
  <img src={redmi6}/> <CiHeart id={styles.heart}/>
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
   <a href="contact"> <li>Contact us</li></a>
   <a href="#"> <li>About us</li></a>
   <a href="/careers"> <li>Careers</li></a>
   <a href="press"> <li>Press</li></a>
   <a href="info"><li>Information</li></a>
   </ul>
</div>

<hr id={styles.hr}/>


<div id={styles.center}>
<span>Help</span>
   <ul>
   <a href="contact"> <li>Payments</li></a>
   <a href="#"> <li>Shipping</li></a>
   <a href="/careers"> <li>cancellation&Returns</li></a>
   <a href="press"> <li>FAQ</li></a>
   <a href="info"><li>Report infringment</li></a>
   </ul>

   <div id={styles.social}>
<h3>Social</h3>
<FaYoutube />
<FaFacebook />
<RiTwitterXLine />
</div>
</div>


<hr className={styles.hr}/>
<div id={styles.right}>
     <p>Mail Us</p>

<span>ShopZone Internet Private Limited,

Buildings Alyssa, Begonia &

Clove Embassy Tech Village,

Outer Ring Road, Devarabeesanahalli Village,

Bengaluru, 560103,

Karnataka, India
</span>

<p> Address:</p>
<span>ShopZone Internet Private Limited,

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

export default S1Mobiles;
