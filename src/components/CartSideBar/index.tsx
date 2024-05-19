'use client'

import { useCart } from '@/hooks/useCart'
import { priceFormatter } from '@/utils/formatPrice'
import Image from 'next/image'
import React from 'react'
import { FaMinus, FaPlus, FaShoppingCart } from 'react-icons/fa'
import { FaX } from 'react-icons/fa6'
import { CartSideBarItem } from './CartItem'

export function CartSideBar() {
  const { cart, isCartOpen, toggleCart } = useCart()

  return (
    <div className="h-max absolute">
      {/* Side Cart Start */}
      <div
        className={`
          fixed
          top-0
          right-0
          h-[100vh]
          w-[22rem]
          bg-blue-700
          shadow-2xl
          transition-transform
          duration-300
          ease-in-out
          z-50
          px-2
          ${isCartOpen ? '' : 'transform translate-x-full'}
        `}
      >
        {/* Cart Content */}
        <div className="h-full flex flex-col">
          {/* Cart Header*/}
          <div className="
            p-2
            flex
            justify-between
            items-center
            text-white
            flex-shrink-0
          ">
            <div className='relative'>
              <h2 className='font-bold w-[13rem] text-2xl'>Carrinho de Compras</h2>
            </div>
            <span className='
              text-4xl
              font-bold
              rounded-full
              bg-black
              w-8
              h-8
              p-1
              cursor-pointer
              flex
              justify-center
              items-center
              '

              onClick={() => toggleCart()}
            >
              &times;
            </span>
          </div>
          {/* Cart Header End*/}

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto"> {/* Use flex-1 to make this div take remaining space */}
            {cart.map((item, index) => (
              <CartSideBarItem item={item} key={item.id} />
            ))}
          </div>
          {/* Cart Actions */}
          <div className="flex flex-col">
            <div className='
              mb-4
              flex
              items-center
              justify-between
              text-lg
              font-bold
              text-white
              px-2
            '>
              <p>Total: </p>
              <p>{priceFormatter.format(cart.reduce((total, item) => total + item.price * item.quantity, 0))}</p>
            </div>
            <button className='bg-black p-3 text-white font-bold'>Finalizar Compra</button>
          </div>
        </div>
      </div>
      {/* Side Cart End */}
    </div>
  )
}
