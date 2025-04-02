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

export function getCart() {
    const cartData = localStorage.getItem('cart');
    return cartData ? JSON.parse(cartData) : null;
}

export function deleteFromCart(idItem) {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const newArray = cartData.filter(item => item !== idItem);
    console.log(newArray)

    localStorage.setItem('cart', JSON.stringify(newArray));
    window.dispatchEvent(new Event('cartUpdated'));
}