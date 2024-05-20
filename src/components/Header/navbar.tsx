'use client'

import { useCart } from "@/hooks/useCart";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";
import {CartSideBar} from "../CartSideBar";

export function Navbar() {
  const { cart, isCartOpen, toggleCart } = useCart()

  return (
    <div className="w-full sticky h-20 top-0 bg-blue-700 px-10">
      <div className="w-100 h-full mx-auto flex items-center justify-between">
        <Link href={'/'}>
          <p className="flex items-baseline justify-center gap-1 text-white"><span className="text-2xl font-bold">MKS</span>Sistemas</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex justify-between items-center gap-8">
            <div
              className='flex align-center justify-between gap-3 w-15 bg-white text-black p-2 rounded-md'
              onClick={() => toggleCart()}
            >
              <FaShoppingCart />
              <span>{cart.length}</span>
            </div>
            {isCartOpen && <CartSideBar />}
          </ul>
        </div>
      </div>
    </div>
  )
}