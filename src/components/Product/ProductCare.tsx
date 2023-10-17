import Img from '~/assets/images/Rozatrol-300x300.jpg'

const ProductCare = () => {
  return (
    <div className=' flex flex-col items-center'>
      <div className='rounded-xl  overflow-hidden '>
        <img className='w-full h-full object-cover' src={Img} alt='ImgBanner' />
      </div>
      <h4 className='text-sm font-semibold leading-5 mt-4'>ROKAL TIMELESS REPAIR CREA </h4>
      <div className='flex text-sm py-3 pb-4 gap-x-1'>
        <div className='relative'>

          <span className='text-[#DB1111]'>2.599.000đ</span>
          <div className='absolute w-full h-[1px] top-[50%] bg-[#DB1111]'></div>
        </div>
        <div className='relative'>
          <span className='font-bold'>  2.199.000đ</span>
          <div className='absolute w-full h-[0.5px] bottom-[2px] bg-black'></div>

        </div>
      </div>
      <div className='mx-auto border w-max rounded-full border-black'>
        <button className='bg-white hover:bg-black hover:text-white transition-all text-sm pb-2 px-3 py-1 w-max border-[2px] border-black rounded-full'>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  )
}

export default ProductCare
