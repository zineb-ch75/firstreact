import React from "react";

function productCard(props){
    return (
        <div>
            <h3>Nom : {props.name}</h3>
            <p> Prix :{props.price} Dh </p>

            {props.stock  ? (
                <p>Disponible</p>
            ):(
                <p>Rupture de stock</p>
            )
                }
        </div>

    ); 
}

export default productCard;