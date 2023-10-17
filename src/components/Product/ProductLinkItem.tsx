import { Link } from 'react-router-dom'
import Img from '~/assets/images/Rozatrol-300x300.jpg'

const ProductLinkItem = () => {
  return (
    <Link to={'/cua-hang/mirokal-ultra-whitening-mask-box'}>
      <div className='rounded-xl  overflow-hidden '>
        <img className='w-full h-full object-cover' src={Img} alt='ImgBanner' />
      </div>
      <h3 className='uppercase text-sm font-semibold text-center pt-3'>KEM CHỐNG LÃO HOÁ EXFOLIATION ACCELERATOR</h3>
      <p className='text-[14px] text-center mt-2'>3.899.000đ</p>
      <div className='flex justify-center'>
        <button className='text-[#515151] leading-3 my-5 text-sm transition-all duration-200 bg-[#ebe9eb] hover:bg-[#dfdcde] rounded-full py-2 pb-3 px-3'>
          Thêm vào giỏ hàng
        </button>
      </div>
    </Link>
  )
}

export default ProductLinkItem
