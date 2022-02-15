import './Tours.css';
import { Link } from 'react-router-dom';
import Tour from './Tour/Tour';
// import Data from  "../../data/db.json";

function Tours(props) {
    return (
        <>
            {props.data.map((tour, idx) => {
                return (
                    <div key={idx}>
                        <Link to={`/city/${tour.id}`}>
                            <Tour tour={tour} />
                        </Link>
                    </div>
                );
            })}
        </>
    );
}

export default Tours;