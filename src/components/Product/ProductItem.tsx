import { Link } from 'react-router-dom'

const ProductItem = () => {
  return (
    <Link to={'/'}>
      <div className='rounded-lg overflow-hidden'>
        <img src='https://shop.glo365.vn/wp-content/uploads/2021/12/HydraFirmEyeCream.jpg' alt='ing' />
      </div>
      <div className='p-6 text-center'>
        <h4 className='text-sm font-semibold leading-5'>KEM DƯỠNG MẮT HYDRAFIRM EYE BRIGHTENING REPAIR </h4>
        <p className='text-[14px] mt-2'>3.899.000đ</p>
      </div>
    </Link>
  )
}

export default ProductItem
