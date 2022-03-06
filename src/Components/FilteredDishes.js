import React from 'react'

function FilteredDishes(props) {
    console.log("hey",props.allMenuCategory);
    const allDishes =  props.allMenuCategory.map((item)=>{
        return(
            <li>{item.strCategory}</li>
        )
    })
  return (
    <div className='filtered-dishes'>
        <div className="content">
            <h2>Choose your dishes</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente commodi dolore natus laboriosam deserunt, magni voluptate temporibus ex cupiditate incidunt!</p>
         </div>
         <div className="filter-dishes">
            <ul>
                {allDishes}
            </ul>
        </div>
    </div>
  )
}

export default FilteredDishes