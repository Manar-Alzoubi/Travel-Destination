import './Home.css';
import Data from "../../data/db.json";
import Header from '../Header/Header';
 import Tours from '../Tours/Tours';
import Footer from '../Footer/Footer';
function Home() {
  return (
   
     <>
     <Header/>
     <Tours data = {Data} />
     <Footer/> 
    </>
   
  );
}

export default Home;
