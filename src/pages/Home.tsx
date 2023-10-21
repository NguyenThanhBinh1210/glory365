import Ads from '~/components/Home/Ads'
import Banner from '~/components/Home/Banner'
import Featured from '~/components/Home/Featured'
import Commit from '~/components/Home/Commit'
import Beauty from '~/components/Home/Beauty'
import Flagship from '~/components/Home/Flagship'
import BlogTip from '~/components/Home/BlogTip'

const Home = () => {
  return (
    <div className=' md:pt-2 border-b pb-10 md:pb-16'>
      <Banner />
      <Featured  />
      <div className='px-2 md:px-0'>
        <Ads />
        <Commit />
        <Beauty />
        <Flagship />
        <BlogTip />
      </div>
    </div>
  )
}

export default Home
