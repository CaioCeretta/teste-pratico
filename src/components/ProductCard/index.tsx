import { useCart } from '@/hooks/useCart';
import { Product } from '@/types';
import { priceFormatter } from '@/utils/formatPrice';
import Image from 'next/image';
import { BiShoppingBag } from 'react-icons/bi';



interface ProductCardProps {
  product: Product;
  isLoading: boolean;
}



export default function ProductCard({
  product,
  isLoading
}: ProductCardProps) {

  const { increaseQuantity } = useCart()

  const { name, description, brand, price, photo } = product

  return (
    <div className='border-2 rounded-md h-full bg-white
      w-full flex flex-col'>
      <div className={` ${isLoading ? 'skeleton' : ''} min-h-[40px] min-w-[40px] w-full flex items-center justify-center mt-3`}>
        <Image className='bg-cover aspect-square' src={photo} width={200} height={200} alt={name} />
      </div>
      <div className='flex flex-col flex-grow justify-between p-2'>
        <div className='flex items-center justify-between mb-2'>
          <div className='text-md font-medium'>
            {name}
          </div>
          <div className={` ${isLoading ? 'skeleton' : ''} bg-gray-900 text-white text-sm rounded-md p-1`}>
            {priceFormatter.format(price)}
          </div>
        </div>
        <div className='text-sm text-gray-600'>{description}</div>
      </div>

      <div className={`
      ${isLoading ? 'skeleton' : ''}
      text-white rounded-b-md
       bg-blue-700 
       flex items-center
        justify-center 
        p-2 gap-3 
        font-bold
        hover:bg-blue-800
        transition-colors
        cursor-pointer
        `}
        onClick={() => increaseQuantity(product)}
        >
        <BiShoppingBag /> COMPRAR
      </div>

    </div>


  )
}
