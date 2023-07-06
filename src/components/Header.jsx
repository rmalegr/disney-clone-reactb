import logo from '../assets/images/logo.png'

import { HiHome,
        HiMagnifyingGlass,
        HiStar,
        HiPlayCircle,
         HiTv
} from "react-icons/hi2";

import { HiPlus,HiDotsVertical } from "react-icons/hi";    
import HeaderItem from './HeaderItem';
import { useState } from 'react';
const Header = () => {
const [toggle, setToggle] = useState(false);
  const menu=[
        {
            name:'HOME',
            icon:HiHome
        },

        {
            name:'SEARCH',
            icon:HiMagnifyingGlass
        },
        {
            name:'WATCH LIST',
            icon:HiPlus
        },
        {
            name:'ORIGINALS',
            icon:HiStar
        },
        {
            name:'MOVIES',
            icon:HiPlayCircle
        },
        {
            name:'SERIES',
            icon:HiTv
        }
    ]
  return (
    <div className='flex items-center justify-between p-5'>
      <div className='flex  gap-8 items-center'>
        <img src={logo} alt="logo" className='object-cover w-[80px] md:w-[115px] ' />
        <div className='hidden md:flex gap-8 '>
          {menu.map((item) => (
          <HeaderItem   key={item.name}   name={item.name} Icon={item.icon}  />
        ))}
        </div>
        <div className=' flex md:hidden gap-5'>
              {menu.map((item, index) => index <3 && (
                 <HeaderItem   key={item.name}   name={''} Icon={item.icon}  />
              ))}
        <div className='md:hidden' onClick={() => setToggle(!toggle)}>
            <HeaderItem name='' Icon={HiDotsVertical} />
             {toggle? <div className='absolute mt-3 bg-[#121212] border-[1px] p-3 border-gray-700 px-5 py-4 ' >
                {menu.map((item, index) => index >2 && (
                  <HeaderItem   key={item.name}   name={item.name} Icon={item.icon}  />
                ))}
              
            </div>:null}
           </div>
        </div>
      </div> 
       <img src="https://lh3.googleusercontent.com/ogw/AOLn63E-GR9irJ-LEkc8UySaEXW0u0YK6RnZzyF3lJY3tQ=s32-c-mo"
        className='w-[40px] rounded-full'/>
    </div>
  )
}

export default Header