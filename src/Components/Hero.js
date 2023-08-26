import React from 'react';
// import { Link } from 'react-router-dom'
import delivery from '../assets/delivery.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagaram.png';
import linkedin from '../assets/linkedin.png';

import heroman from '../assets/hero-man.png';
import mainstar from '../assets/main-star.png';
import mainbg from '../assets/bg-rectangle.png';
import arrow from '../assets/arrow.png';
import smallstar from '../assets/small-star.png';
import Navbar from './Navbar';


const Hero = () => {
  

  return (
    <div className='w-full sm:h-[690px] h-[660px] bg-black text-white font-custom flex flex-col overflow-hidden'>
      {/* Top Bar */}
      <div className='w-full h-[42px] bg-[#191919] sm:px-[90px] px-[19px]  text-[#626262] flex items-center justify-between'>
        <div className='flex flex-row items-center cursor-pointer'>
          <img className='pr-[7px]' src={delivery} alt='delivery' />
          <h3 className='sm:text-[12px] text-[10px] sm:pr-[14px] pr-[7px]'>Free delivery </h3> |
          <h3 className='sm:text-[12px] text-[10px] sm:pl-[14px] pl-[7px]'>Return Policy</h3>
        </div>
        <div className='flex flex-row items-center cursor-pointer'>
          <h3 className='pr-[35px] text-[10px]'>Login</h3>
          <h3 className='sm:pr-[14px] sm:text-[10px] text-[0px] '>Follow US</h3>
          <div className='flex gap-5'>
            <img src={facebook} alt='facebook-logo' />
            <img src={linkedin} alt='linkedin-logo' />
            <img src={twitter} alt='twitter-logo' />
            <img src={instagram} alt='instagram-logo' />
          </div>
        </div>
      </div>
      <Navbar />

{/* text*/}  
<div>
        <div className='z-30 relative sm:px-[90px] px-[19px] font-bold lg:text-[135px] md:text-[105px] text-[55px] sm:text-[80px] font-custom'>
                <span className=' absolute md:pt-[62px] sm:pt-[162px] pt-[250px]  pl-[5px]'>
                  Fresh
                </span>
                <span className='absolute md:pt-[158px] sm:pt-[218px] pt-[290px] break-word sm:pl-[300px] pl-[100px]'>
                  2022
                </span>
                <span className='absolute md:pt-[269px] sm:pt-[290px] pt-[340px]  break-word pl-[70px]'>
                  Look
                </span>
        </div>
              
      {/* {images} */}
      <div className='flex justify-end relative'>
        <div className='flex sm:flex-col sm:absolute top-80 px-[19px] sm:text-[15px] text-[0px]'>
        <h2>OREGON JACKET</h2>
        <h2>$124</h2>
        </div>
        <img src={mainstar} alt='star' className='absolute sm:pr-[60px] sm:w-[400px] sm:h-[350px] w-[250px] h-[300px]' />
        <img src={heroman} alt='bg' className='absolute  sm:pr-[120px] pr-[0px] sm:pl-[0px] pl-[180px]   h-[554px]  object-cover z-10' />
        <img src={mainbg} alt='bg' className=' absolute top-36 h-[300px] sm:w-[70%] w-full z-10' />
      </div>      
      <div className='relative'>
      <p className='absolute top-[450px] md:w-[970px] sm:w-[300px] w-[180px] h-[2px] opacity-[50%] text-white bg-white border-white'></p>
      <img className="z-20 absolute md:left-[904px] sm:left-40 left-32 top-[406px] "src={smallstar} alt='smallstar' />
      </div>
      <div className=' absolute w-fit-content h-[25px] border border-white top-[620px] sm:left-21 left-5  flex flex-row '>
        <button className='text-[14px]'>See more</button>
        <img className='pl-[8px] pt-[7px] w-5 h-3' src={arrow} alt='arrow' />

      </div>
    </div>
    </div>
  );
};

export default Hero;
