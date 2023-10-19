/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCartFromLS } from '~/utils/utils'
import { formatCurrency } from './Cart'

const Payment = () => {
  const carts = getCartFromLS()
  function calculateTotalPrice(data: any) {
    let total = 0
    for (const product of data) {
      const price = parseFloat(product.price)
      const quantity = parseFloat(product.quantity)
      total += price * quantity
    }
    return total
  }
  const totalPrice = calculateTotalPrice(carts)
  return (
    <div className='p-3 pb-10 border-b'>
      <form className='max-w-[1180px] mx-auto md:grid md:grid-cols-2 gap-x-8'>
        <div>
          <h3 className='py-6 text-[29px] font-semibold'>Thông tin thanh toán</h3>
          <div>
            <div className='mt-3'>
              <label htmlFor='name' className='block mb-1 text-sm text-gray-900'>
                Họ và tên
              </label>
              <input
                required
                type='text'
                name='name'
                id='name'
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                placeholder=''
              />
            </div>
            <div className='mt-3'>
              <label htmlFor='phone' className='block mb-1 text-sm text-gray-900'>
                Số điện thoại
              </label>
              <input
                required
                type='text'
                name='phone'
                id='phone'
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                placeholder=''
              />
            </div>
            <div className='mt-3'>
              <label htmlFor='email' className='block mb-1 text-sm text-gray-900'>
                Email
              </label>
              <input
                required
                type='text'
                name='email'
                id='email'
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                placeholder=''
              />
            </div>
            <div className='mt-3'>
              <label htmlFor='address' className='block mb-1 text-sm text-gray-900'>
                Địa chỉ
              </label>
              <input
                required
                type='text'
                name='address'
                id='address'
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                placeholder=''
              />
            </div>
          </div>
        </div>
        <div className='md:translate-y-16'>
          <table className='table-auto w-full mt-10 md:mt-auto'>
            <thead>
              <tr>
                <th className='border-gray-300 border py-2.5 font-bold'>Sản phẩm</th>
                <th className='border-gray-300 border py-2.5 font-bold'>Tạm tính</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item: any, index: number) => (
                <tr key={index}>
                  <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{item.title} x {item.quantity}</td>
                  <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{formatCurrency(item.price * item.quantity)}</td>
                </tr>
              ))}
            </tbody>
            <thead>
              <tr>
                <th className='border-gray-300 border py-2.5 font-bold'>Tạm tính</th>
                <th className='border-gray-300 border py-2.5 font-semiboid'>{formatCurrency(totalPrice)}</th>
              </tr>
              <tr>
                <th className='border-gray-300 border py-2.5 font-bold'>Giao hàng</th>
                <th className='border-gray-300 border py-2.5 font-semibold'>Giao hàng miễn phí</th>
              </tr>
              <tr>
                <th className='border-gray-300 border py-2.5 font-bold'>Tổng</th>
                <th className='border-gray-300 border py-2.5 font-bold'>{formatCurrency(totalPrice)}</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className='flex justify-center mt-5'>
          <div className='mt-2 w-full hover:bg-white hover:text-black bg-black text-white rounded-full border-[1px] hover:border-black  transition'>
            <button className='  h-[38px] uppercase rounded-full px-5 text-[14px] w-full '>Đặt hàng</button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Payment
