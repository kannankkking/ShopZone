import { BrowserRouter,Routes, Route } from 'react-router-dom'
import React from 'react'
import Home from './Components/Home'
import Login from './Components/Login'
import S1Grocery from './Sections/S1Grocery'
import S1Mobiles from './Sections/S1Mobiles'
import S1Gadgets from './Sections/S1Gadgets'
import S1Fashion from './Sections/S1Fashion'
import S1Home from './Sections/S1Home'
import S1Appliances from './Sections/S1Appliances'
import S1Beauty from './Sections/S1Beauty'
import S1Travel from './Sections/S1Travel'
import S1Wheeler from './Sections/S1Wheeler'


const App = () => {
  return (
    <div>
   <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Grocery' element={<S1Grocery/>}/>
        <Route path='/Mobiles' element={<S1Mobiles/>}/>
        <Route path='/Gadgets' element={<S1Gadgets/>}/>
        <Route path='/Fashion' element={<S1Fashion/>}/>
        <Route path='/Home' element={<S1Home/>}/>
        <Route path='/Appliances' element={<S1Appliances/>}/>
        <Route path='/Beauty' element={<S1Beauty/>}/>
        <Route path='/Travel' element={<S1Travel/>}/>
        <Route path='/Wheeler' element={<S1Wheeler/>}/>
      
      </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App
