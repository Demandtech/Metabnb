import React, {useState} from "react";
import {Link} from 'react-router-dom'
import Logo from './images/logo.png';
import {FaBars} from 'react-icons/fa';
import { useGlobalContext } from "./context";

const Navbar = ()=> {
 const [shownav, setShownav] = useState(false);
 const {openModal} = useGlobalContext()
 return (
     <nav className='relative w-90 mx-auto py-5'>
         <div className="flex items-center justify-between flex-wrap">
             <div className=''>
                 <img src={Logo} alt='logo' width="80%"/>          
             </div>
           <div className={`${shownav ?'block transition-all' : 'hidden lg:block border-b-4 lg:border-b-0 transition-all'}`}>
             <ul className='pb-5 lg:pb-0 absolute left-0 top-20 lg:static w-full bg-whiteText lg:flex lg:space-x-6 lg:items-center lg:w-auto border-b-4 lg:border-b-0'>
                     <li className='hover:text-purpleText  text-lg text-darkText font-medium font-normal'>
                         <Link to='/'>Home</Link>
                     </li>
                     <li className='hover:text-purpleText   text-darkText text-lg font-medium md:font-normal'>
                         <Link to='./place'>Place to stay</Link>
                     </li>
                     <li className='hover:text-purpleText text-darkText text-lg font-medium md:font-normal'>
                         <Link className='nav-link' to='/'>NFTs</Link>
                     </li>
                     <li className='hover:text-purpleText text-darkText text-lg font-medium md:font-normal mb-5 md:mb-0'>
                         <Link className='nav-link' to='/'>Community</Link>
                     </li>
                    <button className='pb-2 pt-3 px-6 text-white bg-purpleText rounded-md lg:hidden hover:opacity-80'>
                            Create wallet
                    </button>
            </ul>
            </div>
            <div>
            </div>
                <button onClick={openModal} className='pb-2 pt-3 px-6 text-white bg-purpleText rounded-md hidden lg:block hover:opacity-80'>
                        Create wallet
                </button>
             <button onClick={()=> setShownav(!shownav)} className="block lg:hidden hover:text-purpleText text-2xl">
                    <FaBars />
              </button>
         </div>
     </nav> 
 )
}

export default Navbar