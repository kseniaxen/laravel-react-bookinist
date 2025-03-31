export function cartAdd(idItem) {
    let cartItems;
    if (localStorage.getItem('cart')) {
        cartItems = JSON.parse(localStorage.getItem('cart'));
        if (!cartItems.includes(idItem)) {
            cartItems.push(idItem);
        }
    } else {
        cartItems = [idItem];
    }
    localStorage.setItem('cart', JSON.stringify(cartItems));

    window.dispatchEvent(new Event('cartUpdated'));
}

export function getAmountCart() {
    const cart = localStorage.getItem('cart');
    return cart ? JSON.parse(cart).length : 0;
}