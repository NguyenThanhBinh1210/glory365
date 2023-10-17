import BlogHomeItem from '~/components/Blog/BlogHomeItem'
import BlogTagItem from '~/components/Blog/BlogTagItem'

const Blog = () => {
  return (
    <div className='pb-8 px-[10px] md:pb-16 border-b md:px-3 lg:px-0 md:max-w-[1180px] md:mx-auto'>
      <div className='mt-10'>
        <h1 className=' text-[29px] uppercase font-semibold mb-5 text-center'>Blog</h1>
        <div className='mb-3 h-[300px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5'>
          <BlogTagItem />
          <BlogTagItem />
        </div>
        <div className='mb-10 h-[200px] grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5'>
          <BlogTagItem />
          <BlogTagItem />
          <BlogTagItem />
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5'>
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
        </div>
      </div>
      <nav aria-label='Page navigation example' className='mx-auto mt-3 flex justify-center'>
        <ul className='flex items-center -space-x-px h-10 text-base'>
          <button
            // onClick={() => handlePageChange(currentPage - 1)}
            className='flex items-center gap-x-1 justify-center px-4 h-10 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700  '
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
              //     ? 'z-10 flex items-center justify-center px-4 h-10 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white'
              //     : 'flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
              // }
              className='flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 '
            >
              {index + 1}
            </button>
          ))}

          <button
            // onClick={() => handlePageChange(currentPage + 1)}
            className='flex items-center gap-x-1 justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700 '
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

export default Blog
