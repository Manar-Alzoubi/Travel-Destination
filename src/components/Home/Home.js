 import Tours from '../Tours/Tours';
 import data from '../../data/db.json';
 import Header from '../Header/Header';
 import Footer from '../Footer/Footer';
 import {Routes ,Route} from 'react-router-dom';
function Home() {
  return (
     <>
     <Tours data={data} />
    </>
   
  );
}

export default Home;
