import React, { useEffect, useState } from 'react'
import ProductCard from '../ProductCard';
import { Product } from '@/types';




export default function ProductsList() {

  const [products, setProducts] = useState<Product[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [isErrored, setIsErrored] = useState(false)

  useEffect(() => {
    async function fetchProducts() {
      try {

        setIsLoading(true)

        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC')

        if (!response.ok) {
          throw new Error('A pesquisa retornou um erro')
        }
        const data = await response.json();


        const filteredProducts: Product[] = data.products.map((product: any) => ({
          id: product.id,
          name: product.name,
          brand: product.brand,
          description: product.description,
          price: product.price,
          photo: product.photo
        }));

        setProducts(filteredProducts)

        setIsLoading(false)

      } catch (error) {
          setIsErrored(true)
          setIsLoading(false)
          return;
          
      }
    }

    fetchProducts();
  }, [])

  if(isErrored) {
    return (
      <div>
        Ocorreu um erro ao montar a lista
      </div>
    )
  }

  if(isLoading) {
    return <div>Carregando...</div>
  }

  return (
    
    <div className="w-full max-w-[80rem] mx-auto my-20">
      <div className="flex flex-wrap -mx-4">
        
        {products.map((product) => (
          <div className="max-w-screen-xl sm:w-1/3 lg:w-1/4 px-4 mb-8" key={product.id}>
            <ProductCard isLoading={isLoading} product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}