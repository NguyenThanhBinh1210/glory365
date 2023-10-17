import { Link, NavLink } from 'react-router-dom'

const contentMenu = [
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
        <div className='relative group cursor-pointer'>
          <h4>Brand</h4>
          <ul className='hidden left-[-20px] top-8 group-hover:block absolute bg-white'>
            <div className='absolute bg-transparent group-hover:h-[30px] top-[-30px] w-[70px] '></div>
            <li className='p-3 min-w-[200px]  hover:bg-[#54595F] hover:text-white transition-all'>
              <Link to={'/'}>Nguyen thanh binh</Link>
            </li>
            <li className='p-3 min-w-[200px]  hover:bg-[#54595F] hover:text-white transition-all'>
              <Link to={'/'}>Trinh cong son</Link>
            </li>
            <li className='p-3 min-w-[200px]  hover:bg-[#54595F] hover:text-white transition-all'>
              <Link to={'/'}>Doan van hau</Link>
            </li>
          </ul>
        </div>
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
