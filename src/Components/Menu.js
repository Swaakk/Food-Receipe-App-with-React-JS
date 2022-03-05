/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useState,useEffect } from 'react'
import FilteredDishes from './FilteredDishes'
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

        async function getAllCategory(){
          const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
          const response = await fetch(API_URL)
          const categoryData = await response.json()
          console.log("cateo" ,categoryData);
        }

    useEffect(()=>{
        getAllMenu()
        getAllCategory()
    },[])
    console.log(menu); 
  
    
  return (
    <div>
       <Hero/>
       <SpecialDishes specMenu={menu}/>
       <FilteredDishes/>
        
    </div>
  )
}

export default Menu