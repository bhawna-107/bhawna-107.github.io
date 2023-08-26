import React,{useState} from 'react';
import smallstar from '../assets/small-star.png';
import menu from '../assets/menu-icon.png';
import close from '../assets/cross.png';



const navarray = [
    { name: 'HOME', id: 'home' },
    { name: 'ABOUT', id: 'about' },
    {
      name: 'OUR PRODUCTS',
      id: 'product',
      child: [
        { name: 'PRODUCT 1', id: 'p1' },
        { name: 'PRODUCT 2', id: 'p2' },
        { name: 'PRODUCT 3', id: 'p3' },
        { name: 'PRODUCT 4', id: 'p4' },
      ],
    },
    { name: 'CONTACT US', id: 'contact' },
  ];
  

const Navbar = () => {

    const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <div>
        <div className='sm:px-[90px] px-[19px] relative cursor-pointer'>
        <div className='flex justify-between'>
          <p className='text-[40px] '>Shopkart</p>
          <div className='sm:flex hidden justify-center items-center gap-2'>
            <p>WISHLIST(0)</p>
            <p>BAG(0)</p>
          </div>
        </div>
        <p className='w-full h-[1px] bg-[#fff]'></p>
        <span>
          <img className='absolute pl-[386px] sm:h-[23px] h-[0px] top-10 z-200 ' src={smallstar} alt='star' />
        </span>

        
      <ul className='px-[47px] sm:flex flex-row hidden  gap-21 h-[28px] py-[17px] text-[18px] font-normal cursor-pointer'>
        {navarray.map((item) => (
          <li  onClick={() => setActive(item.name)} key={item.id}>
            <a href={`#${item.id}`}>{item.name}</a>
            {item.child && (
              <ul className="">
                {item.child.map((childItem) => (
                  <li key={childItem.id} className="">
                    <a href={`#${childItem.id}`} className="opacity-[50%]">
                      {childItem.name}
                    </a>
                    </li>
                    ))}
              </ul>)}
          </li>
        ))}
      </ul>
      </div>

    

        <div className=' absolute sm:top-12 top-12 pl-[40px] left-80 px-[19px] sm:hidden flex flex-1 justify-end items-center cursor-pointer '>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[100%] h-[38px] object-contain color:black'
            onClick={() => setToggle(!toggle)}
          />
          </div>

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  absolute top-22 py-20  w-full h-full justify-center max-w-7xl mx-auto z-40  bg-black`}
          >
            <ul className='list-none flex max-w-7xl   items-center flex-col gap-8'>
              {navarray.map((item) => (
                <li
                  key={item.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === item.name ? "text-orange-600" : "text-white"
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
          </div>
          </div>
  )
}

export default Navbar





