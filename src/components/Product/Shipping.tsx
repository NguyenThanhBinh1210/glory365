import ImgBanner from '~/assets/images/free-shipping-300x300.png'

const Shipping = () => {
  return (
    <div>
      <div className='px-3 lg:px-0 md:gap-x-6 max-w-[1180px] bg-[#FBFBFB] pt-10 mb-12 mx-auto grid grid-cols-1 gap-y-5 md:grid-cols-3'>
        <div className='flex flex-col items-center'>
          <h3 className='font-semibold uppercase mb-3'>THÂN THIỆN VỚI MÔI TRƯỜNG</h3>
          <p className='text-sm'>Glo365 đề cao tinh thần trách nhiệm trong việc bảo vệ môi trường. Chính vì thế, chúng tôi sẽ giảm thiểu lượng bao bì đóng gói cho các sản phẩm của mình, sử dụng các loại giấy bìa cứng có thể tái chế để thay thế dần cho túi ni lông.</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='font-semibold uppercase mb-3'>VẬN CHUYỂN TOÀN QUỐC</h3>
          <p className='text-sm'>Chúng tôi cung cấp dịch vụ giao hàng miễn phí trên toàn quốc đối với tất cả các đơn đặt hàng đã thanh toán trực tuyến. Chúng tôi sẽ liên hệ để xác nhận đơn đặt hàng trước khi tiến hành giao hàng cho đơn vị vận chuyển.</p>
        </div>
        <div className='flex flex-col items-center'>
          <h3 className='font-semibold uppercase mb-3'>DỊCH VỤ 24/7
          </h3>
          <p className='text-sm'>Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn trong tất cả các bước: đặt mua sản phẩm, tư vấn, theo dõi đơn hàng, tư vấn thành phần, cách chăm sóc da, và bất cứ điều gì bạn cần biết về các sản phẩm và dịch vụ của Glo365.</p>
        </div>
      </div>
      <div className=' px-3 md:flex-row md:gap-x-8 bg-[#F3F3F3] py-4 flex flex-col gap-y-4 justify-center items-center'>
        <div className='flex flex-col items-center gap-y-4'>
          <div className='w-[45px] h-[45px]'>
            <img src={ImgBanner} alt='' />
          </div>
          <p className='font-semibold text-center leading-5'>Giao hàng miễn phí</p>
        </div>
        <div className='flex flex-col items-center gap-y-4'>
          <div className='w-[45px] h-[45px]'>
            <img src={ImgBanner} alt='' />
          </div>
          <p className='font-semibold text-center leading-5'>Hỗ trợ nhanh & chuyên nghiệp</p>
        </div>
        <div className='flex flex-col items-center gap-y-4'>
          <div className='w-[45px] h-[45px]'>
            <img src={ImgBanner} alt='' />
          </div>
          <p className='font-semibold text-center leading-5'>Thanh toán đa dạng & an toàn</p>
        </div>
        <div className='flex flex-col items-center gap-y-4'>
          <div className='w-[45px] h-[45px]'>
            <img src={ImgBanner} alt='' />
          </div>
          <p className='font-semibold text-center leading-5'>Đóng gói chất lượng</p>
        </div>
      </div>
    </div>
  )
}

export default Shipping
