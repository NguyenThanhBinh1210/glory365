import BlogHomeItem from '../Blog/BlogHomeItem'
import { useNavigate } from 'react-router-dom'
const BlogTip = () => {
  const navigate = useNavigate()
  return (
    <div className='pt-7'>
      <div className='md:px-3 lg:px-0 lg:max-w-[1180px] lg:mx-auto'>
        <h4 className='uppercase text-[20px] py-4 text-center font-semibold'> & TIPS</h4>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5'>
          <BlogHomeItem />
        </div>
        <div className='flex justify-center mt-5'>
          <div className='mt-2 hover:bg-white hover:text-black bg-black text-white rounded-full border-[1px] hover:border-black  transition'>
            <button 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onClick={() => navigate('/cua-hang')}
              className='  h-[38px] uppercase rounded-full px-5 text-[14px] w-[max] '>Xem thêm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BlogTip
