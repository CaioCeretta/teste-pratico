'use client'

import { CartItem, Product } from '@/types';
import { ReactNode, createContext, useState } from 'react';

interface CartState {
  cart: CartItem[]
}

interface CartContextProps extends CartState {
  cart: CartItem[]
  isCartOpen: boolean;
  increaseQuantity: (product: Product, quantity?: number) => void;
  decreaseQuantity: (Product: Product) => void;
  removeItem: (id: number) => void;
  clearCart: () => void;
  toggleCart: () => void;
}

const initialCartState: CartItem[] = [];


export const CartContext = createContext<CartContextProps>({
  cart: initialCartState,
  isCartOpen: false,
  increaseQuantity: () => { },
  decreaseQuantity: () => { },
  removeItem: () => { },
  clearCart: () => { },
  toggleCart: () => { }
})

interface CartProviderProps {
  children: ReactNode;
}

export const CartProvider = ({ children }: CartProviderProps) => {


  const [isCartOpen, setIsCartOpen] = useState(false)
  const [cart, setCart] = useState<CartItem[]>(initialCartState);

  const increaseQuantity = (product: Product, quantity: number = 1) => {
    setCart(prev => {
      const existingItemInCart = prev.find(item => item.id === product.id)

      if (existingItemInCart) {
        return prev.map(item => item.id === product.id
          ? { ...item, quantity: item.quantity + 1 }
          : item
        )
      }

      return [...prev, { ...product, quantity }]
    })
  }

  const toggleCart = () => {
    setIsCartOpen(prev => !prev)
    
  }

  const removeItem = (id: number) => {
    setCart((prev: CartItem[]) => {
      const foundProduct = prev.find(item => item.id === id);

      if(foundProduct) {
        return prev.filter(item => item.id !== foundProduct.id);
      }

      return prev
    })
  }

  const decreaseQuantity = (product: Product) => {
    setCart(prev => {
      return prev.map(item => item.id === product.id
        ? item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : null // O null é para remover este item da lista 
      : item
      ).filter(Boolean) as CartItem[] /* O filter boolean serve para remover os valores nulos, e o as CartItem é um cast
      onde onde o resultado deste SetAction será um CartItem[]*/
    })
  }

    const clearCart = () => {
      setCart([])
    }

    return (
      <CartContext.Provider value={{
        cart,
        isCartOpen,
        toggleCart,
        removeItem,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
        
      }}>
        {children}
      </CartContext.Provider>

    )
  }







