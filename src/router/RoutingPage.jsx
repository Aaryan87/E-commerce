import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import SignUpPage from '../pages/SignUpPage';
import CartPage from '../pages/CartPage';
import CheckoutPage from '../pages/CheckoutPage';
import ProductDetailPage from '../pages/ProductDetailPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home></Home>,
  },
  {
    path: '/login',
    element: <LoginPage></LoginPage>,
  },
  {
    path: '/signup',
    element: <SignUpPage></SignUpPage>,
  },
  {
    path: '/cart',
    element: <CartPage></CartPage>,
  },
  {
    path: '/checkout',
    element: <CheckoutPage></CheckoutPage>,
  },
  {
    path: '/product-detail',
    element: <ProductDetailPage></ProductDetailPage>,
  },
]);

const RoutingPage = () => {
  return (
    <div>
      {/* <Home></Home> */}
      <RouterProvider router={router} />
    </div>
  )
}

export default RoutingPage
