/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Collapse from '../Collapse'
import { getCartFromLS, setCartFromLS } from '~/utils/utils'
interface Product {
  _id: string
  title: string
  image: string
  price: number
  priceOld: number
  description: string
}
function formatCurrency(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}
const MainProduct: React.FC = () => {
  const [product, setProduct] = useState<Product | null>(null);
  const { slug } = useParams<{ slug: string }>()
  useEffect(() => {
    fetch(`https://api-glory365.onrender.com/api/v1/product/get-detail-product?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setProduct(data)
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm từ API', error)
      })
  }, [slug])
  // const [cartState, setCartState] = React.useState<Product[]>([]);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [cartState, _] = React.useState(getCartFromLS())
  const [quantity, setQuantity] = React.useState(1)
  const [showCart, setShowCart] = React.useState(false)
  const handleAddToCart = () => {
    if (product) {
      const productNew = { ...product, quantity: quantity }
      const updatedCart = [...cartState]
      updatedCart.push(productNew)
      setCartFromLS(updatedCart)
      setShowCart(true)
    }
  }

  return (
    <div className='px-3 lg:px-0 max-w-[1180px] mx-auto'>
      {showCart && (
        <div className='bg-[#f6f5f8] mt-3 pt-5 pb-5 flex justify-between px-4 gap-x-2'>
          <div className='flex items-center'>{product ? `${product.title} đã được thêm vào giỏ hàng.` : ''}</div>
          <Link to='/gio-hang'>
            <button className='bg-[#cacaca] w-[200px] h-[40px] rounded-md'>Xem giỏ hàng</button>
          </Link>
        </div>
      )}
      {product && (
        <div className='flex pt-7 flex-col md:grid md:grid-cols-2 md:gap-x-10'>
          <div className='rounded-xl h-[570px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={product.image} alt='ImgBanner' />
          </div>
          <div className='lg:px-3'>
            <h2 className='text-[19px] mt-10 mb-7 font-semibold uppercase md:mt-0'>{product.title}</h2>
            <div className='flex text-sm pb-4 gap-x-1 text-[21px]'>
              {product.priceOld ||
                (product.priceOld > 0 && (
                  <div className='relative'>
                    <span className='text-[#FFABAB] font-bold'>{formatCurrency(product.priceOld)}</span>
                    <div className='absolute w-full h-[2px] top-[50%] bg-[#FFABAB]'></div>
                  </div>
                ))}

              <div className='relative'>
                <span className='font-bold'>{formatCurrency(product.price)}</span>
                <div className='absolute w-full h-[2px] bottom-[-1px] bg-black'></div>
              </div>
            </div>
            <p className='text-sm'>{product.description}</p>
            <div className='flex gap-x-3 pt-2'>
              <input
                value={quantity}
                onChange={(e: any) => setQuantity(e.target.value)}
                className='w-[10%] border p-2 focus:border-black rounded-md'
                type='number'
              />
              <button onClick={handleAddToCart} className='bg-black w-full text-white hover:opacity-80 rounded-md'>
                Thêm vào giỏ hàng
              </button>
            </div>
            <div className='flex flex-col gap-y-3 mt-5'>
              <Collapse />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default MainProduct
