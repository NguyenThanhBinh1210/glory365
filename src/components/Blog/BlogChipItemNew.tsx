import { Link } from 'react-router-dom'
import Img1 from '~/assets/images/Cover-30-Blog-1024x565.jpg'
import Img2 from '~/assets/images/Cover-20-Blog-1024x565.jpg'
import Img3 from '~/assets/images/Cover-Morpheus8-Blog-1-1024x565.jpg'

const NewBlog = [
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

const BlogChipItemNew = () => {
  return (
    <>
    {NewBlog.map((item) => (
      <Link key={item.slug} to={`/blog/${item.slug}`} className='flex gap-x-5'>
        <div className='rounded-xl w-[80px] md:w-[40%] h-[80px] overflow-hidden'>
          <img className='w-full h-full object-cover' src={item.image} alt='ImgBanner' />
        </div>
        <div className='flex flex-col w-[60%] justify-center pb-5 md:pb-2'>
          <h4 className='normal-case  font-semibold text-sm mb-1'>{item.name}</h4>
          <div className='text-xs text-[#54595F]'>All, Best of beauty, Skin, Tips</div>
        </div>
      </Link>
    ))}
    </>
  )
}

export default BlogChipItemNew
