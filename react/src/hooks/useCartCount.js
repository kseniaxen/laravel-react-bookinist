import { useState, useEffect } from 'react';
import { getAmountCart } from "../cart-storage.js";

export const useCartCount = () => {
    const [count, setCount] = useState(getAmountCart());

    useEffect(() => {

    const updateCount = () => setCount(getAmountCart());

    window.addEventListener('storage', updateCount);
    window.addEventListener('cartUpdated', updateCount);
    
    return () => {
        window.removeEventListener('storage', updateCount);
        window.removeEventListener('cartUpdated', updateCount);
    };
    }, []);

    return count;
};