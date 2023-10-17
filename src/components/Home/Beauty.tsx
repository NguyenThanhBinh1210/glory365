import BannerTrai from '~/assets/images/banner500x500trai.jpg'

const Beauty = () => {
  return (
    <div className='py-16'>
      <div className='lg:max-w-[1180px] lg:mx-auto grid grid-cols-3 gap-x-5'>
        <div className=' col-span-3 md:col-span-1 '>
          <div className='rounded-lg w-[80%] mx-auto md:h-[380px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={BannerTrai} alt='BannerTrai' />
          </div>
          <h4 className='uppercase text-[20px] py-4 text-center font-semibold'>Serum cao cấp</h4>
        </div>
        <div className=' col-span-3 md:col-span-1 '>
          <div className='rounded-lg w-[80%] mx-auto  md:h-[380px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={BannerTrai} alt='BannerTrai' />
          </div>
          <h4 className='uppercase text-[20px] py-4 text-center font-semibold'>THỰC PHẨM BỔ SUNG</h4>
        </div>
        <div className=' col-span-3 md:col-span-1 '>
          <div className='rounded-lg w-[80%] mx-auto  md:h-[380px] overflow-hidden'>
            <img className='w-full h-full object-cover' src={BannerTrai} alt='BannerTrai' />
          </div>
          <h4 className='uppercase text-[20px] py-4 text-center font-semibold'>MẶT NẠ DƯỠNG ẨM</h4>
        </div>
      </div>
    </div>
  )
}

export default Beauty
