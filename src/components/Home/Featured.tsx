import ProductItem from '../Product/ProductItem'

const Featured = () => {
  return (
    <div className='py-5 lg:px-3 mt-2 md:py-[65px] px-2 bg-[#F9F9F9]'>
      <div className='lg:max-w-[1180px] lg:mx-auto'>
        <h2 className='text-[19px] font-semibold text-center uppercase mb-4'>Sản phẩm nổi bật</h2>
        <ProductItem></ProductItem>
      </div>
    </div>
  )
}

export default Featured
