import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Headphones from './Pages/Headphones/Headphones'
import Speakers from './Pages/Speakers/Speakers'
import Earphones from './Pages/Earphones/Earphones'
import ProductDetail from './Pages/Product_detail/ProductDetail'
import Checkout from './Pages/Checkout/Checkout'
import Layout from './Layout/Layout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/headphones",
        element: <Headphones />
      },
      {
        path: "/speakers",
        element: <Speakers />
      },
      {
        path: "/earphones",
        element: <Earphones />
      },
      {
        path: "/view/:product",
        element: <ProductDetail />
      },
      {
        path: "/checkout",
        element: <Checkout />
      }
    ]
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
