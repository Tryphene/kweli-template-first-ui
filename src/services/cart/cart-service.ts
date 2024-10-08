/* eslint-disable @typescript-eslint/no-explicit-any */
import Cookies from 'js-cookie';

// Ajouter un produit au panier
export function addToCart(product: any) {
    const cart = getCart() || [];
    
    const existingIndex = cart.findIndex(
        (item: any) => item.product_id === product?.product_id
    );

    if (existingIndex !== -1) {
        cart[existingIndex].quantity += 1;
        cart[existingIndex].final_price = cart[existingIndex].quantity * cart[existingIndex].price;
    } else {
        cart.push(product);
    }
    
    Cookies.set('cart', JSON.stringify(cart));
}

export function resetCart() {
    Cookies.set('cart', JSON.stringify([]));
    getCart();
    countItemsCart()
};

// Supprimer un produit du panier
export function removeFromCart(productId: number) {
    const cart = getCart() || [];
    
    const existingIndex = cart.findIndex(
        (item: any) => item.product_id === productId
    );
    
    if (existingIndex !== -1) {
        
        cart.splice(existingIndex, 1);
        
        Cookies.set('cart', JSON.stringify(cart));
    }
}

export function decrementQuantityProductCart(productId: number) {
    const cart = getCart() || [];
    
    const existingIndex = cart.findIndex(
        (item: any) => item.product_id === productId
    );

    if (existingIndex !== -1) {
        const existingProduct = cart[existingIndex];
        

        if (existingProduct.quantity === 1) {
            cart.splice(existingIndex, 1);
        } else {
            existingProduct.quantity -= 1;
            existingProduct.final_price = existingProduct.quantity * existingProduct.price;
        }
        
        Cookies.set('cart', JSON.stringify(cart));
    }
}

// Récupérer le panier
export function getCart () {
    const cart = Cookies.get('cart');
    return cart ? JSON.parse(cart) : [];
};

// Récupérer le panier
export function countItemsCart () {
    const cart = Cookies.get('cart');
    return cart ? JSON.parse(cart)?.length  : 0;
};

// Récupérer la quantité d'un produit
export function getProductQuantityFromCookie (productId: number) {
    const cart = Cookies.get("cart");

    if (cart) {
      const parsedCart = JSON.parse(cart);
      const product = parsedCart.find(
        (item: any) => item.product_id === productId
      );
      return product ? product.quantity : 0;
    }

    return 0;
  };
