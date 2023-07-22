import React from 'react';
import "./Footer.scss";

const Footer = () => {
  return (
    <div className='footer'>
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum, ab enim accusantium illo quasi commodi quo dicta blanditiis molestiae. Velit illo provident hic ullam! Earum minus autem facilis laudantium impedit!</span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius accusantium dolor autem nihil rem a unde in illo voluptatum repellendus facere quae, tempora quaerat sunt tempore facilis explicabo sint rerum!
          </span>
        </div>
      </div>
      <div className="bottom">
            <div className="left">
              <span className="logo">Lav Store</span>
              <span className="copyright">
              Copyright © 2023, All Rights Reserved.
              </span>
            </div> 
            <div className="right">
              <img src="/images/payment.png" alt="PaymentLogo" />
            </div> 
      </div>
      </div>
  )
}

export default Footer;
