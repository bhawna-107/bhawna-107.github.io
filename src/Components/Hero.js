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
import starline from '../assets/star-line.png'
import smallstar from '../assets/small-star.png';
import Navbar from './Navbar';

// const navarray = [
//   { name: 'HOME', id: 'home' },
//   { name: 'ABOUT', id: 'about' },
//   {
//     name: 'OUR PRODUCTS',
//     id: 'product',
//     child: [
//       { name: 'PRODUCT 1', id: 'p1' },
//       { name: 'PRODUCT 2', id: 'p2' },
//       { name: 'PRODUCT 3', id: 'p3' },
//       { name: 'PRODUCT 4', id: 'p4' },
//     ],
//   },
//   { name: 'CONTACT US', id: 'contact' },
// ];

const Hero = () => {
  // const [active, setActive] = useState("");
  // const [toggle, setToggle] = useState(false);

  return (
    <div className='w-full sm:h-[690px] h-[660px] bg-black text-white font-custom flex flex-col overflow-hidden'>
      {/* Top Bar */}
      <div className='w-full h-[42px] bg-[#191919] sm:px-[90px] px-[19px]  text-[#626262] flex items-center justify-between'>
        <div className='flex flex-row items-center'>
          <img className='pr-[7px]' src={delivery} alt='delivery' />
          <h3 className='sm:text-[12px] text-[10px] sm:pr-[14px] pr-[7px]'>Free delivery </h3> |
          <h3 className='sm:text-[12px] text-[10px] sm:pl-[14px] pl-[7px]'>Return Policy</h3>
        </div>
        <div className='flex flex-row items-center'>
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

      {/* Navbar */}
      {/* <div className='sm:px-[90px] px-[19px] relative'>
        <div className='flex justify-between'>
          <p className='text-[40px] '>Shopkart</p>
          <div className='flex justify-center items-center gap-2'>
            <p>WISHLIST(0)</p>
            <p>BAG(0)</p>
          </div>
        </div>
        <p className='w-full h-[1px] bg-[#fff]'></p>
        <span>
          <img className='absolute pl-[386px] h-[23px] top-10 z-200 ' src={smallstar} alt='star' />
        </span>

        
      <ul className='px-[47px] sm:flex flex-row gap-21 h-[28px] py-[17px] text-[18px] font-semibold'>
        {navarray.map((item) => (
          <li  onClick={() => setActive(item.name)} key={item.id}><a href={`#${item.id}`}>{item.name}</a></li>
        ))}
      </ul>
      </div>

    

        <div className='sm:hidden flex flex-1 justify-end items-center cursor-pointer'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain color:black'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 blue-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navarray.map((item) => (
                <li
                  key={item.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === item.name ? "text-black" : "text-white"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(item.name);
                  }}
                >
                  <a href={`#${item.id}`}>{item.name}</a>
                </li>
              ))}
            </ul>
          </div> */}
















{/* text*/}  
<div>
        <div className='z-30 relative sm:px-[90px] px-[19px] font-bold md:text-[135px] text-[55px] sm:text-[80px] font-custom'>
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
        <img src={mainstar} alt='star' className='absolute sm:pr-[60px] sm:w-[400px] sm:h-[350px] w-[250px] h-[300px] ' />
        <img src={heroman} alt='bg' className='absolute  sm:pr-[120px] pr-[0px] sm:pl-[0px] pl-[100px]   h-[554px]  object-cover z-10' />
        <img src={mainbg} alt='bg' className=' absolute top-36 h-[300px] sm:w-[70%] w-full z-10' />
      </div>      
      <div className='relative'>
      {/* <img className="aboslute w-[900px] h-[20px] text-white bg-white " src={starline} alt='starline' /> */}
      <p className='absolute top-[450px] md:w-[970px] sm:w-[300px] w-[180px] h-[2px] opacity-[50%] text-white bg-white border-white'></p>
      <img className="z-20 absolute md:left-[904px] sm:left-40 left-32 top-[406px] "src={smallstar} alt='smallstar' />
      </div>
      <div className=' absolute w-fit-content h-[25px] border border-white top-[620px] sm:left-21 left-5  flex flex-row '>
        <span className='text-[14px]'>See more</span>
        <img className='pl-[8px] pt-[7px] w-5 h-3' src={arrow} alt='arrow' />

      </div>
      {/* </div> */}
    </div>
    </div>
  );
};

export default Hero;