import Nav from './navbar';
import Main from './main';
import Footer from './footer';
import Modal from './modal'
import { useGlobalContext } from './context';

const Home = ()=>{
 const {isModalOpen} = useGlobalContext()
  
 return (
  <div className={`${isModalOpen?'fixed':'static'}`}>
  
     <Nav/>
     <Main/>
     <Modal />
    <Footer />
  
   </div>
 )
}
export default Home