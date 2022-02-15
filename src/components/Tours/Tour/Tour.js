
function Tour(props) {
    return (
        <>
            <div>
                 <img src={props.tour.image} alt={props.tour.name} /> 
                <h3>name: {props.tour.name}</h3>
            </div>
        </>
    );
}

export default Tour;