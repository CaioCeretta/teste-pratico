'use client'

import ProductsList from "@/components/ProductsList";
import { useEffect, useState } from "react";

interface Product {
  id: number;
  name: string;
  photo: string;
  brand: string;
  description: string;
  price: number;
}

interface Products {
  products: Product[]
}

export default function Home() {
  const [products, setProducts] = useState<Product[]>([])
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=5&sortBy=id&orderBy=DESC')

      if(!response.ok) {
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
      
      } catch (error) {
        console.error('Falha ao buscar produtos: ', error)
      }
    }

    fetchProducts();
  }, [])


  return (
    <div>

      <ProductsList products={products} />
      

    </div>
      
    
  );
}
