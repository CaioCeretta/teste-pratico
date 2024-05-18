import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export function Navbar() {
  return (
    <div
    className="w-full sticky h-20 top-0 bg-blue-800 text-white px-10">
      <div className="w-100 h-full mx-auto flex items-center justify-between">
        <Link href={'/'}>
          <p className="flex items-baseline justify-center gap-1"><span className="text-2xl font-bold">MKS</span>Sistemas</p>
        </Link>
        <div className="flex items-center gap-8">
          <ul className="flex justify-between items-center gap-8">
            
            <div className='flex align-center justify-between gap-3 w-15 bg-white text-black p-2 rounded-md'>
              <FaShoppingCart />
              <span>0</span>
            </div>


          </ul>

        </div>

      </div>


    </div>
  )
}
