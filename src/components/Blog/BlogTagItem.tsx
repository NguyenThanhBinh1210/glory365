import { Link } from 'react-router-dom'
import Img1 from '~/assets/images/Cover-30-Blog-1024x565.jpg'
import Img2 from '~/assets/images/Cover-20-Blog-1024x565.jpg'
import Img3 from '~/assets/images/Cover-Morpheus8-Blog-1-1024x565.jpg'

const BlogTag = [
  {
    slug: 'tong-hop-tips-cham-soc-da-tuoi-30-giup-chong-lai-lao-hoa',
    name: 'TỔNG HỢP TIPS CHĂM SÓC DA TUỔI 30 GIÚP CHỐNG LẠI LÃO HOÁ',
    image: Img1,
  },
  {
    slug: '9-tips-cham-soc-da-tuoi-20-luon-tuoi-tre-tu-bac-si-da-lieu',
    name: '9 TIPS CHĂM SÓC DA TUỔI 20 LUÔN TƯƠI TRẺ TỪ BÁC SĨ DA LIỄU',
    image: Img2,
  },
  {
    slug: 'morpheus8-giai-phap-tre-hoa-hang-dau-the-gioi',
    name: 'MORPHEUS8 – GIẢI PHÁP TRẺ HÓA HÀNG ĐẦU THẾ GIỚI',
    image: Img3,
  }
]

const BlogTagItem = () => {
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

export default BlogTagItem
