import React from 'react'
import { FaFacebookF, FaInstagram, FaTwitter, FaRegCopyright,} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className='bg-blackText mt-10 pt-10 pb-5'>
       <div className='grid grid-cols-2 gap-5 md:grid-cols-4 w-5/6 mx-auto text-whiteText justify-items-around'>
            <div className='first-wrapper'>
                <img className='w-4/5 mb-20'
                    src={require('./images/footer-logo.png')} alt=''/>
                <div className='flex space-x-4'>
                    <a href='#' className='text-lg transition-all hover:scale-150' > <FaFacebookF /> </a>
                    <a  href='#' className='text-lg transition-all hover:scale-150'> <FaInstagram /> </a>
                    <a href='#' className='text-lg transition-all hover:scale-150'> <FaTwitter /> </a>
                </div>
            </div>
            <div className='second-wrapper'>
                <ul className='footer-links'>
                    <li className='font-bold mb-5'> Comunity </li>
                    <li className='mb-2 '><a className='text-lightGrey hover:ml-1 transition-all' href='#'> NFT </a></li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#'>Tokens </a></li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#'>Landlords</a></li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#'>Discord</a></li>
                </ul>
            </div>
            <div className='third-wrapper'>
                <ul className='footer-links '>
                    <li className='font-bold mb-5'>Places</li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#'>Castle </a></li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#' > Farms</a></li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#' >Beach</a></li>
                    <li className='mb-2'><a className='text-lightGrey hover:ml-1 transition-all' href='#' >Learn more</a></li>
                </ul>
            </div>
            <div className='fourth-wrapper'>
                <ul className='footer-links'>
                    <li className='font-bold mb-5'>About us</li>
                    <li className='mb-2'><a className='text-lightGrey mb-5 transition-all hover:ml-1'  href='#'>Road map</a></li>
                    <li className='mb-2'><a className='text-lightGrey mb-5 transition-all hover:ml-1' href='#'>creators</a></li>
                    <li className='mb-2'><a className='text-lightGrey mb-5 transition-all hover:ml-1' href='#'>Career</a> </li>
                    <li className='mb-2'><a className='text-lightGrey mb-5 transition-all hover:ml-1' href='#'>Contact us</a></li>
                </ul>
            </div>
      </div>
       <div className='mt-5 w-5/6 mx-auto flex items-center md:justify-start justify-center text-whiteText'>
           <FaRegCopyright /> 
           <span>2022 Metabnb</span>
       </div>
    </footer>
  )
}
export default Footer
