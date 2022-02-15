import TourDetails from './components/TourDetails/TourDetails';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
function App() {
  return (


    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}> </Route>
        <Route path='/city/:id' element={<TourDetails />}> </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
