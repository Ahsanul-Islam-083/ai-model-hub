
import { useState } from 'react'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Models from './components/Models'
import NavBar from './components/Navbar'
import Cart from './components/Cart'

const getModels = async () => {
  const res = await fetch('/models.json')
  return res.json();
}
const modelPromise = getModels();

function App() {
const [activeTab,setActiveTab] = useState("model")
const [carts,setCarts] = useState([]);
// console.log(carts);

  return (
    <>
      <NavBar />
      <Banner />

      {/* name of each tab group should be unique */}
      <div className="tabs justify-center tabs-box bg-transparent">
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab ==="model" &&"bg-linear-to-r from-pink-500 to-red-500 text-white" }`} aria-label="Models" onClick={()=>setActiveTab("model")} defaultChecked />
        <input type="radio" name="my_tabs_1" className={`tab rounded-full w-40 ${activeTab ==="cart" &&"bg-linear-to-r from-pink-500 to-red-500 text-white" }`} aria-label={`Cart (${carts.length})`} onClick={()=>{setActiveTab("cart")}} />

      </div>

      {activeTab ==="model" && <Models carts={carts} setCarts={setCarts} modelPromise={modelPromise} />}
      {activeTab ==="cart" && <Cart carts={carts} setCarts={setCarts} />}

      <Footer />
    </>
  )
}

export default App
