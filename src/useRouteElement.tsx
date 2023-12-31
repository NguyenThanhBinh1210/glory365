import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from './layouts/HomeLayout'
import Home from './pages/Home'
import Contact from './pages/Contact'
import Store from './pages/Store'
import ListStore from './pages/ListStore'
import Blog from './pages/Blog'
import Terms from './pages/Terms'
import Delivery from './pages/Delivery'
import Return from './pages/Return'
import BlogDetail from './pages/BlogDetail'
import ProductDetail from './pages/ProductDetail'
import Payment from './pages/Payment'
import Cart from './pages/Cart'
import OrderPayment from './pages/OrderPayment'

const router = createBrowserRouter([
  {
    path: '/',
    index: true,
    element: (
      <HomeLayout>
        <Home />
      </HomeLayout>
    )
  },
  {
    path: '/lien-he',
    element: (
      <HomeLayout>
        <Contact />
      </HomeLayout>
    )
  },
  {
    path: '/cua-hang',
    element: (
      <HomeLayout>
        <Store />
      </HomeLayout>
    )
  },
  {
    path: '/gio-hang',
    element: (
      <HomeLayout>
        <Cart />
      </HomeLayout>
    )
  },
  {
    path: '/order-payment',
    element: (
      <HomeLayout>
        <OrderPayment />
      </HomeLayout>
    )
  },
  {
    path: '/thanh-toan',
    element: (
      <HomeLayout>
        <Payment />
      </HomeLayout>
    )
  },
  {
    path: '/danh-muc/:slugCategory',
    element: (
      <HomeLayout>
        <ListStore />
      </HomeLayout>
    )
  },
  {
    path: '/cua-hang/:slug',
    element: (
      <HomeLayout>
        <ProductDetail />
      </HomeLayout>
    )
  },
  {
    path: '/blog',
    element: (
      <HomeLayout>
        <Blog />
      </HomeLayout>
    )
  },
  {
    path: '/blog/:id',
    element: (
      <HomeLayout>
        <BlogDetail />
      </HomeLayout>
    )
  },
  {
    path: '/dieu-khoan-su-dung',
    element: (
      <HomeLayout>
        <Terms />
      </HomeLayout>
    )
  },
  {
    path: '/giao-hang-va-thanh-toan',
    element: (
      <HomeLayout>
        <Delivery />
      </HomeLayout>
    )
  },
  {
    path: '/chinh-sach-doi-tra',
    element: (
      <HomeLayout>
        <Return />
      </HomeLayout>
    )
  },

  {
    path: '*',
    element: <div>Loi</div>
  }
])
export default router
