
import './Header.css';
import { Link } from 'react-router-dom';

function Header(){
return(
    <>
        <h1>Travel Destination </h1>
        <nav>
                <Link to='/'>  Home </Link>
                <Link to='/city/:id'>  TourDetails  </Link>

            </nav>
    
    </>
);
}

export default Header;