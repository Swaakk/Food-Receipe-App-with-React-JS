
import React from 'react'
import { useState,useEffect } from 'react'

import Hero from './Hero'
import SpecialDishes from './SpecialDishes'

function Menu() {

    const[menu,setMenu]= useState([]);
    const[menuCategory,setMenuCategory]=useState([]);   
    
    async function getAllMenu(){
        const API_URL = "https://www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = await fetch(API_URL)
        let data = await response.json()
        console.log("heu",data.meals);
        setMenu(data.meals)
        
    }
     
    async function getAllCategory(){
      const API_URL = "https://www.themealdb.com/api/json/v1/1/categories.php"
      const response = await fetch(API_URL)
      const categoryData = await response.json()
      setMenuCategory(categoryData.categories)

    }
      
       


    useEffect(()=>{
        getAllMenu()
        getAllCategory()
        
    },[])
  
    
  return (
    <div>
       <Hero/>
       <SpecialDishes specMenu={menu}/>
       
        
    </div>
  )
}

export default Menu