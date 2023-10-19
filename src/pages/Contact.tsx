import { useRef } from 'react'
const Contact = () => {
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
      name: formData.get('name') as string | null,
      email: emailInput,
      content: formData.get('content') as string | null
    }

    fetch('https://api-glory365.onrender.com/api/v1/contact/create', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then((response) => {
        if (response.ok) {
          alert('Gửi thông tin thành công')
        } else {
          alert('Có lỗi xảy ra khi gửi thông tin')
        }
      })
      .catch((error) => {
        console.error('Lỗi:', error)
      })
  }

  return (
    <div className="mt-7 p-5 md:px-0 md:max-w-[1180px] md:mx-auto pb-7 border-b">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <div className="col-span-2 md:col-span-1">
          <form ref={formRef} autoComplete='false' action='#' className="md:w-[500px] md:mx-auto">
            <h1 className=" text-[29px] uppercase font-semibold mb-5">
              Liên hệ
            </h1>
            <p className="text-[13.6px]">31A Lý Tự Trọng, Quận 1, TP.HCM</p>
            <div className="mt-3">
              <label
                htmlFor="name"
                className="block mb-1 text-sm text-gray-900"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                id="name"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 "
                placeholder="Name"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="email"
                className="block mb-1 text-sm text-gray-900"
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                id="email"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 "
                placeholder="Email"
              />
            </div>
            <div className="mt-2">
              <label
                htmlFor="message"
                className="block mb-1 text-sm text-gray-900"
              >
                Message
              </label>
              <textarea
                name="content"
                id="message"
                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-500 focus:border-gray-500 block w-full px-2.5 py-1.5 "
                placeholder="Message"
              />
            </div>
            <button
              type="submit" onClick={handleSubmit}
              className=" mt-2 h-[38px] rounded-full py-1 text-[14px] w-full bg-black text-white"
            >
              Send
            </button>
          </form>
        </div>
        <div className="col-span-2 md:col-span-1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4099620623297!2d106.70076291480078!3d10.779879892319169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb4008c19c7%3A0xaefe0fc5122be6fe!2sGlo365!5e0!3m2!1svi!2s!4v1617266636156!5m2!1svi!2s"
            width="100%"
            height="430"
            loading="lazy"
            data-rocket-lazyload="fitvidscompatible"
            data-lazy-src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4099620623297!2d106.70076291480078!3d10.779879892319169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752fb4008c19c7%3A0xaefe0fc5122be6fe!2sGlo365!5e0!3m2!1svi!2s!4v1617266636156!5m2!1svi!2s"
            data-ll-status="loaded"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
