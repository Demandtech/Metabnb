import React from "react"
import heroImg from './images/hero-img.png';
import metaMask from './images/metamask.svg';
import mbtoken from './images/mbtoken.svg';
import opensea from './images/opensea.svg';
import Grid  from "./grid";
const Main = ()=> {
  return (
      <main>
          <Hero />
          <Brands />
          <GridHeader />
          <Grid />
          <Nft />
      </main>
  )
}


const Hero = ()=> {
 return (
     <section id=''>
         <div className='w-5/6 mx-auto md:justify-between flex flex-col md:flex-row-reverse items-center my-10 md:space-y-0'>
             <div className='md:w-2/5 pb-10'>
                 <img src={heroImg} alt='hero' width='100%'/>
             </div>
             <div className='text-center md:text-left md:w-3/5 flex flex-col mb-32 space-y-8 md:pr-20'>
                 <h1 className='text-2xl md:text-5xl font-medium text-textDark md:leading-tight'> Rent a <span className='font-bold text-purpleText'>Place</span> away from <span className='font-bold text-purpleText'>
                     Home </span> in the <span className='font-bold text-purpleText'> Metaverse </span>
                 </h1>
                 <p className="text-base md:text-xl leading-loose">
                     we provide you access to
                     luxury and affordable houses
                     in the metaverse, get a
                     chance to turn your<br className="hidden md:block"/>
                     imagination to reality at
                     your comfort zone
                 </p>
                 <form className='w-full flex'>
                     <input className="w-3/5 pl-4 py-2 border-y border-l rounded-l-lg" type='text' placeholder='Search for location'/>
                     <button className="bg-purpleText w-2/5 text-whiteText rounded-r-lg hover:opacity-80">Search</button>
                 </form>
             </div>
         </div>
     </section>
 )
}

const Brands = ()=>{
    return(
        <section className="bg-purpleText w-full py-3">
            <div className="flex justify-between w-5/6 mx-auto">
                 <div className="w-1/6">
                      <img src={mbtoken} alt="mbtoken"/>
                 </div>
                 <div className="w-1/6">
                      <img src={metaMask} alt="metamask"/>
                 </div>
                 <div className="w-1/6">
                     <img src={opensea} alt="opensea"/>
                 </div>
                 
            </div>
        </section>
    )
}
const GridHeader =()=>{
    return (
        <div className='py-10'>
            <h2 className='text-center text-2xl font-bold text-blackText'>
                Inspiration for your next
                adventure
            </h2>
        </div>
    )
}

const Nft = ()=> {
    return (
        <section className="bg-purpleText py-20 mt-10">
            <div className="md:flex items-center w-5/6 mx-auto text-whiteText">
                <div className="md:w-2/5 md:pr-10 flex flex-col space-y-10 mb-10">
                     <h2 className="font-bold text-2xl">Metabnb NFTs</h2>
                        <p className="leading-loose">
                            Discover our NFT gift cards
                            collection. Loyal customers gets
                            amazing gift cards which are
                            traded as NFTs. These NFTs gives
                            our cutomer access to loads of our
                            exclusive services.
                        </p>
                        <a className="self-start text-purpleText bg-whiteText rounded py-5 px-10 font-medium border-2 border-whiteText hover:bg-purpleText hover:text-whiteText hover:border-2" href="/.">learn more</a>
                </div>
                <div className="md:w-3/5">
                     <img src={require('./images/nft.png')} alt="" />
                </div>
            </div>
        </section>
    )
}

export default Main