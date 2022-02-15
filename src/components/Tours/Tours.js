import'./Tours.css';
import Tour from './Tour/Tour';
import Data from  "../../data/db.json";

function Tours (props){
return (
    <>
                 <Tour Data = {Data}/>
    </>
);
}

export default Tours;