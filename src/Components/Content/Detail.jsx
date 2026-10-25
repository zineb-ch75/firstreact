import zineb from "../images/zineb.jpeg"
import "./Detail.css";
function Detail(){
    let info= {Nom: "Zineb Chbaiboun",
         Id: 321000001,
          Class : 4,
           Section: "A"};
    return(
        <div className="detail">
            <img src={zineb}/>
            <h1 className="Nom">{info.Nom}</h1>
            <p > Student ID: {info.Id}</p>
            <p> Class: {info.Class}</p>
            <p>Section: {info.Section}</p>
        </div>
    );
}
export default Detail;