import {useState} from "react";

function RecipeItem(props){
    const [likes,setLikes] = useState(0);
    return(
        <div>
            <h2> nom :{props.nom}</h2>
            <p>prix: {props.prix}</p>
            <p> likes = {likes}</p>
            <button onClick={() => setLikes(likes + 1)}> J'aime</button>
        </div>
    );
}
export default RecipeItem;