/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { getCartFromLS } from '~/utils/utils'

const Cart = () => {
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
      <div className='md:hidden w-full flex flex-col gap-y-5'>
        {carts.map((item: any, index: number) => (
          <div className='border rounded-md' key={index}>
            <div className='flex justify-center py-2'>
              <div className=' hover:border-black cursor-pointer  rounded-full flex items-center justify-center w-[30px] h-[30px] border'>
                x
              </div>
            </div>
            <div className='flex justify-between border-t py-2 px-2'>
              <div>Sản phẩm</div>
              <div>{item.name}</div>
            </div>
            <div className='flex justify-between border-t py-2 px-2'>
              <div>Giá</div>
              <div>{item.price}</div>
            </div>
            <div className='flex justify-between border-t py-2 px-2'>
              <div>Số lượng</div>
              <input className='w-[50px] pl-4 py-2 border rounded-full' value={item.quantity} type='number' />
            </div>
            <div className='flex justify-between border-t py-2 px-2'>
              <div>Tạm tính</div>
              <div>{item.price * item.quantity}</div>
            </div>
            <div className='flex justify-center py-2 px-3'>
              <button
                disabled={true}
                className='bg-[#e9e6ed] disabled:cursor-not-allowed disabled:bg-slate-100 hover:bg-gray-300 w-full transition-all cursor-pointer  rounded-full flex items-center justify-center  h-[35px] border'
              >
                Cập nhật giỏ hàng
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className='hidden md:block'>
        <table className='table-auto w-full'>
          <thead>
            <tr>
              <th className='border-gray-300 border py-2.5 font-bold'></th>
              <th className='border-gray-300 border py-2.5 font-bold'></th>
              <th className='border-gray-300 border py-2.5 font-bold'>Sản phẩm</th>
              <th className='border-gray-300 border py-2.5 font-bold'>Giá </th>
              <th className='border-gray-300 border py-2.5 font-bold'>Số lượng</th>
              <th className='border-gray-300 border py-2.5 font-bold'>Tạm tính</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item: any, index: number) => (
              <tr key={index}>
                <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
                  <div className=' hover:border-black cursor-pointer  rounded-full flex items-center justify-center w-[30px] h-[30px] border'>
                    x
                  </div>
                </td>
                <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
                  <div className=' rounded-lg overflow-hidden w-[60px] h-[60px]'>
                    <img src='https://shop.glo365.vn/wp-content/uploads/2021/12/AcneControl-300x300.jpg' alt='' />
                  </div>
                </td>
                <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{item.name}</td>
                <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{item.price}đ</td>
                <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
                  {' '}
                  <input
                    className='w-[50px] bg-white pl-4 py-2 border rounded-full'
                    value={item.quantity}
                    type='number'
                  />
                </td>
                <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{item.price}đ</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className='w-full flex justify-end mt-2 border-gray-300 border'>

          <div className=' flex justify-center py-2 px-3'>
            <button
              disabled={false}
              className='bg-[#e9e6ed] px-4 disabled:cursor-not-allowed disabled:bg-slate-100 hover:bg-gray-300 w-full transition-all cursor-pointer  rounded-full flex items-center justify-center  h-[35px] border'
            >
              Cập nhật giỏ hàng
            </button>
          </div>
        </div>
      </div>
      <div className='md:w-[50%] md:ml-auto'>
        <h2 className='py-6 text-[29px] font-semibold'>Cộng giỏ hàng</h2>
        <div className='border rounded-md'>
          <div className='flex justify-between border-t py-2 px-2'>
            <div>Tạm tính</div>
            <div>{totalPrice}đ</div>
          </div>
          <div className='flex justify-between border-t py-2 px-2'>
            <div>Giao hàng</div>
            <div className='flex flex-col items-end text-sm'>
              <div>Giao hàng miễn phí</div>
              <div>
                Vận chuyển đến <strong>Huyện Cần Giờ, Hồ Chí Minh.</strong>
              </div>
              <button>Đổi địa chỉ</button>
            </div>
          </div>
          <div className='flex justify-between border-t py-2 px-2'>
            <div>Tổng</div>
            <div>{totalPrice}đ</div>
          </div>
        </div>
        <div className='flex mt-3 justify-center py-2 '>
          <button
            disabled={false}
            className='bg-[#e9e6ed] disabled:cursor-not-allowed disabled:bg-slate-100 hover:bg-gray-300 w-full transition-all cursor-pointer  rounded-full flex items-center justify-center  h-[35px] border'
          >
            Tiến hành thanh toán
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
