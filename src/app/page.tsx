'use client'

import ProductsList from "@/components/ProductsList";
import { Product } from "@/types";


interface Products {
  products: Product[]
}

export default function Home() {



  return (
    <div>

      <ProductsList />
      

    </div>
      
    
  );
}
