import { useCart } from '@/hooks/useCart'
import { CartItem } from '@/types'
import { priceFormatter } from '@/utils/formatPrice'
import { FaMinus, FaPlus } from 'react-icons/fa'

interface CartSideBarItemsProps {
  item: CartItem
}

export function CartSideBarItem({item}: CartSideBarItemsProps) {
  
  const { increaseQuantity, decreaseQuantity } = useCart();
  
  return (
    <div
      key={item.id}
      className="relative bg-white p-5 w-full min-h-[150px]
      flex border-b-gray-200 border-b rounded-md">
      <div className="
                  absolute 
                  top-0
                  right-0
                  w-5
                  h-5
                  bg-black
                  text-white
                  rounded-full 
                  flex 
                  items-center 
                  justify-center 
                  cursor-pointer
                  "
      >
        &times;
      </div>
      {/* item img */}
      <div className="flex-1">
        <img
          src={item.photo}
          alt={item.name}
          width={100}
          height={100}
          className='w-full h-full object-contain'
        />
      </div>
      {/* Item details */}
      <div className="flex-1">
        <p className='text-[#555]'>{item.name}</p>
        <strong>{priceFormatter.format(item.price)}</strong>
        {/* Item qty */}
        <div className='flex self-start items-center gap-4'>
          <span className='qty-span' onClick={() => decreaseQuantity(item)}><FaMinus /></span>
          <strong>{item.quantity}</strong>
          <span className='qty-span' onClick={() => increaseQuantity(item)}><FaPlus /></span>
        </div>
      </div>
    </div>
  )
}
