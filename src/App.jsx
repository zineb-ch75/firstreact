import Other from "./Components/Content/Other";
import General from "./Components/Content/General";
import Detail from "./Components/Content/Detail";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Navigation from "./Components/Navigation/Navigation";
function App(){
    return(
        <div>
            <Header/>
            <Navigation/>
            <Footer/>
            <Detail/>
            <General/>
            <Other/>
            
        </div>
    );
}
export default App;