import Footer from '~/components/Layouts/Footer'
import Header from '~/components/Layouts/Header'

interface Props {
  children: React.ReactNode
}
const HomeLayout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
