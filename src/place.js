import React from 'react'
import Footer from './footer'
import Navbar from './navbar'
import Grid from './grid'
// import { FaStar } from 'react-icons/fa'
import { GoSettings } from 'react-icons/go'


const Place = () => {
    return (
        <>
            <Navbar />
            <FilterList />
            <div className="mb-4">
             <Grid />
            </div>
            <Grid />          
            <Footer />
        </>
    )
}


const FilterList = () => {
    return (
        <section className=''>
            <div className='py-10 w-90 mx-auto'>
                <ul className='grid grid-cols-2 gap-5 md:gap-3 lg:gap-0 md:grid-cols-3 lg:grid-cols-9 md:w-11/12 items-center text-darkText'>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm'>Restaurant</li>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm '>Cottage</li>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm'>Castle</li>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm'>fantast city</li>                
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm'>beach</li>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm'>Carbins</li>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm'>Off-grid</li>
                        <li className='text-lg cursor-pointer hover:bg-lightGrey text-center rounded-sm mr-5'>Farm</li>
                        <li className='text-lg cursor-pointer text-center'>
                        <button className='flex basis-1 items-center py-2 px-5 border rounded-md'>
                            Location
                            <GoSettings className='rotate-90 ml-5' />
                        </button>
                        </li>
                </ul>
            </div>
        </section>
    )
}

export default Place
