import ProductCard from "./ProductCard";
 export default function ProductList(props){
    return(
        <div>
            {props.products.map((i)=>(
            <ProductCard
            key={i.id}
            id={i.id}
            name={i.name}
            price={i.price}
            stock={i.stock}
            />
        )

        )}
        </div>
    );
 }