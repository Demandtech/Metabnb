import React from "react";

import {
    FaTimes,
    FaChevronRight,
} from 'react-icons/fa'
import metapng from './images/meta-icon.png'
import walletpng from './images/wallet-icon.png';
import { useGlobalContext } from "./context";

const Modal = ()=>{
   const {isModalOpen, closeModal} = useGlobalContext()
  return (
    <section className={`${isModalOpen?'block':'hidden'}`}>
      <div className='fixed top-0 w-full justify-center h-screen flex items-center bg-transparent'>
          <div className='modal-wrapper bg-whiteText w-4/5 md:w-2/5 lg:w-2/6  relative rounded-lg pb-4'>
              <div className='flex items-center justify-between p-4 border-b-2'>
                  <h3 className="font-bold text-xl">
                      Connect Wallet
                  </h3>
                  <button className="" onClick={closeModal}>
                     <FaTimes />
                  </button>
              </div>
              <div className='px-4'>
                  <p className="py-4"> Choose your preferred wallet:</p>
                  <div className="py-2 px-5 mb-2 bg-midGrey border rounded-lg">
                        <a href="" className="flex items-center">
                            <div className="mr-2">
                               <img src={metapng} alt="" />
                            </div>
                            <h4>Metamask</h4>
                            <div className="ml-auto">
                                 <FaChevronRight/>
                            </div>
                        </a>
                  </div>
                  <div className="py-2 px-5 my-1 border rounded-lg">
                        <a href="" className="flex items-center">
                            <div className="mr-3">
                               <img src={walletpng} alt="logo" />
                            </div>
                            <h4>Metamask</h4>
                            <div className="ml-auto">
                               <FaChevronRight/>
                            </div>
                        </a>
                  </div>
              </div>
          </div>
      </div>
      </section>
  )
}


export default Modal