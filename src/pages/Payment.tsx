/* eslint-disable @typescript-eslint/no-explicit-any */
import { getCartFromLS } from '~/utils/utils'
import { formatCurrency } from './Cart'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import React, { useState, useEffect, ChangeEvent } from 'react'
import axios from 'axios'

const host = 'https://provinces.open-api.vn/api/?depth=3'

const Payment: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null)
  const navigate = useNavigate()
  const carts = getCartFromLS()
  const [cityList, setCityList] = useState<any[]>([])
  const [districtList, setDistrictList] = useState<any[]>([])
  const [wardList, setWardList] = useState<any[]>([])
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
    products: [...carts]
  })

  function validateEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  useEffect(() => {
    axios
      .get(host)
      .then((response) => {
        setCityList(response.data)
      })
      .catch((error) => {
        console.error('Lỗi khi tải danh sách tỉnh/thành phố: ', error)
      })
  }, [])

  useEffect(() => {
    if (formState.tinh) {
      const selectedCity = cityList.find((c: any) => c.name === formState.tinh)
      if (selectedCity) {
        const districts = selectedCity.districts
        setDistrictList(districts)
      }
    } else {
      setDistrictList([])
    }
  }, [formState.tinh, cityList])

  useEffect(() => {
    if (formState.quan) {
      const selectedDistrict = districtList.find((d: any) => d.name === formState.quan)
      if (selectedDistrict) {
        const wards = selectedDistrict.wards
        setWardList(wards)
      }
    } else {
      setWardList([])
    }
  }, [formState.quan, districtList])

  const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }
  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.currentTarget
    setFormState((prev) => ({ ...prev, [name]: value }))
  }
  const axiosInstance = axios.create({
    timeout: 4000
  })
  const handlePaymentMethodChange = (event: ChangeEvent<HTMLSelectElement>) => {
    const isPayment = event.target.value === '1'
    setFormState((prev) => ({ ...prev, isPayment }))
  }
  const handleSubmit = async (e: any) => {
    e.preventDefault()
    // console.log(formState);
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
          navigate('/')
          localStorage.removeItem('cart')
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
            products: []
          })
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
  const cityOptions = cityList.map((item: any) => (
    <option key={item.code} value={item.name}>
      {item.name}
    </option>
  ))

  const districtOptions = districtList.map((item: any) => (
    <option key={item.code} value={item.name}>
      {item.name}
    </option>
  ))

  const wardOptions = wardList.map((item: any) => (
    <option key={item.code} value={item.name}>
      {item.name}
    </option>
  ))
  return (
    <div className='p-3 pb-10 border-b'>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        autoComplete='false'
        action='#'
        className='max-w-[1180px] mx-auto md:grid md:grid-cols-2 gap-x-8'
      >
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
                onChange={handleInput}
                value={formState?.name}
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                placeholder='Họ tên của bạn'
              />
            </div>
            <div className='grid grid-cols-2 mt-3'>
              <div style={{ marginRight: '1em' }} className='grid grid-cols-1 mt-3'>
                <label htmlFor='phone' className='block mb-1 text-sm text-gray-900'>
                  Số điện thoại
                </label>
                <input
                  required
                  type='text'
                  name='phone'
                  id='phone'
                  onChange={handleInput}
                  value={formState?.phone}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                  placeholder='Số điện thoại của bạn'
                />
              </div>
              <div className='mt-3grid grid-cols-1 mt-3'>
                <label htmlFor='email' className='block mb-1 text-sm text-gray-900'>
                  Email
                </label>
                <input
                  required
                  type='text'
                  name='email'
                  id='email'
                  onChange={handleInput}
                  value={formState?.email}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                  placeholder='Email của bạn'
                />
              </div>
            </div>
            <div className=' grid grid-cols-2 mt-3'>
              <div style={{ marginRight: '1em' }} className='grid grid-cols-1 mt-3'>
                <label htmlFor='phone' className='block mb-1 text-sm text-gray-900'>
                  Tỉnh/Thành phố
                </label>
                <select
                  name='tinh'
                  value={formState?.tinh}
                  onChange={handleChange}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                >
                  <option value=''>Chọn tỉnh/thành phố</option>
                  {cityOptions}
                </select>
              </div>
              <div className='mt-3grid grid-cols-1 mt-3'>
                <label htmlFor='email' className='block mb-1 text-sm text-gray-900'>
                  Quận/Huyện
                </label>
                <select
                  value={formState?.quan}
                  name='quan'
                  id='quan'
                  onChange={handleChange}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                >
                  <option value=''>Chọn quận/huyện</option>
                  {districtOptions}
                </select>
              </div>
            </div>
            <div className=' grid grid-cols-2 mt-3'>
              <div style={{ marginRight: '1em' }} className='grid grid-cols-1 mt-3'>
                <label htmlFor='xa' className='block mb-1 text-sm text-gray-900'>
                  Xã/Phường
                </label>
                <select
                  value={formState?.xa}
                  name='xa'
                  onChange={handleChange}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                >
                  <option value=''>Chọn xã/phường</option>
                  {wardOptions}
                </select>
              </div>
              <div className='mt-3grid grid-cols-1 mt-3'>
                <label htmlFor='mota' className='block mb-1 text-sm text-gray-900'>
                  Địa chỉ
                </label>
                <input
                  required
                  type='text'
                  name='mota'
                  id='mota'
                  onChange={handleInput}
                  value={formState?.mota}
                  className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                  placeholder='Ví dụ: Số 20, ngõ 90, tổ 30, thôn....'
                />
              </div>
            </div>
            <div className='mt-3'>
              <label htmlFor='note' className='block mb-1 text-sm text-gray-900'>
                Ghi chú
              </label>
              <input
                required
                type='text'
                name='note'
                id='note'
                onChange={handleInput}
                value={formState?.note}
                className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
                placeholder='Ghi chú của bạn'
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
                  <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
                    {item.title} x {item.quantity}
                  </td>
                  <td className='text-center p-5 bg-slate-100 border-gray-300 border'>
                    {formatCurrency(item.price * item.quantity)}
                  </td>
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
          <div className='table-auto w-full mt-10 md:mt-auto'></div>
        </div>
        <div className='flex justify-center mt-5'>
          <div className='mt-2 w-full'>
            <label htmlFor='paymentMethod' className='block mb-1 text-sm text-gray-900'>
              Hình thức thanh toán
            </label>
            <select
              id='paymentMethod'
              onChange={handlePaymentMethodChange}
              className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
            >
              <option value='0'>Thanh toán khi nhận hàng</option>
              <option value='1'>Thanh toán qua ngân hàng</option>
            </select>
          </div>
        </div>

        <div className='flex justify-center pt-10 mt-5'>
          <div className='mt-2 h-[40px] w-full hover:bg-white hover:text-black bg-black text-white rounded-full border-[1px] hover:border-black'>
            <button type='submit' className='h-[40px] uppercase rounded-full px-5 text-[14px] w-full '>
              Đặt hàng
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Payment
