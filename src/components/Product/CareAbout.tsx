import ProductCare from './ProductCare'

const CareAbout = () => {
  return (
    <div className='py-10 bg-[#FBFBFB] max-w-[1180px] mx-auto px-3 lg:px-0'>
      <h2 className='text-center mb-10 text-[19px] font-semibold uppercase'>Có thể bạn quan tâm</h2>
      {/* <div className='mx-auto border w-max rounded-full border-black'>
        <button className='bg-white hover:bg-black hover:text-white transition-all uppercase px-5 py-2.5 w-max border-[2px] border-black rounded-full'>
          Viết đánh giá
        </button>
      </div> */}
      <div className='grid grid-cols-2 md:grid-cols-3 gap-y-8 gap-x-4 lg:grid-cols-4'>
        <ProductCare></ProductCare>
      </div>
    </div>
  )
}

export default CareAbout
