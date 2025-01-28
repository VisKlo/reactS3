import { useCartStore } from "@store/useCartStore"
import { Button } from "@atoms/Button"
import React from "react"

export const Header: React.FC = () => {
    const { items, clearCart } = useCartStore();

    return (
        <header>
            <h1>Mon magasion</h1>
            <div>
                <p>Articles dans le panier : { items.length }</p>
                <Button label="Commander" onClick={clearCart}/>
            </div>
        </header>
    )
}