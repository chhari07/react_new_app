import React, { useState } from 'react'
import Head from './Head'
import "./Header.css"
import {Link} from "react-router-dom"

const Header = () => {
  const [nsvbar,setnavbar]=useState(false)
  return (
    <>
      <Head />
      <Header>
           <div className='cotainer paddingSmall' >
            <nav>
               <ul className={ nsvbar ? "nabar": "flex" } onClick={()=> setnavbar(false)}   >
                   <li>
                     <Link to='/'>Home </Link></li>
                   <li> 
                    <Link to='/culture'>Culture</Link></li>
                   <li> 
                    <Link to='/politics '>politics </Link></li>
                   <li> 
                    <Link to='/memes '>memes </Link></li>
                   <li>
                     <Link to='/sports'>sports </Link></li>
                   <li>
                     <Link to='/boxed'>boxed </Link></li>
                   <li> 
                    s<Link to='/reviews'>reviews</Link></li>
               </ul>
               <button className='barIco' onClick={()=>setnavbar(!nsvbar)}   >
                { nsvbar ? <i className='fa-fa-bars' >    </i>:<i className='fa fa-bars'></i> }
               </button>
            </nav>
            </div>
      </Header>
    </>
  )
}

export default Header
