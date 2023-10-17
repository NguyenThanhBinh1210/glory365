/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Collapse = ({ data }: any) => {
  const [showContent, setShow] = React.useState<boolean>(false)
  const ref = React.useRef<any | null>(null)

  React.useEffect(() => {
    if (showContent) {
      ref.current.style.maxHeight = '1000px' // Đặt maxHeight cho hiển thị đầy đủ
      ref.current.style.opacity = '1' // Đặt opacity để hiển thị
    } else {
      ref.current.style.maxHeight = '0' // Đặt maxHeight để ẩn đi
    }
  }, [showContent])

  return (
    <div onClick={() => setShow(!showContent)} className='p-4 pb-3 border cursor-pointer'>
      <div className='uppercase font-semibold flex justify-between'>
        <div>{data.title}</div>
        <div className='text-lg leading-3'>{showContent ? "-" : "+"}</div>
      </div>
      <div
        className='pt-2 overflow-hidden text-sm'
        ref={ref}
        style={{
          transition: 'max-height 0.5s ease-in-out'
        }}
      >
        {data.content}
      </div>
    </div>
  )
}

export default Collapse
