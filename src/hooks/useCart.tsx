import { CartContext } from "@/contexts/CartContext"
import { useContext } from "react"

export const useCart = () => {

  const context = useContext(CartContext);

  if(!context) {
    throw new Error('useCart deve ser utilizado dentro de um CartProvider')
  }

  return context;

}