import { Link } from 'react-router-dom'
import React, { useEffect, useState } from "react"
import ProductLinkItemList from '~/components/Product/ProductLinkItemList'
interface Category {
  [x: string]: any
  _id: string
  nameCategory: string
}
const ListStore = () => {
  const [category, setCategores] = useState<Category[]>([]);
  useEffect(() => {
    fetch(
      "https://api-glory365.onrender.com/api/v1/category/get-category"
    )
      .then((response) => response.json())
      .then((data) => {
        setCategores(data);
      })
      .catch((error) => {
        console.error("Lỗi khi lấy sản phẩm từ API", error);
      });
  }, []);
  return (
    <div className='pb-10 border-b'>

      <div className='px-5 pt-10 md:px-3 lg:px-3 grid grid-cols-5 gap-x-8 md:max-w-[1180px] mx-auto'>
        <div className='col-span-5 lg:col-span-1'>
          <div className='mb-6'>
            <h3 className='uppercase text-[14.6px] font-semibold mb-5'>DANH MỤC SẢN PHẨM</h3>
            <ul className='flex flex-col gap-y-3 text-[13.6px] text-[rgba(0,0,0,0.79)]'>
              {category.map((itemLi, indexLi) => (
                <li key={indexLi}>
                  <Link to={`/danh-muc/${itemLi.slugCategory}`}>{itemLi.nameCategory}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className='col-span-5 gap-y-4 gap-x-6 lg:col-span-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          <ProductLinkItemList />
        </div>
      </div>
      <nav aria-label='Page navigation example' className=' w-max mx-auto mt-3 flex justify-center'>
        <ul className='flex items-center -space-x-px h-6 md:h-10 text-base'>
          <button
            // onClick={() => handlePageChange(currentPage - 1)}
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
          {Array.from({ length: 5 }, (_, index) => (
            <button
              key={index}
              // onClick={() => handlePageChange(index + 1)}
              // className={
              //   currentPage === index + 1
              //     ? 'z-10 flex items-center justify-center px-4 h-6 md:h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              //     : 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              // }
              className='flex items-center justify-center px-2 md:px-4 h-6 md:h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
            >
              {index + 1}
            </button>
          ))}

          <button
            // onClick={() => handlePageChange(currentPage + 1)}
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

export default ListStore
