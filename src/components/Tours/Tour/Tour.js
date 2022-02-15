import Tours from "../Tours";
import Data from  "../../../data/db.json";
import TourDetails from "../../TourDetails/TourDetails"
import { useState } from "react";

const [ispressed, setpressed] = useState(false);

const handleLoggin = () =>{

    setpressed(!ispressed) 
    
 }

function Tour (props){
    return (
        <>
        {props.data.map(data => {
            return(
                <div>
                 <img src={data.image}  alt={data.name}/> 
                <h3>name: {data.name}</h3> 
                <TourDetails ispressed={ispressed} handleLoggin={handleLoggin} />
                </div>
            );
        })}
        </>
    );
    }

export default Tour;