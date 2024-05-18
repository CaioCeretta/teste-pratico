import { priceFormatter } from '@/utils/formatPrice';
import Image from 'next/image';


interface Product {
  id: number;
  name: string;
  brand: string;
  description: string;
  price: number;
  photo: string;
}

interface ProductCardProps {
  product: Product;
}



export default function ProductCard({ product: { name, description, brand, price, photo } }: ProductCardProps) {
  return (
      <div className='border-2 rounded-md h-full border-gray-100
      w-full flex flex-col'>
        <div className='min-h-[40px] min-w-[40px] w-full flex items-center justify-center'>
          <Image className="min-h-[40px] min-w-[40px]" src={photo} width={200} height={200} alt={name} />
        </div>
        <div className='flex flex-col flex-grow justify-between p-2'>
          <div className='flex items-center justify-between mb-2'>
            <div className='text-lg font-medium'>
              {name}
            </div>
            <div className='bg-gray-900 text-white text-sm rounded-md p-1'>
              {priceFormatter.format(price)}
            </div>
          </div>
          <div className='text-sm text-gray-600'>{description}</div>
        </div>
      </div>


  )
}
