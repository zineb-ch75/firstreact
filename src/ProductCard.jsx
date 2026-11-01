
export default function ProductCard(props){
    return(
        <div>
            <p> nom : {props.name}</p>
           <p> prix: {props.price}</p> 
            {props.stock === true ? "Disponible":"Rupture de stock"}
        </div>
    );
}

