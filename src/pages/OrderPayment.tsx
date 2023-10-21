/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCartFromLS } from '~/utils/utils'
import { formatCurrency } from './Cart'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
interface Payment {
  [x: string]: any
  _id: string
  bankName: string
  accountNumber: string
}
const OrderPayment: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const navigate = useNavigate()
  const [payment, setPayments] = useState<Payment[]>([])
  const carts = getCartFromLS()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    note: '',
    tinh: '',
    quan: '',
    xa: '',
    mota: '',
    isPayment: false,
    Sum: 0,
    soDon: 0,
    quantity: 0,
    code: '',
    products: [...carts]
  })
  const [randomCountdown, setRandomCountdown] = useState(180)
  const decrementRandomCountdown = () => {
    if (randomCountdown > 0) {
      setRandomCountdown(randomCountdown - 1);
    }
  }
  useEffect(() => {
    const interval = setInterval(decrementRandomCountdown, 1000);
    if (randomCountdown === 0) {
      navigate('/cua-hang')
      localStorage.setItem('cart', JSON.stringify([]))
    }
    return () => {
      clearInterval(interval);
    };
  }, [randomCountdown, navigate])
  function validateEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }
  const axiosInstance = axios.create({
    timeout: 4000
  })
  console.log(payment)
  useEffect(() => {
    fetch('https://api-glory365.onrender.com/api/v1/payment/get-payment')
      .then((response) => response.json())
      .then((data) => {
        setPayments(data.payments)
      })
      .catch((error) => {
        console.error('Lỗi khi lấy sản phẩm từ API', error)
      })
  }, [])
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    if (!validateEmail(formState.email)) {
      alert('Email không hợp lệ. Vui lòng nhập email hợp lệ.')
    } else {
      try {
        const jsonData = JSON.stringify(formState)
        const response = await axiosInstance.post('https://api-glory365.onrender.com/api/v1/order/create', jsonData, {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        if (response.status === 200) {
          alert('Đặt hàng thành công')
          localStorage.setItem('cart', JSON.stringify([]))
          if (formState.isPayment) {
            navigate('/order-payment')
          } else {
            navigate('/gio-hang')
            setFormState({
              name: '',
              email: '',
              phone: '',
              note: '',
              tinh: '',
              quan: '',
              xa: '',
              mota: '',
              isPayment: false,
              Sum: 0,
              soDon: 0,
              code: '',
              quantity: 0,
              products: []
            })
          }
        }
      } catch (error) {
        console.error('Lỗi từ phía server:', error)
        alert('Có lỗi xảy ra khi gửi thông tin')
      }
    }
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
  const uniqueCode = carts.length > 0 ? carts[0].code : ''
  const currentDate = new Date()
  const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()}`
  const firstItem = carts[0]
  return (
    <div className='p-3 pb-10 border-b'>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        autoComplete='false'
        action='#'
        className='max-w-[1180px] mx-auto md:grid md:grid-cols-1 gap-x-8'
      >
        <div>
          <h3 className='pt-6 text-center text-[25px] font-semibold'>THANH TOÁN</h3>
          <h3 className='pt-3 mt-3 mb-1 text-[16px]'>Cảm ơn bạn. Đơn hàng của bạn đã được nhận.</h3>
          <h3 style={{color: 'red'}} className='pt-1 mt-1 mb-1 color-red text-[16px]'>Vui lòng thanh toán sau {randomCountdown} giây </h3>
          <div className='md:translate-y-6 mt-1 pt-3 mb-8 w-[70%]'>
            <table className='text-[12px] table-auto text-left w-full md:mt-auto'>
              <thead>
                <tr>
                  <th className='p-2 uppercase border-dashed border-r-2 border-r-gray-950 py-2'>Mã đơn hàng</th>
                  <th className='p-2 uppercase border-dashed border-r-2 border-r-gray-950 py-2'>Ngày</th>
                  <th className='p-2 uppercase border-dashed border-r-2 border-r-gray-950 py-2'>Tổng cộng</th>
                  <th className='p-2 uppercase py-2'>Phương thức chuyển khoản</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='border-dashed border-r-2 border-r-gray-950 font-bold text-left p-3 bg-slate-100'>
                    {firstItem.code}
                  </td>
                  <td className='border-dashed border-r-2 border-r-gray-950 font-bold text-left p-3 bg-slate-100'>
                    {formattedDate}
                  </td>
                  <td className='border-dashed border-r-2 border-r-gray-950 font-bold text-left p-3 bg-slate-100'>
                    {formatCurrency(totalPrice)}
                  </td>
                  <td className='font-bold text-left p-3 bg-slate-100'>Chuyển khoản ngân hàng</td>
                </tr>
              </tbody>
            </table>  
        </div>
        </div>
        <div>
          <h3 className='pt-1 mt-2 text-[24px] font-semibold'>Thông tin chuyển khoản ngân hàng</h3>
          <h2 className='pt-1 mt-2 text-[29px] font-bold'>Hộ kinh doanh Glo365:</h2>
          <div className='md:translate-y-6 pt-5 mb-8 w-[60%]'>
            <table className='text-[12px] table-auto text-left w-full md:mt-auto'>
              <thead>
                <tr>
                  <th className='p-3 uppercase border-dashed border-r-2 border-r-gray-950 py-2'>Ngân hàng</th>
                  <th className='p-3 uppercase border-dashed border-r-2 border-r-gray-950 py-2'>Số tài khoản</th>
                  <th className='p-3 uppercase border-dashed border-r-2 border-r-gray-950 py-2'>Số tiền</th>
                  <th className='p-3 uppercase border-dashed py-2'>Nội dung chuyển khoản</th>
                </tr>
              </thead>
              <tbody>
                {payment.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className='font-bold text-left p-3 bg-slate-100 border-dashed border-r-2 border-r-gray-950'>
                      {item.bankName}
                    </td>
                    <td className='font-bold text-left p-3 bg-slate-100 border-dashed border-r-2 border-r-gray-950'>
                      {item.accountNumber}
                    </td>
                    <td className='font-bold text-left p-3 bg-slate-100 border-dashed border-r-2 border-r-gray-950'>
                      {formatCurrency(totalPrice)}
                    </td>
                    <td className='font-bold text-left p-3 bg-slate-100'>{uniqueCode}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          <div className='table-auto w-full mt-10 md:mt-auto'></div>
        </div>
        </div>
        <div>
          <h3 className='pt-3 mt-3 text-[24px] font-semibold'>Chi tiết đơn hàng</h3>
          <div className='md:translate-y-6 pt-5 mb-20'>
            <table className='table-auto text-left w-full md:mt-auto'>
              <thead>
                <tr>
                  <th className='p-3 border-gray-300 border py-2.5 font-bold'>Sản phẩm</th>
                  <th className='p-3 border-gray-300 border py-2.5 font-bold'>Tạm tính</th>
                </tr>
              </thead>
              <tbody>
                {carts.map((item: any, index: number) => (
                  <tr key={index}>
                    <td className='text-left p-3 bg-slate-100 border-gray-300 border'>
                      {item.title} x {item.quantity}
                    </td>
                    <td className='text-left p-3 bg-slate-100 border-gray-300 border'>
                      {formatCurrency(item.price * item.quantity)}
                    </td>
                  </tr>
                ))}
              </tbody>
              <thead>
                <tr>
                  <th className='p-3 border-gray-300 border py-2.5 font-bold'>Tạm tính</th>
                  <th className='p-3 border-gray-300 border py-2.5 font-semiboid'>{formatCurrency(totalPrice)}</th>
                </tr>
                <tr>
                  <th className='p-3 border-gray-300 border py-2.5 font-bold'>Giao hàng</th>
                  <th className='p-3 border-gray-300 border py-2.5 font-semibold'>Giao hàng miễn phí</th>
                </tr>
                <tr>
                  <th className='p-3 border-gray-300 border py-2.5 font-bold'>Tổng</th>
                  <th className='p-3 border-gray-300 border py-2.5 font-bold'>{formatCurrency(totalPrice)}</th>
                </tr>
              </thead>
            </table>
          <div className='table-auto w-full mt-10 md:mt-auto'></div>
        </div>
        </div>
      </form>
    </div>
  )
}

export default OrderPayment
