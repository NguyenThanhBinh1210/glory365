import ProductItem from '../Product/ProductItem'

const Featured = () => {
  return (
    <div className='py-5 lg:px-3 mt-2 md:py-[65px] px-2 bg-[#F9F9F9]'>
      <div className='lg:max-w-[1180px] lg:mx-auto'>
        <h2 className='text-[19px] font-semibold text-center uppercase mb-4'>Sản phẩm nổi bật</h2>
        <div className='grid grid-cols-2 gap-x-[30px] gap-y-[30px] lg:grid-cols-4'>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
          <ProductItem></ProductItem>
        </div>
        <div className='flex justify-center'>
          <div className='mt-2 hover:bg-white hover:text-black bg-black text-white rounded-full border-[1px] hover:border-black transition'>
            <button className='  h-[38px] uppercase rounded-full px-5 text-[14px] w-[max] '>Xem tất cả sản phẩm</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured
