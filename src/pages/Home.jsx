import React from 'react'
import Announcment from '../components/Announcment'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import Producttitle from '../components/Producttitle'
import Promonew from '../components/Promonew'
import Singup from '../components/Singup'
import Slider from '../components/Slider'

const Home = () => {

    const smallScreen = window.screen.width <= 375 ? true :false; 
    return (
      
        <div>
            <Announcment/>
            <Navbar/>
            <Slider/>
           
            
            <Categories/>
            <Producttitle/>
            <Products/>
           
            <Promonew/>
            <Singup/>
            
            <Footer/>
        </div>
    )
}

export default Home

