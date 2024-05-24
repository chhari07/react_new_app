import React, { useState } from 'react'
import {hero} from "../../../dummyData"
import "./hero.css"

const hero = () => {
    const [items,sections]=useState(hero)
  return (
 <>
   <section className='hero' >
    <div className='container'>{items.map((items)=>{
        return <Card key={items.id} item={items}  />
    }
    )}
       {items}
    </div>

   </section>
 </>
  )
}

export default hero
