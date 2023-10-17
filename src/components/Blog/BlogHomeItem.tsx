import { Link } from 'react-router-dom'
import Anh from '~/assets/images/Cover-50-Blog-300x165.jpg'

const BlogHomeItem = () => {
  return (
    <Link to={'/'}>
      <div className='rounded-xl overflow-hidden'>
        <img className='w-full h-full object-cover' src={Anh} alt='anh' />
      </div>
      <h4 className='uppercase text-sm font-semibold text-center pt-3'>BÍ QUYẾT SỞ HỮU LÀN DA ĐẸP Ở TUỔI 50</h4>
    </Link>
  )
}

export default BlogHomeItem
