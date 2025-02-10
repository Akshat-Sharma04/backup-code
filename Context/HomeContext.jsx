import React, { createContext, useState, useEffect } from 'react';
import all_product from '../Components/Assets/all_product';

export const HomeContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    all_product.forEach((product) => {
        cart[product.id] = 0; // Use product IDs instead of indexes
    });
    return cart;
};

const HomeContextProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(getDefaultCart());

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: (prev[itemId] || 0) + 1
        }));
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: Math.max((prev[itemId] || 0) - 1, 0)
        }));
    };

    useEffect(() => {
        console.log("Updated Cart:", cartItems);
    }, [cartItems]);

    return (
        <HomeContext.Provider value={{ all_product, cartItems, addToCart, removeFromCart }}>
            {props.children}
        </HomeContext.Provider>
    );
};

export default HomeContextProvider;
