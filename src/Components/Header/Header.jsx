import bmw from "../images/BMW M4 GT3.jpg";
import "./Header.css";
function Header(){
    return(
        <div>
        <h1> BMW M4 GT3 </h1>
        <img  src={bmw} className="bmw" /> 
        </div>
    );
}
export default Header;