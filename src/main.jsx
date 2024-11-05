import { createRoot } from 'react-dom/client'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainAboutUs from './ABOUT-US/MainAboutUs.jsx';
import MainBlog from './BLOG-PAGE/MainBlog.jsx';
import MainContactUs from './CONTACT-US-PAGE/MainContactUs.jsx';
import MainFaqs from './FAQS-PAGE/MainFaqs.jsx';
import MainProducts from './PRODUCTS-PAGE/MainProducts.jsx';
import Aos from './LAYOUT/Aos.jsx';
import MainNav from './LAYOUT/MainNav.jsx';
import Login from './LOGIN & REGISTER/Login.jsx';
import Register from './LOGIN & REGISTER/Register.jsx';
import ForgetPassword from './LOGIN & REGISTER/ForgetPassword.jsx';
import Cart from './CART/Cart.jsx';
import MainShop from './SHOP-PAGE/MainShop.jsx';
import Checkout1 from './CHECKOUT-PAGE/Checkout1.jsx';
import Checkout2 from './CHECKOUT-PAGE/Checkout2.jsx';
import Checkout3 from './CHECKOUT-PAGE/Checkout3.jsx';
import Checkout4 from './CHECKOUT-PAGE/Checkout4.jsx';
import Checkout5 from './CHECKOUT-PAGE/Checkout5.jsx';
import { CartProvider } from './USE-CONTEXT/CartContext.jsx';
// import Redux1 from './REDUX/Redux1.jsx';
import { Provider } from 'react-redux';
import { store } from './REDUX/index.jsx';
import Logout from './LOGIN & REGISTER/Logout.jsx';
import Wishlist from './LOGIN & REGISTER/Wishlist.jsx';
import MainCart from './CART/MainCart.jsx';
import ShopDetails from './SHOP-PAGE/ShopDetails.jsx';
import BlogDetails from './BLOG-PAGE/BlogDetails.jsx';

<Aos/>
const routes = createBrowserRouter([
  {
  path:"/",
  element:<MainNav/>
},
{
  path:"/aboutus",
  element:<MainAboutUs/>
},
{
  path:"/blog",
  element:<MainBlog/>
},
{
  path:"/contactus",
  element:<MainContactUs/>
},
{
  path:"/faqs",
  element:<MainFaqs/>
},
{
  path:"/products",
  element:<MainProducts/>
},
{
path:"/login",
element:<Login/>
},
{
  path:"/logout",
  element:<Logout/>
  },
  {
    path:"/wishlist",
    element:<Wishlist/>
    },  
    {
      path:"/maincart",
      element:<MainCart/>
      },  
  
  
{
  path:"/register",
  element:<Register/>
},
{
  path:"/forget",
  element:<ForgetPassword/>
},
{
  path:"/cart",
  element:<Cart/>
},
{
  path:"/shop",
  element:<MainShop/>
},
{
  path:"/checkout1",
  element:<Checkout1/>
},
{
  path:"/checkout2",
  element:<Checkout2/>
},
{
  path:"/checkout3",
  element:<Checkout3/>
},
{
  path:"/checkout4",
  element:<Checkout4/>
},
{
  path:"/checkout5",
  element:<Checkout5/>
},
{
  path:"/shopdetails/:id",
  element:<ShopDetails/>
},
{
  path:"/blogdetails/:id",
  element:<BlogDetails/>
},



// {
//   path:"/redux1",
//   element:<Redux1/>
// },
])



createRoot( document.getElementById('root')).render(
  <CartProvider>
    <Provider store={store}>
  <RouterProvider router={routes}/>
  
  </Provider>
  </CartProvider>

)
