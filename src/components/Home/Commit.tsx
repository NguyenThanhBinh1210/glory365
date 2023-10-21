import Top from '~/assets/images/047-aloe-vera.png'
import Bot from '~/assets/images/044-fair-trade-300x300.png'
import { useNavigate } from 'react-router-dom'
const Commit = () => {
  const navigate = useNavigate()
  return (
    <div className='bg-[#F9F9F9] md:px-3 lg:px-0'>
      <div className='lg:max-w-[1180px] lg:mx-auto md:grid grid-cols-2 py-4 md:py-14 gap-x-8 flex flex-col gap-y-4'>
        <div className='flex flex-col gap-y-4 items-center'>
          <div className='w-[58px] h-[58px]'>
            <img src={Top} alt='Top' />
          </div>
          <h4 className='uppercase text-sm font-semibold'>SẢN PHẨM TIN DÙNG BỞI BÁC SĨ DA LIỄU</h4>
          <p className='text-center text-sm'>
            Bộ sưu tập các sản phẩm chăm sóc da được tin dùng bởi bác sĩ da liễu từ các thương hiệu hàng đầu thế giới
            với các thành phần tiên tiến, giúp nuôi dưỡng và phục hồi làn da từ sâu bên trong.
          </p>
          <div className='mx-auto border w-max rounded-full border-black'>
            <button
              // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onClick={()=>navigate('/cua-hang')}
              className='bg-white hover:bg-black hover:text-white transition-all uppercase px-5 py-2.5 w-max border-[2px] border-black rounded-full'
            >
              Khám phá
            </button>
          </div>
        </div>
        <div className='flex flex-col gap-y-4 items-center'>
          <div className='w-[58px] h-[58px]'>
            <img src={Bot} alt='Bot' />
          </div>
          <h4 className='uppercase text-sm font-semibold'>ĐỀ CAO SỰ AN TOÀN, THÂN THIỆN MÔI TRƯỜNG</h4>
          <p className='text-center text-sm'>
            An toàn, hiệu quả và thân thiện với môi trường được các bác sĩ da liễu của chúng tôi đặt lên hàng đầu nhằm
            mang lại lợi ích tối đa cho người dùng nói riêng và cộng đồng xã hội nói chung.
          </p>
          <div className='mx-auto border w-max rounded-full border-black'>
            <button 
             // eslint-disable-next-line @typescript-eslint/no-unused-vars
              onClick={()=>navigate('/cua-hang')}
              className='bg-white hover:bg-black hover:text-white transition-all uppercase px-5 py-2.5 w-max border-[2px] border-black rounded-full'>
              Khám phá
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commit
