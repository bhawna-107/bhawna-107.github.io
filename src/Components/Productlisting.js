import React, { useState, useEffect } from 'react';
import axios from 'axios';
import arrow1 from '../assets/Arrow1.png';
import arrow2 from '../assets/Arrow2.png';
import starline from '../assets/star-line.png';
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
        </div>

        <div className='flex flex-wrap gap-3 '>

          {products.map(product => (
            <div className='lg:w-[300px] w-[100%] relative  border border-gray-300 py-2 px-4'>
              <div className="h-[300px]">
              <img className="h-full w-full object-contain" src={product.image} alt='product1' />
            </div>
           
            <div className=''>
            <h2 className="text-black  h-16 overflow-hidden  sm:w-[280px] w-full text-[26px] font-semibold">{product.title}</h2>
            <p className=" sm:w-[280px]  w-full h-40 overflow-hidden  text-opacity-50 text-sm font-normal">
             {product.description}
            </p>
            <p className='text-black text-[26px] font-semibold'>${product.price}</p>  
            </div>
            <img className="absolute sm:top-[255px] sm:left-[255px] left-[80%] top-[40%]" src={productarrow} alt='arrow' />
      </div>



/////////code witgout api /////////////////
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





























