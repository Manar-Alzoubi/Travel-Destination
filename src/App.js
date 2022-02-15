import logo from './logo.svg';
import Home from './components/Home/Home';

import { Routes, Route } from 'react-router-dom';
import Tours from './components/Tours/Tours';
function App() {
  return (
   

    <>
    <Home/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/city/:id' element={ <Tours/> }/> 
       </Routes>
    </>
  );
}

export default App;
