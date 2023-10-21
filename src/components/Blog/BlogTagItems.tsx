import { Link } from 'react-router-dom'
import Img1 from '~/assets/images/Cover-50-Blog-300x165.jpg'
import Img2 from '~/assets/images/Cover-40-Blog-1-1024x565.jpg'

const BlogTag = [
  {
    slug: 'bi-quyet-so-huu-lan-da-dep-o-tuoi-50',
    name: 'BÍ QUYẾT SỞ HỮU LÀN DA ĐẸP Ở TUỔI 50',
    image: Img1,
  },
  {
    slug: 'chong-lao-hoa-da-tuoi-40-tuong-kho-ma-de',
    name: 'CHỐNG LÃO HÓA DA TUỔI 40 – TƯỞNG KHÓ MÀ DỄ',
    image: Img2,
  }
]

const BlogTagItems = () => {
  return (
    <>
    {BlogTag.map((item) => (
      <Link key={item.slug} to={`/blog/${item.slug}`} className='h-full relative group overflow-hidden'>
        <img
          className='group-hover:scale-110 duration-500  transition-all w-full h-full object-cover'
          src={item.image}
          alt='Img'
        />
        <div className='absolute top-0 left-0 w-full h-full duration-500 bg-gradient-to-b from-transparent transition-all group-hover:to-[rgba(0,0,0,0.69)] to-[rgba(0,0,0,0.59)]'></div>
        <div className='absolute bottom-6 left-6'>
          <h3 className='text-white font-semibold text-[20px]'>{item.name}</h3>
        </div>
        <div className='absolute top-3 left-3 flex gap-x-3 flex-wrap gap-y-2'>
          <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>All</div>
          <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>Best of beauty</div>
          <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>Skin</div>
          <div className='uppercase bg-black text-white px-2 py-1 text-xs font-semibold'>Tips</div>
        </div>
      </Link>
    ))}
    </>
  )
}

export default BlogTagItems
