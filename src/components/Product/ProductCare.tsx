import { Link } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import { getCartFromLS, setCartFromLS } from '~/utils/utils'
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
const ProductCare: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>(getCartFromLS())
  const [showProductButton, setShowProductButton] = useState<{ [key: string]: boolean }>({})

  useEffect(() => {
    fetch('https://api-glory365.onrender.com/api/v1/product/get-all-product?page=1&limit=4')
      .then((response) => response.json())
      .then((data) => {
        setProducts(data.Products)
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm từ API', error)
      })
  }, [])

  const handleAddToCart = (product: Product) => {
    const productInCart = cart.find((item) => item._id === product._id)
    if (productInCart) {
      const updatedCart = cart.map((item) => {
        if (item._id === product._id) {
          return { ...item, quantity: item.quantity + 1 }
        }
        return item
      })
      setCart(updatedCart)
      setCartFromLS(updatedCart)
    } else {
      const updatedCart = [...cart, { ...product, quantity: 1 }]
      setCart(updatedCart)
      setCartFromLS(updatedCart)
    }
    setShowProductButton({ ...showProductButton, [product._id]: true })
  }
  return (
    <>
      {products.map((product) => (
        <Link to={`/cua-hang/${product.slug}`}>
          <div className='rounded-xl  overflow-hidden '>
            <img className='w-full h-full object-cover' src={product.image} alt='ImgBanner' />
          </div>
          <h3 className='uppercase text-sm font-semibold text-center pt-3'>{product.title}</h3>
          <p className='text-[14px] text-center mt-2'>{formatCurrency(product.price)}</p>
          <div className='flex justify-center'>
            <button
              onClick={() => handleAddToCart(product)}
              className='text-[#515151] leading-3 my-5 text-sm transition-all duration-200 bg-[#ebe9eb] hover:bg-[#dfdcde] rounded-full py-2 pb-3 px-3'
            >
              Thêm vào giỏ hàng
            </button>
          </div>
          {showProductButton[product._id] && (
            <div className='pb-3 flex justify-center'>
              <Link to='/gio-hang'>
                <a className='text-[#515151] leading-3 my-1 text-sm transition-all duration-100 bg-[#ebe9eb] hover-bg-[#dfdcde] rounded-full py-1 pb-2 px-3'>
                  Xem sản phẩm
                </a>
              </Link>
            </div>
          )}
        </Link>
      ))}
    </>
  )
}

export default ProductCare
