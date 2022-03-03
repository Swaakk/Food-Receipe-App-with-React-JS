import React from 'react'
import { useState,useEffect } from 'react'

function Menu() {
    useEffect(()=>{
        const API_URL = "www.themealdb.com/api/json/v1/1/search.php?f=a"
        let response = fetch(API_URL)
    })
  return (
    <div>

    </div>
  )
}

export default Menu