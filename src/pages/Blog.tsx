import BlogHomeItem from '~/components/Blog/BlogHomeItem'
import BlogTagItem from '~/components/Blog/BlogTagItem'

const Blog = () => {
  return (
    <div className='pb-8 px-[10px] md:pb-16 border-b md:px-3 lg:px-0 md:max-w-[1180px] md:mx-auto'>
      <div className='mt-10'>
        <h1 className=' text-[29px] uppercase font-semibold mb-5 text-center'>Blog</h1>
        <div className='mb-3 md:h-[300px] grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-5'>
          <BlogTagItem />
          <BlogTagItem />
        </div>
        <div className='mb-10 md:h-[200px] grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5'>
          <BlogTagItem />
          <BlogTagItem />
          <BlogTagItem />
        </div>
        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-5'>
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
          <BlogHomeItem />
        </div>
      </div>
    </div>
  )
}

export default Blog
