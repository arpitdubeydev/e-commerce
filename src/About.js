import React from 'react'
import HeroSection from './components/HeroSection'
import { useContext } from 'react'
import { AppContext } from './context/productContext'
import { useProductContext } from './context/productContext'
import { useEffect } from 'react'
import axios from "axios"

const API = "https://api.pujakaitem.com/api/products";

const About = () => {

const getProducts = async (url) => {
 
  const response = await axios.get(url);
console.log("data ",response);
}





  useEffect(() => {

    getProducts(API);

  },[])


const {myName} = useProductContext();
  const data = {
    name : "Artificial jewe llery"
  }

  return (
    <>
  {myName}
      <HeroSection myData = {data}/>
    </>
  

  )
}

export default About