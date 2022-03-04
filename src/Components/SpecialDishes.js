import React from 'react'

function SpecialDishes(props) {
    const specMenu = props.specMenu.map((menuItem)=>{
        return(
            
                <li>
                    <h4>{menuItem.strMeal}</h4>
                    <img src={menuItem.strMealThumb} alt="" />
                </li>
            
        )
    })

  return (
    <section className='special-dishes-list'>
        <div className="container">
            <div className="special-dishes-container">
                <h1> Our Special dishes🍜</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam laudantium, cupiditate quaerat iste soluta quae itaque eius assumenda qui ullam!</p>
            </div>
        </div>
        <div className="spec-menu">
            <h2>Special menus come here🤩 </h2>
            <ul>
                {specMenu}
            </ul>
            {specMenu}
        </div>
    </section>
  )
}

export default SpecialDishes