import React from "react";
import { useCartStore } from "@store/useCartStore";
import { ICartItem } from "@store/useCartStore";
import { Button } from "@atoms/Button";

export const ProductList: React.FC = () => {

    const products = [
      { id: 1, name: "Carotte", price: 10 },
      { id: 2, name: "Pomme", price: 5 },
      { id: 3, name: "Banane", price: 7 },
      { id: 4, name: "Tomate", price: 8 },
    ];

    const { items, addItem, removeItem } = useCartStore();
    const isInCart = (id: number) => items.some((item: ICartItem) => item.id === id);

    return (
        <div>
            <h2>Liste de produits</h2>
            <div>
                {products.map((product) => (
                    <div key={ product.id }>
                        <h3>{ product.name }</h3>
                        <p>{ product.price }</p>
                        {isInCart(product.id) ? (
                            <Button label="Retirer du panier" onClick={() => removeItem(product.id)} />
                        ) : (
                            <Button label="Ajouter au panier" onClick={() => addItem(product)} />
                        )}
                    </div>
                ))}
            </div>
        </div>
    )

}