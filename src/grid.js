import React from "react"
import Lists from "./maingrid"
import { FaStar } from 'react-icons/fa'
const Grid = () => {
    // const {id, name, distance, available, img} = Lists;
    return (
        <section className=''>          
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-90 mx-auto justify-items-center'>
                {Lists.map((list) => {
                    const {
                        id,
                        name,
                        distance,
                        available,
                        img,
                        price,
                        icon,
                    } = list
                    return (
                        <div key={id} className='flex flex-col space-y-2 border-2 p-4 rounded-lg w-full text-xs transition-all'>
                             <div className="relative mb-2">
                                <img className="rounded-xl object-cover border-2 h-64 w-full" src={img} alt='picture not found'/>
                                <button className="transition-all absolute top-3 right-3 text-2xl text-borderColor hover:text-red-500">{icon}</button>
                             </div>
                            <div className='flex justify-between'>
                                <p className="cursor-pointer">{name}</p>
                                <strong> {price} </strong>
                            </div>
                            <div className='flex justify-between'>
                                <p>{distance}</p>
                                <p>{available}</p>
                            </div>
                            <div className='flex space-x-2 text-purpleText'>
                                <FaStar />
                                <FaStar />
                                <FaStar/>
                                <FaStar />
                                <FaStar  />
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Grid