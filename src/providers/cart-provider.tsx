/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect } from "react";
import { Product } from "../data-constante";
import {
  addToCart,
  getCart,
  removeFromCart,
  decrementQuantityProductCart,
  //   countItemsCart,
} from "../services/cart/cart-service";
import Cookies from "js-cookie";

type CartContextType = {
  cart: Product[];
  handleAddToCart: (product: any) => void;
  handleAddToCart2: (product: any) => void;
  handleRemoveFromCart: (product: any) => void;
  handleDecrementQuantityProductCart: (product: any) => void;
  getAmountOrder: () => number;
  countItemsCart: () => number;
  isProductIdExists: (product: any) => boolean;
  itemsCart: number;
  handleQuantityChange: (index: number, value: string) => void;
  resetCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const useCart = () => {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

type Props = {
  children: React.ReactNode;
};

export default function CartProvider({ children }: Props) {
  const [cart, setCart] = useState<Product[]>([]);
  const [itemsCart, setItemsCart] = useState(0);

  useEffect(() => {
    const cartData = getCart();
    if (cartData) {
      setCart(cartData);
    }
    countItemsCar();
  }, []);

  const resetCart = () => {
    setCart([]);
  };

  const isProductIdExists = (product: any) =>
    cart.some((item: any) => item.product_id === product?.id);

  const getAmountOrder = () =>
    cart.reduce((total, item) => total + parseFloat(item.final_price), 0);

  const countItemsCart = () => {
    return cart ? cart?.length : 0;
  };

  const countItemsCar = () => {
    console.log("k", countItemsCart());

    setItemsCart(countItemsCart());
  };

  const handleAddToCart = (product: any) => {
    const existingProduct = cart.find(
      (item: any) => item.product_id === product?.product_id
    );
    console.log("id", product?.product_id);

    if (existingProduct == null) {
      const newItem = {
        name: product?.name,
        product_id: product?.id,
        quantity: 1,
        price: product?.selling_price,
        final_price: product?.selling_price,
      };
      addToCart(newItem);
      countItemsCar();
    } else {
      console.log(existingProduct);

      addToCart(existingProduct);
    }

    setCart(getCart());
  };

  const handleAddToCart2 = (product: any) => {
    const existingProduct = cart.find(
      (item: any) => item.product_id === product?.id
    );

    if (existingProduct == null) {
      const newItem = {
        name: product?.name,
        product_id: product?.id,
        quantity: 1,
        price: product?.selling_price,
        final_price: product?.selling_price,
      };
      addToCart(newItem);
    } else {
      console.log(existingProduct);

      addToCart(existingProduct);
    }

    countItemsCar();
    setCart(getCart());
    console.log(cart);
  };

  const handleDecrementQuantityProductCart = (product: any) => {
    decrementQuantityProductCart(product?.id || product?.product_id);

    setCart(getCart());
  };

  const handleRemoveFromCart = (product: any) => {
    removeFromCart(product?.id || product?.product_id);

    setCart(getCart());
  };

  const handleQuantityChange = (index: number, value: string) => {
    const updatedCart = [...cart];

    let newQuantity = Number(value);

    if (newQuantity < 1) {
      newQuantity = 1;
    }

    updatedCart[index].quantity = newQuantity;
    updatedCart[index].final_price = (
      Number(updatedCart[index].price) * Number(updatedCart[index].quantity)
    ).toString();

    setCart(updatedCart);
    Cookies.set("cart", JSON.stringify(cart));
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        handleAddToCart,
        handleAddToCart2,
        handleRemoveFromCart,
        handleDecrementQuantityProductCart,
        isProductIdExists,
        getAmountOrder,
        countItemsCart,
        itemsCart,
        handleQuantityChange,
        resetCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
