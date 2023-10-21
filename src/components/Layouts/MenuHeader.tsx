import { NavLink } from 'react-router-dom'

// eslint-disable-next-line react-refresh/only-export-components
export const contentMenu = [
  {
    path: '/',
    title: 'Trang chủ'
  },
  {
    path: '/cua-hang',
    title: 'Cửa hàng'
  },
  {
    path: '/blog',
    title: 'Blog'
  },
  {
    path: '/lien-he',
    title: 'Liên hệ'
  }
]
const MenuHeader = () => {
  return (
    <div className='hidden md:block p-8 lg:py-4 bg-[#F9F9F9]'>
      <div className=' flex gap-x-6 w-max mx-auto uppercase text-[14px] font-semibold text-[#54595F]'>
        {contentMenu.slice(0, 2).map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive, isPending }) =>
              [isPending ? 'pending' : '', isActive ? 'text-black' : 'hover:text-black'].join(' ')
            }
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}
        {/* <div className='relative z-10 bg-white group cursor-pointer'>
          <h4>Brand</h4>
          <ul className='opacity-0  w-full invisible left-[-20px] transition-all duration-500 top-8 group-hover:opacity-100 group-hover:visible absolute bg-white'>
            <div className='absolute bg-transparent group-hover:h-[30px] top-[-30px] w-[70px] '></div>
            <li className='p-3 min-w-[200px]  bg-white  hover:bg-[#54595F] hover:text-white transition-all'>
              <Link to={'/'}>Nguyen thanh binh</Link>
            </li>
            <li className='p-3 min-w-[200px]  bg-white hover:bg-[#54595F] hover:text-white transition-all'>
              <Link to={'/'}>Trinh cong son</Link>
            </li>
            <li className='p-3 min-w-[200px]  bg-white hover:bg-[#54595F] hover:text-white transition-all'>
              <Link to={'/'}>Doan van hau</Link>
            </li>
          </ul>
        </div> */}
        {contentMenu.slice(2, 5).map((item, index) => (
          <NavLink
            key={index}
            className={({ isActive, isPending }) =>
              [isPending ? 'pending' : '', isActive ? 'text-black' : 'hover:text-black'].join(' ')
            }
            to={item.path}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default MenuHeader
