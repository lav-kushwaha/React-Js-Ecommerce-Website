import React from 'react'
import Slider from '../../Components/Slider/Slider';
import "./Home.scss"
import FeaturedProducts from '../../Components/FeaturedProducts/FeaturedProducts';
import Categories from '../../Components/Categories/Categories';
import Contact from '../../Components/Contact/Contact';

const Home = () => {
  return (
    <div className='home'>
       <Slider/>
       <FeaturedProducts type="featured"/>
       <Categories/>
       <FeaturedProducts type="trending"/>
       <Contact/>
    </div>
  )
}

export default Home;
