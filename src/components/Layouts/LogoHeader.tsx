import Logo from '~/assets/images/glo365logo.png'
const LogoHeader = () => {
  return (
    <div className='md:py-8 cursor-pointer py-5 px-3 border-b md:border-b-[0px]'>
      <div className='h-[33px] w-[100px] md:mx-auto md:w-[200px] md:h-[66px]'>
        <img src={Logo} alt='Logo' />
      </div>
    </div>
  )
}

export default LogoHeader
