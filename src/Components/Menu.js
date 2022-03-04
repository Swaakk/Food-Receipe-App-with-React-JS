/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useState,useEffect } from 'react'
import Hero from './Hero'
import SpecialDishes from './SpecialDishes'

function Menu() {

    let [menu,setMenu]= useState([])
    
    async function getAllMenu(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL)
        let data = await response.json()
        setMenu(data.meals)
        
    }
    useEffect(()=>{
        getAllMenu()
    },[])
    console.log(menu); 
  
    
  return (
    <div>
       <Hero/>
       <SpecialDishes specMenu={menu}/>
        
    </div>
  )
}

export default Menu