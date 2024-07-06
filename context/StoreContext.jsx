import { createContext, useState, useEffect } from "react";
import { categories } from "../src/data";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cartItems");
        return savedCart ? JSON.parse(savedCart) : {};
    });

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => {
            const newCart = { ...prev };
            if (newCart[itemId] > 1) {
                newCart[itemId] -= 1;
            } else {
                delete newCart[itemId];
            }
            return newCart;
        });
    };

    useEffect(()=> {
        console.log(cartItems)
    },[cartItems])

    const contextValue = {
        categories,
        addToCart,
        removeFromCart,
        setCartItems,
        cartItems
    };

    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    );
};

export default StoreContextProvider;
