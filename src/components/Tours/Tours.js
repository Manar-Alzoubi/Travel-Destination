import'./Tours.css';

function Tours (props){
return (
    <>
    {props.data.map(data => {
        return(
        <div>
            <img src={data.image}  alt={data.name}/> 
            <h3>name: {data.name}</h3>
        </div>
        );
    })}
    </>
);
}

export default Tours;