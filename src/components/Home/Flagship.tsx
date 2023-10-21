import BannerTrai from '~/assets/images/bannerclinic-1.jpg'
import { useNavigate } from 'react-router-dom'
const Flagship = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className='md:px-3 lg:px-0 lg:max-w-[1180px] lg:mx-auto'>
        <h4 className='uppercase text-[20px] py-4 text-center font-semibold'>GLO365 FLAGSHIP CLINIC</h4>
        <p className='text-center text-sm '>
          Nằm tại vị trí trung tâm TP.HCM, Glo365 là không chỉ là nơi để khách hàng có thể trực tiếp trải nghiệm các sản
          phẩm mà còn là trung tâm chăm sóc sắc đẹp toàn diện sở hữu các công nghệ không xâm lấn số 1 thế giới hiện nay.
          Đặt hẹn ngay hôm nay với đội ngũ bác sĩ da liễu của chúng tôi để hiểu thêm về làn da của bạn!
        </p>
        <div className='rounded-xl overflow-hidden mt-7'>
          <img className='w-full h-full object-cover' src={BannerTrai} alt='BannerTrai' />
        </div>
        <div className='mx-auto mt-5 border w-max rounded-full border-black'>
          <button 
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            onClick={(e)=>navigate('/cua-hang')}
            className='bg-white hover:bg-black hover:text-white transition-all uppercase px-5 py-2.5  border-[2px] border-black rounded-full'>
            Khám phá
          </button>
        </div>
      </div>
    </div>
  )
}

export default Flagship
