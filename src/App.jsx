
import StudentProfile from "./StudentProfile";
import ProductCard from "./ProductCard";
import ProductList from "./ProductList";
import FavoriteMovies from "./FavoriteMovies";

import ListeTaches from "./ListeTaches";
function App() {
  let products = [ { id: 1, name: "Clavier",
     price: 150, stock: true }, 
     { id: 2, name: "Souris",
       price: 80, stock: true },
        { id: 3, name: "Écran",
           price: 1200, stock: false }, 
           { id: 4, name: "Casque", 
            price: 250, stock: true } ]; 
  return (
    <div>
      {products.map((p)=>(
        <ProductCard 
        key = {p.id}
        name ={p.name}
        price={p.price}
        stock={p.stock}
        />
      )

      )}

      <StudentProfile/>
      <ProductList products={products} />
      <ListeTaches/>
      <FavoriteMovies/>

    </div>
  );
}
export default App;
