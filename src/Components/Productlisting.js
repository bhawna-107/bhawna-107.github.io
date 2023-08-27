import React, { useState, useEffect } from 'react';
import axios from 'axios';
import arrow1 from '../assets/Arrow1.png';
import arrow2 from '../assets/Arrow2.png';
import starline from '../assets/star-line.png';
import product1 from '../assets/product1.png';
import product2 from '../assets/product2.png';
import product3 from '../assets/product3.png';
import product4 from '../assets/product4.png';
import productarrow from '../assets/productarrow.png'



const Productlisting = () => {

  const [products,setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('electronics'); // To store selected category

  useEffect(() => {
    // Fetch categories
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error fetching categories:', error));
  }, []);

  // Fetch products when selectedCategory changes
  useEffect(() => {
    if (selectedCategory) {
      axios.get(`https://fakestoreapi.com/products/category/${selectedCategory}`)
        .then(response => setProducts(response.data))
        .catch(error => console.error('Error fetching products:', error));
    } else {
      setProducts([]); // Clear products when no category selected
    }
  }, [selectedCategory]);


  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        console.log("Product list", response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    
    fetchData();
  }, []);
  

  // useEffect(() => 
  // axios.get('https://fakestoreapi.com/products')
  // .then((response) => {setProducts(response.data);
  // console.log("Product list", response.data)}), [])
  // .catch((error) => console.log("error fetching data", error));
  return (
    <div id="product" className='w-full lg:px-[90px] px-[19px] py-[70px] '>
      <div className='flex flex-row justify-between items-center'>
        <p className='lg:text-[90px] text-[40px] font-semibold leading-[55px] px-[15px]'>New products</p>
        <div className='sm:flex flex-row  hidden gap-6'>
           <img className='w-10 h-1' src={arrow2} alt='' />
           <img className='w-10 h-1 ' src={arrow1} alt=''/>
        </div>
      </div>
      <img className='sm:w-[48%]  w-full mt-3' src={starline} alt='' />

      <div className='flex sm:flex-row flex-col  sm:gap-24 gap-6 mt-8 '>
        <div className='flex sm:flex-col flex-row px-[15px] gap-3  '>


        {categories.map(category => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`text-lg capitalize ${selectedCategory === category ? 'font-bold text-lg ' : 'font-normal'}`}
      >
        {category}
      </button>
    ))}
          {/* <p className='text-black text-md font-normal'>Apparel</p>
          <p className='text-black lg:text-[26px] text-md font-bold'>Accessories</p>
          <p className='text-black text-md font-normal' >Best Sellers</p>
          <p className='text-black text-md font-normal'>50% off</p> */}
        </div>

        <div className='flex flex-wrap gap-3 '>

          {products.map(product => (
            <div className='lg:w-[300px] w-[100%] relative  border border-gray-300 py-2 px-4'>
              <div className="h-[300px]">
            <img className="h-full w-full object-contain" src={product.image} alt='product1' />
    </div>
            {/* <img className="h-[300px]"  src={product.image} alt='product1' /> */}
            <div className=''>
            <h2 className="text-black  h-16 overflow-hidden  sm:w-[280px] w-full text-[26px] font-semibold">{product.title}</h2>
            <p className=" sm:w-[280px]  w-full h-40 overflow-hidden  text-opacity-50 text-sm font-normal">
             {product.description}
            </p>
            <p className='text-black text-[26px] font-semibold'>${product.price}</p>  
            </div>
            {/* <h2 className="text-black  h-20 overflow-hidden  w-[300px] text-[26px] font-semibold">{product.title}</h2>
            <p className=" w-[300px]   h-40 overflow-hidden  text-opacity-50 text-sm font-normal">
             {product.description}
            </p>
            <p className='text-black text-[26px] font-semibold'>${product.price}</p> */}
            <img className="absolute sm:top-[255px] sm:left-[255px] left-[80%] top-[40%]" src={productarrow} alt='arrow' />
      </div>
      ))}
        {/* <div className='lg:w-[300px] w-[100%] h-full  relative'>
              <img className=""  src={product1} alt='product1' />
              <h2 className="text-black text-[26px] font-semibold">Florida Jacket</h2>
              <p className=" w-[300px]  text-neutral-900 text-opacity-50 text-sm font-normal">
                Suffered alteration in some form, bysuffalterattion in some forme,
                byinjected humor, or randomised
              </p>
              <p className='text-black text-[26px] font-semibold'>100$</p>
              <img className="absolute top-[267px] left-[255px]" src={productarrow} alt='arrow' />
        </div>

        <div className='w-[300px] relative '>
              <img className=""  src={product2} alt='product1' />
              <h2 className="text-black text-[26px] font-semibold">Florida Jacket</h2>
              <p className=" w-[300px] text-neutral-900 text-opacity-50 text-sm font-normal">
                Suffered alteration in some form, bysuffalterattion in some forme,
                byinjected humor, or randomised
              </p>
              <p className='text-black text-[26px] font-semibold'>100$</p>
              <img className="absolute top-[267px] left-[255px] " src={productarrow} alt='arrow' />
        </div>

        <div className='w-[300px] relative'>
              <img className=""  src={product3} alt='product1' />
              <h2 className="text-black text-[26px] font-semibold">Florida Jacket</h2>
              <p className=" w-[300px]  text-neutral-900 text-opacity-50 text-sm font-normal">
                Suffered alteration in some form, bysuffalterattion in some forme,
                byinjected humor, or randomised
              </p>
              <p className='text-black text-[26px] font-semibold'>100$</p>
              <img className="absolute top-[267px] left-[255px]" src={productarrow} alt='arrow' />

        </div>

        <div className='w-[300px] relative'>
              <img className=""  src={product4} alt='product1' />
              <h2 className="text-black text-[26px] font-semibold">Florida Jacket</h2>
              <p className=" w-[300px] text-neutral-900 text-opacity-50 text-sm font-normal">
                Suffered alteration in some form, bysuffalterattion in some forme,
                byinjected humor, or randomised
              </p>
              <p className='text-black text-[26px] font-semibold'>100$</p>
              <img className="absolute top-[267px] left-[255px]" src={productarrow} alt='arrow' />

        </div> */}
        </div>
      </div>

      <div className='sm:hidden flex flex-row justify-center gap-6 mt-4'>
      <img className='w-10 h-1' src={arrow2} alt='' />
           <img className='w-10 h-1 ' src={arrow1} alt=''/>
        </div>
    </div>
  )
}

export default Productlisting;






























// import React from 'react'

// const Productlisting = () => {
//   return (
//         <div className="relative bg-grey-scale-000 w-full h-[2148px] overflow-hidden text-left text-lg text-grey-scale-000 font-body-text-18">
//           <div className="absolute top-[42px] left-[0px] bg-gray-200 w-[1440px] h-[748px]" />
//           <img
//             className="absolute top-[41px] left-[0px] w-[1440px] h-[749px] object-cover opacity-[0.5] mix-blend-overlay"
//             alt=""
//             src="/rectangle@2x.png"
//           />
//           <div className="absolute top-[129px] left-[0px] w-[1440px] h-[659px] text-sm text-gray-200">
//             <div className="absolute top-[215.62px] left-[447px] bg-pimary-colour w-[993px] h-[354.3px]" />
//             <img
//               className="absolute top-[0px] left-[1011.01px] w-[367px] h-[371.51px]"
//               alt=""
//               src="/star-3.svg"
//             />
//             <img
//               className="absolute top-[4.05px] left-[899px] w-[432px] h-[654.95px] object-cover"
//               alt=""
//               src="/jessicaradanavongichpbhfd0pwunsplash@2x.png"
//             />
//             <div className="absolute top-[215.62px] left-[447px] bg-pimary-colour w-[993px] h-[354.3px] opacity-[0.2]" />
//             <img
//               className="absolute top-[491.97px] left-[944px] w-16 h-[89.08px]"
//               alt=""
//               src="/star-4.svg"
//             />
//             <div className="absolute top-[485.9px] left-[1300px] uppercase inline-block w-[117px] h-[16.2px]">
//               Oregon jacket
//             </div>
//             <div className="absolute top-[505.13px] left-[1300px] inline-block w-[31px] h-[16.2px]">
//               $124
//             </div>
//             <div className="absolute top-[536.01px] left-[-0.5px] box-border w-[977px] h-px border-t-[1px] border-solid border-grey-scale-000" />
//           </div>
//           <img
//             className="absolute top-[998px] left-[682px] w-[304px] h-[322px] object-cover"
//             alt=""
//             src="/zamnungarayacw3b7q6ys0unsplash@2x.png"
//           />
//           <img
//             className="absolute top-[998px] left-[1343px] w-[304px] h-[322px] object-cover"
//             alt=""
//             src="/philipparltnmh9a0obon8unsplash@2x.png"
//           />
//           <img
//             className="absolute top-[998px] left-[346px] w-[310px] h-[322px] object-cover"
//             alt=""
//             src="/philipparlt8eyb-rvawtyunsplash@2x.png"
//           />
//           <div className="absolute top-[280px] left-[115px] text-116xl leading-[102.6px] font-extrabold font-h1-title inline-block w-[689px] h-[151px] [-webkit-text-stroke:1px_#fff]">
//             Fresh
//           </div>
//           <div className="absolute top-[860px] left-[83px] text-71xl font-semibold font-h1-title text-grey-scale-1000 inline-block w-[689px] h-[151px]">
//             New products
//           </div>
//           <div className="absolute top-[505px] left-[187px] text-116xl leading-[102.6px] font-extrabold font-h1-title [-webkit-text-stroke:1px_#fff]">
//             Look
//           </div>
//           <div className="absolute top-[396px] left-[424px] text-116xl leading-[102.6px] font-extrabold font-h1-title inline-block w-[710px] h-36 [-webkit-text-stroke:2px_#fff]">
//             2022
//           </div>
//           <div className="absolute top-[999px] left-[91px] text-grey-scale-1000">
//             Apparel
//           </div>
//           <div className="absolute top-[1043px] left-[91px] text-7xl font-semibold font-h1-title text-grey-scale-1000">
//             Accessories
//           </div>
//           <div className="absolute top-[1094px] left-[91px] text-grey-scale-1000">
//             Best sellers
//           </div>
//           <div className="absolute top-[1138px] left-[91px] text-grey-scale-1000">
//             50% off
//           </div>
//           <div className="absolute top-[0px] left-[0px] bg-gray-100 w-[1440px] h-[42px]" />
//           <div className="absolute top-[2082px] left-[-9px] bg-grey-scale-1000 w-[1455px] h-[66px]" />
//           <img
//             className="absolute top-[1562px] left-[0px] w-[1440px] h-[520px] object-cover"
//             alt=""
//             src="/18591063@2x.png"
//           />
//           <div className="absolute top-[115px] left-[137px] inline-block w-[71px] h-7 [-webkit-text-stroke:1px_#fff]">
//             HOME
//           </div>
//           <div className="absolute top-[115px] left-[314px] inline-block w-[70px] h-7 [-webkit-text-stroke:1px_#fff]">
//             ABOUT
//           </div>
//           <div className="absolute top-[2106px] left-[601px] text-xs font-poppins">
//             Copyright 2022 All Right Reserved By SG
//           </div>
//           <div className="absolute top-[115px] left-[755px] inline-block w-[118px] h-7 [-webkit-text-stroke:1px_#fff]">
//             CONTACT US
//           </div>
//           <div className="absolute top-[70px] left-[1299px] text-sm [-webkit-text-stroke:1px_#fff]">
//             BAG (0)
//           </div>
//           <div className="absolute top-[70px] left-[1200px] text-sm [-webkit-text-stroke:1px_#fff]">
//             WISHLIST (0)
//           </div>
//           <div className="absolute top-[41px] left-[90px] text-[40px] font-extralight font-poppins [-webkit-text-stroke:1px_#fff]">
//             ShopKart
//           </div>
//           <div className="absolute top-[13px] left-[118px] text-xs font-poppins text-dimgray">
//             Free Delivery
//           </div>
//           <div className="absolute top-[13px] left-[222px] text-xs font-poppins text-dimgray inline-block w-[109px] h-[15px]">
//             Return Policy
//           </div>
//           <div className="absolute top-[14px] left-[1164px] text-3xs font-poppins text-dimgray">
//             Login
//           </div>
//           <div className="absolute top-[14px] left-[1226px] text-3xs font-poppins text-dimgray">
//             Follow US
//           </div>
//           <img
//             className="absolute top-[15px] left-[90px] w-[21px] h-[12.9px]"
//             alt=""
//             src="/layer-156.svg"
//           />
//           <img
//             className="absolute top-[17px] left-[1287px] w-[4.5px] h-[7.6px]"
//             alt=""
//             src="/vector.svg"
//           />
//           <img
//             className="absolute top-[17px] left-[1303px] w-2 h-[7.64px]"
//             alt=""
//             src="/vector1.svg"
//           />
//           <img
//             className="absolute top-[18px] left-[1323px] w-[7.6px] h-[5.6px]"
//             alt=""
//             src="/vector2.svg"
//           />
//           <img
//             className="absolute top-[17px] left-[1342px] w-2 h-2"
//             alt=""
//             src="/group-6.svg"
//           />
//           <div className="absolute top-[10.5px] left-[207.5px] box-border w-px h-5 border-r-[1px] border-solid border-dimgray" />
//           <img
//             className="absolute top-[87px] left-[90px] w-[1260px] h-[22px]"
//             alt=""
//             src="/group-16.svg"
//           />
//           <img
//             className="absolute top-[954px] left-[67px] w-[659px] h-[22px]"
//             alt=""
//             src="/group-17.svg"
//           />
//           <div className="absolute top-[1661px] left-[103px] text-grey-scale-200 inline-block w-[337px] h-[52px]">
//             <p className="m-0">&nbsp;</p>
//             <p className="m-0">
//               Get news about articles and updates in your inbox.
//             </p>
//           </div>
//           <div className="absolute top-[1644px] left-[103px] text-7xl font-semibold font-h1-title text-grey-scale-200 inline-block w-[385px] h-[52px]">
//             Newslleter
//           </div>
//           <div className="absolute top-[1644px] left-[630px] text-grey-scale-200 inline-block w-[303px] h-[30px]">
//             NAME
//           </div>
//           <div className="absolute top-[1709px] left-[630px] text-grey-scale-200 inline-block w-[303px] h-[30px]">
//             EMAIL
//           </div>
//           <div className="absolute top-[1778px] left-[630px] text-grey-scale-200 inline-block w-[303px] h-[30px]">
//             MESSAGE
//           </div>
//           <img
//             className="absolute top-[922.11px] left-[1280.5px] w-[55.5px] h-[5.77px]"
//             alt=""
//             src="/arrow-1.svg"
//           />
//           <img
//             className="absolute top-[922.11px] left-[1178px] w-[55.5px] h-[5.77px]"
//             alt=""
//             src="/arrow-2.svg"
//           />
//           <div className="absolute top-[1846px] left-[90px] text-116xl leading-[102.6px] font-extrabold font-h1-title inline-block w-[1159px] h-[236px] [-webkit-text-stroke:1px_#fff]">
//             <p className="m-0">{`GET `}</p>
//             <p className="m-0">IN TOUCH</p>
//           </div>
//           <div className="absolute top-[1673.5px] left-[615.5px] box-border w-[559px] h-px border-t-[1px] border-solid border-grey-scale-000" />
//           <div className="absolute top-[1738.5px] left-[615.5px] box-border w-[559px] h-px border-t-[1px] border-solid border-grey-scale-000" />
//           <div className="absolute top-[1807.5px] left-[615.5px] box-border w-[559px] h-px border-t-[1px] border-solid border-grey-scale-000" />
//           <div className="absolute top-[1822px] left-[1162px] w-[181px] h-[181px] text-7xl text-pimary-colour">
//             <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-[181px] h-[181px] border-[2px] border-solid border-pimary-colour" />
//             <div className="absolute top-[83px] left-[55px] leading-[16px]">
//               SEND
//             </div>
//           </div>
//           <div className="absolute top-[1275px] left-[611px] w-[45px] h-[45px]">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
//             <img
//               className="absolute h-[33.33%] w-[33.33%] top-[33.33%] right-[35.56%] bottom-[33.33%] left-[31.11%] max-w-full overflow-hidden max-h-full"
//               alt=""
//               src="/vector3.svg"
//             />
//           </div>
//           <div className="absolute top-[1275px] left-[941px] w-[45px] h-[45px]">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
//             <img
//               className="absolute h-[33.33%] w-[33.33%] top-[33.33%] right-[35.56%] bottom-[33.33%] left-[31.11%] max-w-full overflow-hidden max-h-full"
//               alt=""
//               src="/vector4.svg"
//             />
//           </div>
//           <div className="absolute top-[1275px] left-[1272px] w-[45px] h-[45px]">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
//             <img
//               className="absolute h-[33.33%] w-[33.33%] top-[33.33%] right-[35.56%] bottom-[33.33%] left-[31.11%] max-w-full overflow-hidden max-h-full"
//               alt=""
//               src="/vector5.svg"
//             />
//           </div>
//           <img
//             className="absolute top-[998px] left-[1012px] w-[305px] h-[322px] object-cover"
//             alt=""
//             src="/malickimbeserpkmvkg7vnuounsplash@2x.png"
//           />
//           <div className="absolute top-[1275px] left-[1272px] w-[45px] h-[45px]">
//             <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-gray-200" />
//             <img
//               className="absolute h-[33.33%] w-[33.33%] top-[33.33%] right-[35.56%] bottom-[33.33%] left-[31.11%] max-w-full overflow-hidden max-h-full"
//               alt=""
//               src="/vector6.svg"
//             />
//           </div>
//           <div className="absolute top-[696px] left-[115px] flex flex-col items-center justify-center gap-[3px] border-[1px] border-solid border-grey-scale-000">
//             <div className="self-stretch flex flex-row items-baseline justify-start gap-[8px]">
//               <div className="flex flex-row items-start justify-start">
//                 <div className="relative">See more</div>
//               </div>
//               <img className="relative w-2.5 h-2.5" alt="" src="/vector7.svg" />
//             </div>
//             <div className="self-stretch relative box-border h-px border-t-[1px] border-solid border-grey-scale-000" />
//           </div>
//           <div className="absolute top-[115px] left-[490px] box-border w-[159px] h-[123px] text-sm border-[1px] border-solid border-grey-scale-000">
//             <div className="absolute h-[22.76%] w-full top-[0%] left-[0%] text-lg font-medium inline-block">
//               OUR PRODUCTS
//             </div>
//             <div className="absolute h-[22.76%] w-[81.13%] top-[23.58%] left-[0%] font-light inline-block">
//               PRODUCT 1
//             </div>
//             <div className="absolute h-[22.76%] w-[81.13%] top-[41.46%] left-[0%] font-light inline-block">
//               PRODUCT 2
//             </div>
//             <div className="absolute h-[22.76%] w-[81.13%] top-[59.35%] left-[0%] font-light inline-block">
//               PRODUCT 3
//             </div>
//             <div className="absolute h-[22.76%] w-[81.13%] top-[77.24%] left-[0%] font-light inline-block">
//               PRODUCT 4
//             </div>
//             <div className="absolute h-[0.81%] w-[88.05%] top-[18.29%] right-[12.26%] bottom-[80.89%] left-[-0.31%] box-border border-t-[1px] border-solid border-grey-scale-000" />
//           </div>
//           <div className="absolute top-[1332px] left-[346px] flex flex-col items-start justify-start text-7xl text-grey-scale-1000 font-h1-title">
//             <div className="w-[310px] flex flex-col py-0 px-2 box-border items-start justify-start gap-[8px]">
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 FLORIDA JACKET
//               </div>
//               <div className="relative text-sm font-body-text-18 text-greyscale-400 inline-block w-[303px] h-[49px] shrink-0">
//                 Suffered alteration in some form, bysuffalterattion in some forme,
//                 byinjected humor, or randomised
//               </div>
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 $100
//               </div>
//             </div>
//           </div>
//           <div className="absolute top-[1332px] left-[682px] flex flex-col items-start justify-start text-7xl text-grey-scale-1000 font-h1-title">
//             <div className="w-[310px] flex flex-col py-0 px-2 box-border items-start justify-start gap-[8px]">
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 FLORIDA JACKET
//               </div>
//               <div className="relative text-sm font-body-text-18 text-greyscale-400 inline-block w-[303px] h-[49px] shrink-0">
//                 Suffered alteration in some form, bysuffalterattion in some forme,
//                 byinjected humor, or randomised
//               </div>
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 $100
//               </div>
//             </div>
//           </div>
//           <div className="absolute top-[1332px] left-[1012px] flex flex-col items-start justify-start text-7xl text-grey-scale-1000 font-h1-title">
//             <div className="w-[310px] flex flex-col py-0 px-2 box-border items-start justify-start gap-[8px]">
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 FLORIDA JACKET
//               </div>
//               <div className="relative text-sm font-body-text-18 text-greyscale-400 inline-block w-[303px] h-[49px] shrink-0">
//                 Suffered alteration in some form, bysuffalterattion in some forme,
//                 byinjected humor, or randomised
//               </div>
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 $100
//               </div>
//             </div>
//           </div>
//           <div className="absolute top-[1332px] left-[1343px] flex flex-col items-start justify-start text-7xl text-grey-scale-1000 font-h1-title">
//             <div className="w-[310px] flex flex-col py-0 px-2 box-border items-start justify-start gap-[8px]">
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 FLORIDA JACKET
//               </div>
//               <div className="relative text-sm font-body-text-18 text-greyscale-400 inline-block w-[303px] h-[49px] shrink-0">
//                 Suffered alteration in some form, bysuffalterattion in some forme,
//                 byinjected humor, or randomised
//               </div>
//               <div className="relative font-semibold inline-block w-[258px] h-[30px] shrink-0">
//                 $100
//               </div>
//             </div>
//           </div>
//         </div>
//       );
//     };
// export default Productlisting