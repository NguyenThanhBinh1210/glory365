/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
const Modal = ({ data, isOpen, onClose }: any) => {
  const modalRef = useRef<HTMLDivElement>(null)
  const handleModalClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose()
    }
  }

  return (
    <div
      id='authentication-modal'
      tabIndex={-1}
      aria-hidden='true'
      onClick={handleModalClick}
      className={`  ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}
      fixed bg-[#02020246]  top-0 left-0 right-0 z-50 w-[100vw] p-4 px-10 overflow-x-hidden overflow-y-auto md:inset-0 h-[100vh] transition-all`}
    >
      <div
        ref={modalRef}
        className='relative z-100 w-full left-[50%] top-[50%] translate-y-[-50%] translate-x-[-50%] max-w-md max-h-full'
      >
        <div className='relative bg-white rounded-lg shadow '>
          <button
            onClick={onClose}
            type='button'
            className='absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center '
            data-modal-hide='authentication-modal'
          >
            <svg
              className='w-3 h-3'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
              />
            </svg>
            <span className='sr-only'>Close modal</span>
          </button>
          <div className='px-6 py-6 lg:px-8 flex flex-col'>
            {data.slice(0, 2).map((item: any, index: number) => (
              <NavLink
                key={index}
                onClick={() => onClose()}
                className={({ isActive, isPending }) =>
                  [isPending ? 'pending' : 'py-2', isActive ? 'text-black' : 'hover:text-black'].join(' ')
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}
            {data.slice(2, 5).map((item: any, index: number) => (
              <NavLink
                key={index}
                onClick={() => onClose()}
                className={({ isActive, isPending }) =>
                  [isPending ? 'pending' : 'py-2', isActive ? 'text-black' : 'hover:text-black'].join(' ')
                }
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}
            <div className='relative group cursor-pointer py-2'>
              <h4>Brand</h4>
              <ul className='opacity-0 z-10 invisible left-[-20px] transition-all duration-500 top-8 group-hover:opacity-100 group-hover:visible absolute bg-white'>
                <div className='absolute bg-transparent group-hover:h-[30px] top-[-30px] w-[70px] '></div>
                <li className='p-3 min-w-[200px]  hover:bg-[#54595F] hover:text-white transition-all'>
                  <Link onClick={() => onClose()} to={'/'}>
                    Nguyen thanh binh
                  </Link>
                </li>
                <li className='p-3 min-w-[200px]  hover:bg-[#54595F] hover:text-white transition-all'>
                  <Link onClick={() => onClose()} to={'/'}>
                    Trinh cong son
                  </Link>
                </li>
                <li className='p-3 min-w-[200px]  hover:bg-[#54595F] hover:text-white transition-all'>
                  <Link onClick={() => onClose()} to={'/'}>
                    Doan van hau
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
