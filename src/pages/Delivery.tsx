const Delivery = () => {
  return (
    <div className='p-5 md:px-0 md:max-w-[1180px] md:mx-auto pb-7 border-b'>
      <h1 className='text-center text-[29px] uppercase font-semibold mb-7'>GIAO HÀNG VÀ THANH TOÁN</h1>
      <div>
        <div>
          <h2 className='text-[29px] uppercase mb-4'>Thanh Toán</h2>
          <div className='text-[13.8px]'>
            <p className='leading-5'>
              Nhằm giúp cho quá trình thanh toán được linh động, Glo365 cung cấp đến bạn 2 hình thức thanh toán như sau:
            </p>
            <ul className='list-disc pl-8'>
              <li className='leading-5'>
                Thanh toán khi nhận hàng: thanh toán tiền mặt trực tiếp cho nhân viên giao hàng khi đã nhận được sản
                phẩm.
              </li>
              <li className='leading-5'>
                Thanh toán qua cổng thanh toán trực tuyến VNPAY: nhập đầy đủ và chính xác các thông tin và tiến hành
                thực hiện giao dịch. Ngân hàng của bạn có thể hỏi thêm các câu hỏi hoặc thông tin bảo mật để đảm bảo an
                toàn ở các bước tiếp theo, vui lòng cung cấp thông tin theo hướng dẫn để hoàn tất giao dịch.
              </li>
            </ul>
          </div>
        </div>
        <div className='mt-5'>
          <h2 className='text-[29px] uppercase mb-4'>THỜI GIAN GIAO HÀNG</h2>
          <div className='text-[13.8px]'>
            <p className='leading-5'>
              Ngay sau khi nhận được đơn đặt hàng, Glo365 sẽ liên hệ với bạn trong thời gian sớm nhất để xác nhận đơn
              hàng và tiến hành các thủ tục đóng gói, vận chuyển hàng.
            </p>
            <ul className='list-disc pl-8'>
              <li className='leading-5'>Thời gian giao hàng tại TP.HCM: từ 1 – 2 ngày kể từ ngày xác nhận đơn hàng.</li>
              <li className='leading-5'>
                Thời gian giao hàng tại các tỉnh thành khác: từ 3 – 5 ngày kể từ ngày xác nhận đơn hàng.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Delivery
