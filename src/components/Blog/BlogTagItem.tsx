import { Link } from 'react-router-dom'
import Img from '~/assets/images/Cover-50-Blog.jpg'
const BlogTagItem = () => {
  return (
    <Link to={'/blog/bi-quyet-so-huu-lan-da-dep-o-tuoi-50'} className='h-full relative group overflow-hidden'>
      <img
        className='group-hover:scale-110 duration-500  transition-all w-full h-full object-cover'
        src={Img}
        alt='Img'
      />
      <div className='absolute top-0 left-0 w-full h-full duration-500 bg-gradient-to-b from-transparent transition-all group-hover:to-[rgba(0,0,0,0.69)] to-[rgba(0,0,0,0.59)]'></div>
      <div className='absolute bottom-6 left-6'>
        <h3 className='text-white font-semibold text-[20px]'>Bí quyết sở hữu làn da đẹp ở tuổi 50</h3>
      </div>
      <div className='absolute top-3 left-3 flex gap-x-3 flex-wrap gap-y-2'>
        <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>All</div>
        <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>Best of beauty</div>
        <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>Skin</div>
        <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>Tips</div>
      </div>
    </Link>
  )
}

export default BlogTagItem
