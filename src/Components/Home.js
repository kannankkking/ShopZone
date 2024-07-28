import React from 'react'
import styles from '../css/Home.module.css'
import { GrNext } from "react-icons/gr";
import { useNavigate } from 'react-router-dom';
import { GrPrevious } from "react-icons/gr";
import { LuShoppingCart } from "react-icons/lu";
import { BsThreeDotsVertical } from "react-icons/bs";
import { BiArrowToTop } from "react-icons/bi";
const logo = new URL("../images/image.jpeg",import.meta.url);
const grocery = new URL("../images/grocery.jpeg",import.meta.url);
const mobiles = new URL("../images/mobiles.jpeg",import.meta.url);
const gadgets = new URL("../images/gadgets.jpeg",import.meta.url);
const fashion = new URL("../images/fashion.jpeg",import.meta.url);
const home = new URL("../images/home&furniture.jpeg",import.meta.url);
const appliances = new URL("../images/appliances.jpeg",import.meta.url);
const beauty = new URL("../images/beauty and toys.jpeg",import.meta.url);
const travel = new URL("../images/travel.jpeg",import.meta.url);
const wheeler = new URL("../images/two wheeler.jpeg",import.meta.url);

// section2//
const realme = new URL("../images/realme.jpeg",import.meta.url);
const vivo = new URL("../images/vivo.jpeg",import.meta.url);
const oneplus = new URL("../images/oneplus.jpeg",import.meta.url);
const oppo = new URL("../images/oppo.jpeg",import.meta.url);
const oppo1 = new URL("../images/oppo1.jpeg",import.meta.url);
const iphone = new URL("../images/iphone.jpeg",import.meta.url);
const samsung = new URL("../images/samsung.jpeg",import.meta.url);
const s3realme = new URL("../images/s3realme.jpeg",import.meta.url);

// section3//
const boat1 = new URL("../images/boat1.jpeg",import.meta.url);
const acer = new URL("../images/acer.jpeg",import.meta.url);
const airpods= new URL("../images/airpods.jpeg",import.meta.url);
const mivi= new URL("../images/mivi.jpeg",import.meta.url);
const puma= new URL("../images/puma.jpeg",import.meta.url);
const lenova= new URL("../images/lenova.jpeg",import.meta.url);

// section4//
const s4shoe= new URL("../images/s4shoe.jpeg",import.meta.url);
const s4shoe1= new URL("../images/s4shoe1.jpeg",import.meta.url);
const wallet= new URL("../images/wallet.jpeg",import.meta.url);
const s4shoe2= new URL("../images/s4shoe2.jpeg",import.meta.url);
const s4kurtas= new URL("../images/s4kurtas.jpeg",import.meta.url);
const s4kurtas1= new URL("../images/s4kurtas1.jpeg",import.meta.url);

// section6//
const s6gaming= new URL("../images/s6gaming.jpeg",import.meta.url);
const s6ipad= new URL("../images/s6ipad.jpeg",import.meta.url);
const s6projectors= new URL("../images/s6projectors.jpeg",import.meta.url);
const s6toptech= new URL("../images/s6toptech.jpeg",import.meta.url);
const s6trending= new URL("../images/s6trending.jpeg",import.meta.url);
const s6printer= new URL("../images/s6printer.jpeg",import.meta.url);

// section7//
const s7slippers= new URL("../images/s7slippers.jpeg",import.meta.url);
const s7bag= new URL("../images/s7bag.jpeg",import.meta.url);
const s7hairoil= new URL("../images/s7hairoil.jpeg",import.meta.url);
const s7jewellery= new URL("../images/s7jewellery.jpeg",import.meta.url);
const s7lotus= new URL("../images/s7lotus.jpeg",import.meta.url);
const s7soap= new URL("../images/s7soap.jpeg",import.meta.url);
const s7fasio= new URL("../images/s7fasio.jpeg",import.meta.url);
const s7makeup= new URL("../images/s7makeup.jpeg",import.meta.url);
const s7watch= new URL("../images/s7watch.jpeg",import.meta.url);

// section8//
const s8bed= new URL("../images/s8bed.jpeg",import.meta.url);
const s8chairs= new URL("../images/s8chairs.jpeg",import.meta.url);
const s8coffetables= new URL("../images/s8coffetables.jpeg",import.meta.url);
const s8furniture= new URL("../images/s8furniture.jpeg",import.meta.url);
const s8shoerack= new URL("../images/s8shoerack.jpeg",import.meta.url);
const s8shopaset= new URL("../images/s8shopaset.jpeg",import.meta.url);

// section9//
const s9kitchentools= new URL("../images/s9kitchentools.jpeg",import.meta.url);
const s9gasstove= new URL("../images/s9gasstove.jpeg",import.meta.url);
const s9flask= new URL("../images/s9flask.jpeg",import.meta.url);
const s9mopset= new URL("../images/s9mopset.jpeg",import.meta.url);
const s9pan= new URL("../images/s9pan.jpeg",import.meta.url);
const s9faucete= new URL("../images/s9faucete.jpeg",import.meta.url);
// section10//
const s10fans= new URL("../images/s10fans.jpeg",import.meta.url);
const s10fridge= new URL("../images/s10fridge.jpeg",import.meta.url);
const s10microwaveowen= new URL("../images/s10microwaveowen.jpeg",import.meta.url);
const s10samsung= new URL("../images/s10samsung.jpeg",import.meta.url);
const s10washingmechine= new URL("../images/s10washingmechine.jpeg",import.meta.url);
const s10water= new URL("../images/s10water.jpeg",import.meta.url);
// section11//
const s11A4sheet= new URL("../images/s11A4sheet.jpeg",import.meta.url);
const s11camlin= new URL("../images/s11camlin.jpeg",import.meta.url);
const s11dairymilk= new URL("../images/s11dairymilk.jpeg",import.meta.url);
const s11keyboard= new URL("../images/s11keyboard.jpeg",import.meta.url);
const s11laptop= new URL("../images/s11laptop.jpeg",import.meta.url);
const s11saree= new URL("../images/s11saree.jpeg",import.meta.url);
const s11sunglasses= new URL("../images/s11sunglasses.jpeg",import.meta.url);
const s11tab= new URL("../images/s11tab.jpeg",import.meta.url);
const s11umberlla= new URL("../images/s11umberlla.jpeg",import.meta.url);
const s11wallclock= new URL("../images/s11wallclock.jpeg",import.meta.url);
const s11wallet= new URL("../images/s11wallet.jpeg",import.meta.url);
const s11rosepetal= new URL("../images/s11rosepetals.jpeg",import.meta.url);
const s11backcover= new URL("../images/s11backcover.jpeg",import.meta.url);
const s11bag= new URL("../images/s11bag.jpeg",import.meta.url);
const s11bracelet= new URL("../images/s11bracelet.jpeg",import.meta.url);
const s11fullsleeve= new URL("../images/s11fullsleeve.jpeg",import.meta.url);
const s11glitterfoam= new URL("../images/s11glitterfoam.jpeg",import.meta.url);
const s11shirt= new URL("../images/s11shirt.jpeg",import.meta.url);
const s11sketchbook= new URL("../images/s11sketchbook.jpeg",import.meta.url);
const s11smartwatch= new URL("../images/s11smartwatch.jpeg",import.meta.url);
const s11Syfer= new URL("../images/s11Syfer.jpeg",import.meta.url);
const s11tessastraightleg= new URL("../images/s11tessastraightleg.jpeg",import.meta.url);
const s11watch= new URL("../images/s11watch.jpeg",import.meta.url);
const s11boat= new URL("../images/s11boat.jpeg",import.meta.url);
const s11chain= new URL("../images/s11chain.jpeg",import.meta.url);
const s11fery= new URL("../images/s11fery.jpeg",import.meta.url);
const s11girlwatch= new URL("../images/s11girlwatch.jpeg",import.meta.url);
const s11hometheater= new URL("../images/s11hometheater.jpeg",import.meta.url);
const s11makeup= new URL("../images/s11makeup.jpeg",import.meta.url);
const s11shoe= new URL("../images/s11shoe.jpeg",import.meta.url);
const s11charger= new URL("../images/s11charger.jpeg",import.meta.url);
const s11toy= new URL("../images/s11toy.jpeg",import.meta.url);
const s11temperglass= new URL("../images/s11temperglass.jpeg",import.meta.url);
const s11teddy= new URL("../images/s11teddy.jpeg",import.meta.url);












function Home () {
  const navigate = useNavigate();
const handleLogin =(event)=>{
   event.preventDefault();
  {
     navigate('/Login');
   }
  }
  return (
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

<div id={styles.section1}>
    
      <div id={styles.sect}>
      <a href='/Grocery'> <img src={grocery}/></a> 
       <p>Grocery</p>
      </div>
 
      <div id={styles.sect}>
      <a href='/Mobiles'> <img src={mobiles}/></a> 
       <p>Mobiles</p>
      </div>

      <div id={styles.sect}>
      <a href='/Gadgets'> <img src={gadgets}/></a> 
       <p>Gadgets</p>
      </div>

      <div id={styles.sect}>
      <a href='/Fashion'> <img src={fashion}/></a> 
       <p>Fashion</p>
      </div>

      <div id={styles.sect}>
      <a href='/Home'> <img src={home}/></a> 
       <p>Home&<br/>Furniture</p>
      </div>

      <div id={styles.sect}>
      <a href='/Appliances'> <img src={appliances}/></a> 
       <p>Appliances</p>
      </div>

      <div id={styles.sect}>
      <a href='/Beauty'> <img src={beauty}/></a> 
       <p>Beauty and Toys</p>
      </div>

      <div id={styles.sect}>
      <a href='/Travel'> <img src={travel}/></a> 
       <p>Travel</p>
      </div>

      <div id={styles.sect}>
      <a href='/Wheeler'> <img src={wheeler}/></a> 
       <p>Two wheeler</p>
      </div>

</div>

<div className={styles.scroll}>
<GrPrevious id={styles.icons}/>
<GrNext className={styles.icons} />
</div>

{/* section 2 */}

<div className={styles.section2}>



</div>

{/* section3 */}
<h2>Deals on Smartphone</h2>
<div className={styles.section3}>

<div id={styles.set}>
  <img src={realme}/>
  <p>Realme 12 Pro </p>
  <span>Just 14.000</span>
</div>

<div id={styles.set}>
  <img src={oppo}/>
  <p>Oppo </p>
  <span>Just 18.000</span>
</div>

<div id={styles.set}>
  <img src={vivo}/>
  <p>Vivo Reno</p>
  <span>Just 20.000</span>
</div>

<div id={styles.set}>
  <img src={oppo1}/>
  <p>Oppo </p>
  <span>Just 15.000</span>
</div>

<div id={styles.set}>
  <img src={oneplus}/>
  <p>Oneplus </p>
  <span>Just 40.000</span>
</div>

<div id={styles.set}>
  <img src={samsung}/>
  <p>Samsung Flip</p>
  <span>Just 47.000</span>
</div>

<div id={styles.set}>
  <img src={iphone}/>
  <p>Iphone 14 </p>
  <span>Just 70.000</span>
</div>

<div id={styles.set}>
  <img src={s3realme}/>
  <p>Realme 15 </p>
  <span>Just 30.000</span>
</div>
</div>

<br/><br/>
{/* section 4 */}
<h2>Top Deals On Fashion</h2>
<div className={styles.section4}>
 
  <div className={styles.set1}>
    <img src={s4shoe}/>
    <p>Shoes</p>
    <span>Min 70% off</span>
  </div>

  <div className={styles.set1}>
    <img src={s4shoe1}/>
    <p> Nike Shoes</p>
    <span>Min 60% off</span>
  </div>

  <div className={styles.set1}>
    <img src={wallet}/>
    <p>Wallets&Belts</p>
    <span>Min 80% off</span>
  </div>

  <div className={styles.set1}>
    <img src={s4kurtas1}/>
    <p>Men kurtas</p>
    <span>Min 40% off</span>
  </div>

  <div className={styles.set1}>
    <img src={s4shoe2}/>
    <p>Adida puma Shoes</p>
    <span>Min 40% off</span>
  </div>

  <div className={styles.set1}>
    <img src={s4kurtas}/>
    <p>Kurtas</p>
    <span>Min 50% off</span>
  </div>

</div>




{/* section5 */}

<div className={styles.section5}>
<h2>Feautured Brands</h2>
<img src={boat1}/>
<img src={acer}/>
<img src={airpods}/>
<img src={puma}/>
<img src={mivi}/>
<img src={lenova}/>
</div>
<br/><br/>
{/* section6 */}
<h2>Top Deals On Electronics</h2>
<div className={styles.section6}>
  
<div className={styles.set2}>
  <img src={s6gaming}/>
  <p>Gaming Monitor</p>
<span>From 70.000</span>
</div>

<div className={styles.set2}>
  <img src={s6ipad}/>
  <p>Ipad</p>
<span>From 55.000</span>
</div>


<div className={styles.set2}>
  <img src={s6projectors}/>
  <p>Bestselling Projectors</p>
<span>From 25.000</span>
</div>


<div className={styles.set2}>
  <img src={s6printer}/>
  <p>Canon Printer</p>
<span>From 45.000</span>
</div>


<div className={styles.set2}>
  <img src={s6toptech}/>
  <p>Top Tech Accessories</p>
<span>From 25.000</span>
</div>

<div className={styles.set2}>
  <img src={s6trending}/>
  <p>Trending Exteranl HDD</p>
<span>From 25.000</span>
</div>
</div>

<br/>

{/* section7 */}
<h2>Beauty Foods & More</h2>
<div className={styles.section7}>

  <div className={styles.set3}>
    <img src={s7bag}/>
    <p>Bag</p>
    <span>Min 70% Off</span>
  </div>

  <div className={styles.set3}>
    <img src={s7hairoil}/>
    <p>Hair Oil</p>
    <span>Min 30% Off</span>
  </div>
  <div className={styles.set3}>
    <img src={s7jewellery}/>
    <p>Jewell</p>
    <span>Min 20% Off</span>
  </div>

  <div className={styles.set3}>
    <img src={s7lotus}/>
    <p>Lotus Skin</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set3}>
    <img src={s7slippers}/>
    <p>Men slippers</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set3}>
    <img src={s7soap}/>
    <p>Soap</p>
    <span>Min 50% Off</span>
  </div>
  <div className={styles.set3}>
    <img src={s7makeup}/>
    <p>Makeup</p>
    <span>Min 60% Off</span>
  </div>
  <div className={styles.set3}>
    <img src={s7watch}/>
    <p>Watch</p>
    <span>Min 70% Off</span>
  </div>
  <div className={styles.sett}>
    <img src={s7fasio}/>
  </div>
</div>

<br/>
{/* section8 */}
<h2 id={styles.furni}>Furnitures</h2>
<div className={styles.section8}>

  <div className={styles.set4}>
    <img src={s8bed}/>
    <p>Bed</p>
    <span>Min 70% Off</span>
  </div>

  <div className={styles.set4}>
    <img src={s8chairs}/>
    <p>Outdoor Chairs</p>
    <span>Min 30% Off</span>
  </div>
  <div className={styles.set4}>
    <img src={s8coffetables}/>
    <p>Coffe Tables</p>
    <span>Min 20% Off</span>
  </div>

  <div className={styles.set4}>
    <img src={s8furniture}/>
    <p>Furniture</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set4}>
    <img src={s8shoerack}/>
    <p>Shoerack</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set4}>
    <img src={s8shopaset}/>
    <p>Shopaset</p>
    <span>Min 50% Off</span>
  </div>
   </div>

{/* Section9 */}

<h2 id={styles.h2}>Home&Furnishing</h2>
<div className={styles.section9}>

  <div className={styles.set5}>
    <img src={s9kitchentools}/>
    <p>Kitchen Tools</p>
    <span>Min 50% Off</span>
  </div>

  <div className={styles.set5}>
    <img src={s9flask}/>
    <p>Flask</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set5}>
    <img src={s9mopset}/>
    <p>Mop Set</p>
    <span>Min 80% Off</span>
  </div>

  <div className={styles.set5}>
    <img src={s9pan}/>
    <p>Pan</p>
    <span>Min 10% Off</span>
  </div>
  <div className={styles.set5}>
    <img src={s9faucete}/>
    <p>Faucetes</p>
    <span>Min 40% Off</span>
  </div>

  <div className={styles.set5}>
    <img src={s9gasstove}/>
    <p>Gas stove</p>
    <span>Min 50% Off</span>
  </div>
</div>
<br/>
{/* Section10 */}

<h2 id={styles.best}>Best Deals On Appliances</h2>
<div className={styles.section10}>

  <div className={styles.set6}>
    <img src={s10samsung}/>
    <p>Samsung</p>
    <span>Min 90% Off</span>
  </div>

  <div className={styles.set6}>
    <img src={s10fans}/>
    <p>Fans</p>
    <span>Min 60% Off</span>
  </div>
  <div className={styles.set6}>
    <img src={s10washingmechine}/>
    <p>Washing Mechine</p>
    <span>Min 50% Off</span>
  </div>

  <div className={styles.set6}>
    <img src={s10microwaveowen}/>
    <p>Microwave Owen</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set6}>
    <img src={s10water}/>
    <p>Water Purifier</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set6}>
    <img src={s10fridge}/>
    <p>Refrigirator</p>
    <span>Min 50% Off</span>
  </div>
</div>

{/* Marquee */}

<marquee  className={styles.marqueee}
>
<h1>FLAT 50% Off Sale </h1>
  </marquee>
<br/>

{/* section11 */}

<h2 id={styles.some}>Products for you</h2>
<div className={styles.section11}>

  <div className={styles.set7}>
    <img src={s11A4sheet}/>
    <p>A4 Sheets</p>
    <span>Min 20% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11camlin}/>
    <p>Camlin </p>
    <span>Min 50% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11dairymilk}/>
    <p>Dairy Milk</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11keyboard}/>
    <p>Gaming Keyboard</p>
    <span>Min 30% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11laptop}/>
    <p>Laptop</p>
    <span>Min 10% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11saree}/>
    <p>Sarees</p>
    <span>Min 40% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11sunglasses}/>
    <p>Sun Glasses</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11tab}/>
    <p>Tab</p>
    <span>Min 60% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11umberlla}/>
    <p>Umberlla</p>
    <span>Min 70% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11wallclock}/>
    <p>Wall Clock</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11wallet}/>
    <p>Wallet</p>
    <span>Min 80% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11rosepetal}/>
    <p>Rose petal hair</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11backcover}/>
    <p>Back cover</p>
    <span>Min 90% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11bag}/>
    <p>Bag</p>
    <span>Min 60% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11bracelet}/>
    <p>Bracelet</p>
    <span>Min 90% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11fullsleeve}/>
    <p>Full sleeve </p>
    <span>Min 70% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11glitterfoam}/>
    <p>Glitter Foam</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11shirt}/>
    <p>T-shirt</p>
    <span>Min 70% Off</span>
  </div>


  <div className={styles.set7}>
    <img src={s11sketchbook}/>
    <p>Sketch Book</p>
    <span>Min 50% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11smartwatch}/>
    <p>Smart Watchn</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11Syfer}/>
    <p>Syfer</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11tessastraightleg}/>
    <p>Tessa Straight leg pant</p>
    <span>Min 60% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11watch}/>
    <p>Stylesh Watch</p>
    <span>Min 70% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11boat}/>
    <p>Boat Airpods</p>
    <span>Min 40% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11chain}/>
    <p>Chain</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11fery}/>
    <p>Fery</p>
    <span>Min 70% Off</span>
  </div>
    <div className={styles.set7}>
    <img src={s11girlwatch}/>
    <p>Watches</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11hometheater}/>
    <p>Home Theater</p>
    <span>Min 50% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11makeup}/>
    <p>Makeup Git</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11shoe}/>
    <p>Shoes</p>
    <span>Min 70% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11toy}/>
    <p>Kids Toys</p>
    <span>Min 50% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11temperglass}/>
    <p>Temper Glass</p>
    <span>Min 60% Off</span>
  </div>

  <div className={styles.set7}>
    <img src={s11teddy}/>
    <p>Panda Teddy</p>
    <span>Min 50% Off</span>
  </div>
  <div className={styles.set7}>
    <img src={s11charger}/>
    <p>Charger</p>
    <span>Min 80% Off</span>
  </div>
</div>



<div className={styles.btn}>
 <a href='#'> <button><BiArrowToTop id={styles.icon}/>Back To Top</button></a>
  </div>









   </div>
  )
}

export default Home
