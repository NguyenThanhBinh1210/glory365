const Contact = () => {
  return (
    <div className='mt-7 p-5 md:px-0 md:max-w-[1180px] md:mx-auto pb-7 border-b'>
      <form className='md:w-[500px] md:mx-auto'>
        <h1 className=' text-[29px] uppercase font-semibold mb-5'>Liên hệ</h1>
        <p className='text-[13.6px]'>31A Lý Tự Trọng, Quận 1, TP.HCM</p>
        <div className='mt-3'>
          <label htmlFor='name' className='block mb-1 text-sm text-gray-900'>
            Name
          </label>
          <input
            type='text'
            name='name'
            id='name'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
            placeholder='Name'
          />
        </div>
        <div className='mt-2'>
          <label htmlFor='email' className='block mb-1 text-sm text-gray-900'>
            Email
          </label>
          <input
            type='text'
            name='email'
            id='email'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
            placeholder='Email'
          />
        </div>
        <div className='mt-2'>
          <label htmlFor='message' className='block mb-1 text-sm text-gray-900'>
            Message
          </label>
          <textarea
            name='message'
            id='message'
            className='bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 '
            placeholder='Message'
          />
        </div>
        <button type='submit' className=' mt-2 h-[38px] rounded-full py-1 text-[14px] w-full bg-black text-white'>
          Send
        </button>
      </form>
    </div>
  )
}

export default Contact
