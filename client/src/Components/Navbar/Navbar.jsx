import React, { useState } from 'react'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import SearchIcon from '@mui/icons-material/Search';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';
import Cart from '../Cart/Cart';
import './Navbar.scss'

const Navbar = () => {
  const[open,setOpen]=useState(false);
  return (
    <div className='navbar'>
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="images/indiaflag.jpg" style={{width:30}} alt="indiaFlag"/>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <span>India</span>
            <KeyboardArrowDownIcon/>
          </div>
          <div className="item">
            <Link className='link' to="products/1">Women</Link> 
          </div>
          <div className="item">
            <Link className='link' to="products/2">Men</Link> 
          </div>
          <div className="item">
            <Link className='link' to="products/3">Children</Link> 
          </div>
        </div>
        <div className="center">
          <Link className='link' to="/">LAV-STORE</Link>
        </div>
        <div className="right">
        <div className="item">
          <Link className='link' to="/">Home</Link>
        </div>
        <div className="item">
          <Link className='link' to="/">About</Link>
        </div>
        <div className="item">
          <Link className='link' to="/">Contact</Link>
        </div>
        <div className="item">
          <Link className='link' to="/">Stores</Link>
        </div>
        <div className="icons">
          <SearchIcon/>
          <PersonOutlineIcon/>
          <FavoriteBorderIcon/>
          <div className="cartIcon" onClick={()=>setOpen(!open)}>
            <ShoppingCartOutlinedIcon/>
            <span>0</span>
          </div>
        </div>
        </div>
      </div>
      {open&&<Cart/>}
    </div>
  )
}

export default Navbar;
