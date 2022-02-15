
function TourDetails (props){
    return (
        <>
         return props.ispressed ?   <button onClick={props.handlePress}>see less</button> :   <button onClick={props.handlePress}>see more</button>
        </>
    );
    }
    
    export default TourDetails;