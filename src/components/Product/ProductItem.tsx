/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
interface Product {
  [x: string]: any
  _id: string
  title: string
  image: string
  price: number
}
function formatCurrency(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}

const ProductItem: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    // Gửi yêu cầu API để lấy danh sách sản phẩm
    fetch('https://api-glory365.onrender.com/api/v1/product/get-all-product?page=1&limit=8')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Products)
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm từ API', error)
      })
  }, [])
  return (
    <>
      <div className='grid grid-cols-2 gap-x-[30px] gap-y-[30px] lg:grid-cols-4'>
        {products.map((product) => (
          <Link key={product._id} to={`/cua-hang/${product.slug}`}>
            <div key={product._id} className='rounded-lg overflow-hidden'>
              <img src={product.image} alt={product.title} />
              <div className='p-6 text-center'>
                <h4 className='text-sm font-semibold leading-5'>{product.title}</h4>
                <p className='text-[14px] mt-2'>{formatCurrency(product.price)}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className='flex justify-center'>
        <div className='mt-2 hover:bg-white hover:text-black bg-black text-white rounded-full border-[1px] hover:border-black transition'>
          <Link to={'/cua-hang'}>
            <button className='  h-[38px] uppercase rounded-full px-5 text-[14px] w-[max] '>Xem tất cả sản phẩm</button>
          </Link>
        </div>
      </div>
    </>
  )
}

export default ProductItem
