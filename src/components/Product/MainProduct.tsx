import Img from '~/assets/images/Rozatrol-300x300.jpg'
import Collapse from '../Collapse'

const MainProduct = () => {
  const dataCollapse = [
    {
      title: 'size',
      content: '27ml (1 hộp gồm 3 miếng)'
    },
    {
      title: 'CÁCH DÙNG',
      content:
        'Đắp mặt nạ sau khi rửa mặt thật sạch. Bước 1. Mặt nạ bao gồm 3 lớp. Mở mặt nạ ra. Loại bỏ lớp ngọc trai trắng ngoài cùng. Bước 2. Đắp lên mặt 2 lớp còn lại. Điều chỉnh mặt nạ cho phù hợp. Bước 3. Thảo bỏ lớp mặt nạ màu xanh ngoài cùng, thư giãn và để mặt nạ trong cùng trên mặt trong khoảng 10-15 phút, sau đó tháo bỏ. Bước 4. Dùng các ngón tay nhẹ nhàng mát-xa cho đến khi tinh chất được hấp thụ hoàn toàn. Không cần rửa mặt lại.'
    },
    {
      title: 'THÀNH PHẦN CHÍNH      ',
      content:
        'Purified Water, Butylene Glycol, Polyquaternium-39, Methylparaben, Propylparaben, Sea Silt Extract, Phenoxyethanol, Ethylhexylglycerin, Chondruscrispus (Carrageenan), Propylene Glycol, Citric Acid, Niacinamide, Peg-60 Hydrogenated Castor Oil, Glycerin, Panthenol, Glycosyl Trehalose, Hydrogenated Starch Hydrolysate, Jojoba Wax Peg-120 Esters, Tranexamic Acid, Chlorphenesin, Dipotassium Glycyrrhizate, Allantoin, Ascorbyl Glucoside, Saxifraga Sarmentosa Extract, Vitisvinifera (Grape) Fruit Extract, Butylene Glycol, Morus Alba Root Extract, Scutellaria Baicalensis Root Extract, Disodium EDTA, Arginine, Xanthan Gum, Sodium Hyaluronate, Sodium Polyacrylate, Aloe Barbadensis Leaf Extract, Hydrolyzed Sodium Hyaluronate'
    },
    {
      title: 'LƯU Ý      ',
      content:
        'Không sử dụng khi có tiền lệ kích ứng với thành phần của sản phẩm. Hiệu quả khác nhau phụ thuộc vào cơ địa của mỗi người. Nên bảo quản ở ngăn mát tủ lạnh, tránh trực tiếp ánh nắng mặt trời.'
    }
  ]
  return (
    <div className='px-3 lg:px-0 mt-10 max-w-[1180px] mx-auto flex flex-col md:grid md:grid-cols-2 md:gap-x-10'>
      <div className='rounded-xl h-[570px]  overflow-hidden '>
        <img className='w-full h-full object-cover' src={Img} alt='ImgBanner' />
      </div>
      <div className='lg:px-3'>
        <h2 className=' text-[19px] mt-10 mb-7 font-semibold uppercase md:mt-0'>MIROKAL ULTRA WHITENING MASK BOX</h2>
        <div className='flex text-sm pb-4 gap-x-1 text-[21px]'>
          <div className='relative'>
            <span className='text-[#FFABAB] font-bold'>2.599.000đ</span>
            <div className='absolute w-full h-[2px] top-[50%] bg-[#FFABAB]'></div>
          </div>
          <div className='relative'>
            <span className='font-bold'> 2.199.000đ</span>
            <div className='absolute w-full h-[2px] bottom-[-1px] bg-black'></div>
          </div>
        </div>
        <p className='text-sm'>
          Sự kết hợp của nhiều thành phần làm trắng hiệu quả, với chiết xuất khoáng sông băng Canada chất lượng cao,
          axit hyaluronic đa phân tử và chiết xuất thực vật tự nhiên tạo thành một công thức thân thiện với làn da. Mặt
          nạ dưỡng da Ultra Whitening Mask giúp: Cung cấp dưỡng chất làm đều màu da, làm sáng tông màu da, dưỡng ẩm và
          tạo thành một lớp bảo vệ trên da, giúp giảm các dấu hiệu khô và bong da, làm mờ nếp nhăn và làm mờ các vết đốm
          trên da, giảm thiểu tình trạng lỗ chân lông to, mang lại làn da mịn màng, sáng bóng và tươi tắn.
        </p>
        <p className='text-sm my-6 mb-10'>Quy cách đóng gói: Hộp 3 miếng.</p>
        <div className='flex gap-x-3 '>
          <input className='w-[10%] border p-2 focus:border-black rounded-md' type='text' />
          <button className='bg-black w-full text-white hover:opacity-80 rounded-md'>Thêm vào giỏ hàng</button>
        </div>
        <div className='flex flex-col gap-y-3 mt-5'>
          {dataCollapse.map((item, index) => (
            <Collapse key={index} data={item} index={index} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MainProduct
