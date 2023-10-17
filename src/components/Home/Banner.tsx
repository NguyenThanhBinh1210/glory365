import Banner1 from '~/assets/images/banner1220x400.jpg'
import Banner2 from '~/assets/images/banner500x200.jpg'
import Banner3 from '~/assets/images/banner1024x145.jpg'
const Banner = () => {
  return (
    <div className='lg:px-3 lg:max-w-[1180px] lg:mx-auto'>
      <div className='overflow-hidden rounded-lg w-auto h-[200px] md:h-auto'>
        <img className='h-full mx-auto object-cover' src={Banner1} alt='Banner1' />
      </div>
      <div className='block md:hidden overflow-hidden rounded-lg mt-4 w-full sm:w-max mx-auto'>
        <img className=' h-full object-cover w-full' src={Banner2} alt='Banner1' />
      </div>
      <div className='hidden md:block sm:w-full overflow-hidden rounded-lg mt-4 w-full mx-auto'>
        <img className='w-full h-full object-cover' src={Banner3} alt='Banner3' />
      </div>
    </div>
  )
}

export default Banner
