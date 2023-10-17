import { Link } from 'react-router-dom'
import Img from '~/assets/images/Cover-50-Blog.jpg'

const BlogChipItem = () => {
  return (
    <Link to={'/blog/bi-quyet-so-huu-lan-da-dep-o-tuoi-50'} className='flex gap-x-5'>
      <div className='rounded-xl w-[80px] md:w-[40%] h-[80px] overflow-hidden '>
        <img className='w-full h-full object-cover' src={Img} alt='ImgBanner' />
      </div>
      <div className='flex flex-col w-[60%] justify-center pb-5 md:pb-2'>
        <h4 className='font-semibold text-sm mb-1'>Bí quyết sở hữu làn da đẹp ở tuổi 50</h4>
        <div className='text-xs text-[#54595F]'>All, Best of beauty, Skin, Tips</div>
      </div>
    </Link>
  )
}

export default BlogChipItem
