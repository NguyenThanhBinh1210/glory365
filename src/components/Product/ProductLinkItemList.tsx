import { useParams, Link } from 'react-router-dom'
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

const ProductLinkItemList: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [cart, setCart] = useState<Product[]>(getCartFromLS())
  const [showProductButton, setShowProductButton] = useState<{
    [key: string]: boolean
  }>({})
  const [currentPage, setCurrentPage] = useState(1)
  const totalPages = 6
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage)
    }
  }
  const { slugCategory } = useParams<{ slugCategory: string }>()
  const fetchProductsByPage = async (currentPage: number) => {
    try {
      const response = await fetch(
        `https://api-glory365.onrender.com/api/v1/category/get-all-category?limit=8&page=${currentPage}&slugCategory=${slugCategory}`
      )
      if (!response.ok) {
        throw new Error('Không thể tải dữ liệu sản phẩm')
      }
      const data = await response.json()
      setProducts(data[0].products)
    } catch (error) {
      console.error('Lỗi khi lấy sản phẩm từ API', error)
    }
  }

  useEffect(() => {
    fetchProductsByPage(currentPage)
  }, [slugCategory, currentPage])

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
    <div className='col-span-5  gap-y-4 gap-x-6 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
      <div className='col-span-5 gap-y-4 gap-x-6 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {products.map((product) => (
          <div key={product._id}>
            <Link to={`/cua-hang/${product.slug}`}>
              <div className='rounded-xl  overflow-hidden'>
                <img className='w-full h-full object-cover' src={product.image} alt='ImgBanner' />
              </div>
            </Link>
            <h3 className='uppercase text-sm font-semibold text-center pt-3'>{product.title}</h3>
            <p className='text-[14px] text-center mt-2'>{formatCurrency(product.price)}</p>
            <div className='flex justify-center'>
              <button
                onClick={() => handleAddToCart(product)}
                className='text-[#515151] leading-3 my-5 text-sm transition-all duration-200 bg-[#ebe9eb] hover-bg-[#dfdcde] rounded-full py-2 pb-3 px-3'
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
          </div>
        ))}
      </div>
      <nav
        aria-label='Page navigation example'
        className='col-span-5 px-auto w-max mx-auto text-center mt-3 flex justify-center'
      >
        <ul className='flex items-center -space-x-px h-6 md:h-10 text-base'>
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            className='flex items-center gap-x-1 justify-center px-2 md:px-4 h-6 md:h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  '
          >
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M5 1 1 5l4 4'
              />
            </svg>
            <span className='leading-4'>Previous</span>
          </button>
          {Array.from({ length: 3 }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className='flex items-center justify-center px-2 md:px-4 h-6 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            className='flex items-center gap-x-1 justify-center px-4 h-6 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 '
          >
            <span className='leading-4'>Next</span>
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 6 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m1 9 4-4-4-4'
              />
            </svg>
          </button>
        </ul>
      </nav>
    </div>
  )
}

export default ProductLinkItemList
