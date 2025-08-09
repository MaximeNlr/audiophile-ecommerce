import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const addToCart = (product, quantity) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.product.id === product.id);

            if (existingItem) {
                return prevCart.map(item =>
                    item.product.id === product.id
                        ? { ...item, quantity: item.quantity + quantity }
                        : item
                );
            }
            return [...prevCart, { product, quantity }];
        });
    };

    const updateQuantity = (product, quantity) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.product.id === product.id
                    ? { ...item, quantity }
                    : item
            )
        );
    };

    const deleteButton = (product) => {
        setCart(prevCart => prevCart.filter(item => item.product.id !== product.id))
    }

    const clearCart = () => setCart([]);

    const totalQuantity = cart.reduce((acc, item) => acc + item.quantity, 0);
    const total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0)
    const shipping = 50
    const vat = total * 20 / 100
    const grandTotal = vat + total + shipping

    return (
        <CartContext.Provider value={{ cart, addToCart, clearCart, updateQuantity, totalQuantity, total, shipping, vat, grandTotal, deleteButton }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    return useContext(CartContext);
}
