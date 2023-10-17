import Logo from '~/assets/images/glo365logo.png'
import Modal from '../Modal'
import { useState } from 'react'
import { contentMenu } from './MenuHeader'
import { Link } from 'react-router-dom'
const LogoHeader = () => {

  const [isModalOpen, setModalOpen] = useState<boolean>(false)
  return (
    <div className='md:py-8 relative cursor-pointer py-5 px-3 border-b md:border-b-[0px]'>
      <div className='h-[33px] w-[100px] md:mx-auto md:w-[200px] md:h-[66px]'>
        <Link to='/'>

          <img src={Logo} alt='Logo' />
        </Link>
      </div>
      <button className='md:hidden absolute right-5 top-[50%] translate-y-[-50%]' onClick={() => setModalOpen(true)}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30' width='30px' height='30px'>
          <path d='M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z' />
        </svg>
      </button>
      <Modal data={contentMenu} isOpen={isModalOpen} onClose={() => setModalOpen(false)}></Modal>
    </div>
  )
}

export default LogoHeader
