import BannerTrai from '~/assets/images/banner500x200trai.jpg'
import BannerPhai from '~/assets/images/banner500x200phai.jpg'

const Ads = () => {
  return (
    <div className='py-16'>
      <div className='lg:max-w-[1180px] lg:mx-auto  grid grid-cols-2 gap-y-3 gap-x-5'>
        <div className='rounded-lg overflow-hidden col-span-2 md:col-span-1'>
          <img className='w-full' src={BannerTrai} alt='BannerTrai' />
        </div>
        <div className='rounded-lg overflow-hidden col-span-2 md:col-span-1'>
          <img className='w-full' src={BannerPhai} alt='BannerPhai' />
        </div>
      </div>
    </div>
  )
}

export default Ads
