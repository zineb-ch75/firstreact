import React from "react";
import ProductCard from "./ProductCard";

function ProductList(){
    const product = [
        { id: 1, name: "Clavier", price: 150, stock: true },
        { id: 2, name: "Souris", price: 80, stock: true },
        { id: 3, name: "Écran", price: 1200, stock: false },
        { id: 4, name: "Casque", price: 250, stock: true }
    ];

    return (
        <div>
            {product.map((p) => (
                <ProductCard
                    key = {p.id}
                    name = {p.name}
                    price={p.price}
                    stock = {p.stock}
                />
            )
            )}
        </div>
    );
}

 export default ProductList;