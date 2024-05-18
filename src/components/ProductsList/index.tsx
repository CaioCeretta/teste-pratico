import React from 'react'
import ProductCard from '../ProductCard';

interface Product {
  id: number;
  brand: string;
  name: string;
  photo: string;
  description: string;
  price: number;
}

interface ProductsListProps {
  products: Product[]
}



export default function ProductsList({ products }: ProductsListProps) {
  return (
    <div className="w-full max-w-[80rem] mx-auto my-20">
      <div className="flex flex-wrap -mx-4">
        {products.map((product) => (
          <div className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}