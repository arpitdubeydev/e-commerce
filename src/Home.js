import React from 'react'
import HeroSection from './components/HeroSection'
import styled from 'styled-components'
import Services from './components/Services'
import Trusted from './components/Trusted'
import Footer from './components/Footer'
import FeaturedProduct from './components/FeaturedProduct'



const Home = () => {

  const data = {
    name: "Blushing Metals"
  }

  return (
    <>
    <HeroSection myData ={data}/>
    <FeaturedProduct/>
    <Services/>
    <Trusted/>
    
    </>
  )
}



export default Home