import { Link } from 'react-router-dom'
import { useRef } from 'react'
const Footer = () => {
  const formRef = useRef<HTMLFormElement | null>(null)

  function validateEmail(email: string) {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    return emailPattern.test(email)
  }

  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault()

    if (!formRef.current) return

    const formData = new FormData(formRef.current)
    const emailInput = formData.get('email') as string | null
    if (!emailInput || !validateEmail(emailInput)) {
      alert('Email không hợp lệ. Vui lòng nhập email hợp lệ.')
      return
    }

    const data = {
      email: emailInput
    }

    fetch('https://api-glory365.onrender.com/api/v1/message/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert('Gửi email thành công')
        } else {
          alert('Có lỗi xảy ra khi gửi thông tin')
        }
      })
      .catch((error) => {
        console.error('Lỗi:', error)
      })
  }
  const contentFooter = [
    {
      title: 'Thông tin',
      list: [
        {
          path: '/',
          text: 'Giới thiệu'
        },
        {
          path: '/lien-he',
          text: 'Liên hệ'
        },
        {
          path: '/blog',
          text: 'Blog'
        }
      ]
    },
    {
      title: 'Cửa hàng',
      list: [
        {
          path: '/dieu-khoan-su-dung',
          text: 'Điều khoản sử dụng'
        },
        {
          path: '/giao-hang-va-thanh-toan',
          text: 'Giao hàng và thanh toán'
        },
        {
          path: '/chinh-sach-doi-tra',
          text: 'Chính sách đổi trả'
        }
      ]
    },
    {
      title: 'Danh mục sản phẩm',
      list: [
        {
          path: '/',
          text: 'TẨY TRANG & LÀM SẠCH '
        },
        {
          path: '/lien-he',
          text: 'SERUM & ĐIỀU TRỊ'
        },
        {
          path: '/blog',
          text: 'DƯỠNG ẨM'
        },
        {
          path: '/',
          text: 'MẶT NẠ '
        },
        {
          path: '/lien-he',
          text: 'CHĂM SÓC CƠ THỂ'
        },
        {
          path: '/blog',
          text: 'THỰC PHẨM BỔ DUNG'
        }
      ]
    }
  ]
  return (
    <div className='pt-4 md:pt-14'>
      <div className='p-5  lg:p-0  md:grid md:pb-7 grid-cols-4 max-w-[1180px] mx-auto'>
        {contentFooter.map((item, index) => (
          <div className='mb-6' key={index}>
            <h3 className='uppercase text-[14.6px] font-semibold mb-5'>{item.title}</h3>
            <ul className='flex flex-col gap-y-3 text-[13.6px] text-[rgba(0,0,0,0.79)]'>
              {item.list.map((itemLi, indexLi) => (
                <li key={indexLi}>
                  <Link to={itemLi.path}>{itemLi.text}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div>
          <h3 className='uppercase text-[14.6px] font-semibold mb-5'>ĐĂNG KÝ NHẬN TIN</h3>
          <p className='text-[14.6px] leading-5 text-[rgba(0,0,0,0.79)]'>
            Đăng ký các mẹo chăm sóc da, lời khuyên từ chuyên gia và các sự kiện từ Glo365.vn
          </p>
          <form ref={formRef} autoComplete='false' action='#' className='flex mt-3 flex-col items-start gap-y-3'>
            <input
              id='name'
              type='text'
              name='email'
              className='w-full px-2 py-1 h-[33px] bg-transparent border text-[14px] border-black focus:border-[1.5px] transition-all rounded-full outline-none'
              placeholder='Email'
            />
            <button
              type='submit'
              onClick={handleSubmit}
              className='uppercase h-[33px] rounded-full py-1 text-[14px] w-full bg-black text-white'
            >
              Đăng ký
            </button>
          </form>
        </div>
      </div>
      <div className='h-[84px] bg-black text-white flex flex-col gap-y-1.5 justify-start pt-3 text-[11.2px] items-center'>
        <p className='font-bold'>Công ty cổ phần Empire Global Investments</p>
        <p>Địa chỉ: 31A Lý Tự Trọng, Quận 1, TP.HCM</p>
        <p>GPKD số 0315524896 do sở KHĐT TP.HCM cấp ngày 27/02/2019</p>
      </div>
    </div>
  )
}

export default Footer
