/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-explicit-any */

import { getCartFromLS, setCartFromLS } from '~/utils/utils'
import { useState } from 'react'
import { Link } from 'react-router-dom'
export function formatCurrency(price: number): string {
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND'
  }).format(price)
}
const Cart = () => {
  const carts = getCartFromLS()
  const [cartState, setCartState] = useState(carts)
  function removeItem(index: number) {
    const updatedCarts = [...cartState]
    updatedCarts.splice(index, 1)
    setCartState(updatedCarts)
    setCartFromLS(updatedCarts)
  }
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
    <div className='p-3 pb-10 border-b max-w-[1180px] mx-auto'>
      <div className='md:hidden w-full flex flex-col gap-y-5'>
        {carts.map((item: any, index: number) => (
          <div className='border rounded-md' key={index}>
            <div className='flex justify-center py-2'>
              <div
                onClick={() => removeItem(index)}
                className=' hover:border-black cursor-pointer  rounded-full flex items-center justify-center w-[30px] h-[30px] border'
              >
                x
              </div>
            </div>
            <div className='flex justify-between border-t py-2 px-2'>
              <div>Hình ảnh</div>
              <div className=' rounded-lg overflow-hidden w-[60px] h-[60px]'>
                <img src={item.image} alt='' />
              </div>
            </div>
            <div className='flex justify-between border-t py-2 px-2'>
              <div>Sản phẩm</div>
              <div>{item.title}</div>
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
              <th className='border-gray-300 border py-2.5 font-bold'>Hình ảnh</th>
              <th className='border-gray-300 border py-2.5 font-bold'>Sản phẩm</th>
              <th className='border-gray-300 border py-2.5 font-bold'>Giá </th>
              <th className='border-gray-300 border py-2.5 font-bold'>Số lượng</th>
              <th className='border-gray-300 border py-2.5 font-bold'>Tạm tính</th>
            </tr>
          </thead>
          <tbody>
            {carts.map((item: any, index: number) => (
              <Row data={item} index={index} removeItem={() => removeItem(index)}></Row>
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
            <div>{formatCurrency(totalPrice)}</div>
          </div>
          <div className='flex justify-between border-t py-2 px-2'>
            <div>Giao hàng</div>
            <div className='flex flex-col items-end text-sm'>
              <div>Giao hàng miễn phí</div>
            </div>
          </div>
          <div className='flex justify-between border-t py-2 px-2'>
            <div>Tổng</div>
            <div>{formatCurrency(totalPrice)}</div>
          </div>
        </div>
        <div className='flex mt-3 justify-center py-2 '>
          <button
            disabled={false}
            className='bg-[#e9e6ed] disabled:cursor-not-allowed disabled:bg-slate-100 hover:bg-gray-300 w-full transition-all cursor-pointer  rounded-full flex items-center justify-center  h-[35px] border'
          >
            <Link to='/thanh-toan'>Tiến hành thanh toán</Link>
          </button>
        </div>
      </div>
    </div>
  )
}
export const Row = ({ data, removeItem }: any) => {
  // const carts = getCartFromLS()
  const [state, _] = useState(data)
  const [quantity, setQuantity] = useState(state.quantity)

  return (
    <tr>
      <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
        <div
          onClick={removeItem}
          className=' hover:border-black cursor-pointer  rounded-full flex items-center justify-center w-[30px] h-[30px] border'
        >
          x
        </div>
      </td>
      <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
        <div className=' rounded-lg overflow-hidden w-[60px] h-[60px]'>
          <img src={data.image} alt='' />
        </div>
      </td>
      <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{data.title}</td>
      <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{formatCurrency(data.price)}</td>
      <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
        {' '}
        <input
          className='w-[50px] bg-white pl-4 py-2 border rounded-full'
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          type='number'
        />
      </td>
      <td className='text-center p-5 bg-slate-100 border-gray-300 border'>{formatCurrency(data.price)}</td>
    </tr>
  )
}
export default Cart
