import Main from '../../Layout/Main'
import Blog from '../../Pages/Blog/Blog'
import Home from '../../Pages/Home/Home/Home'
import AllServices from '../../Pages/Home/Services/AllServices'
import ServiceDetails from '../../Pages/Home/Services/ServiceDetails'
import Login from '../../Pages/Login/Login'
import MyReview from '../../Pages/Review/MyReview'
import Myreview from '../../Pages/Review/MyReview'
import Review from '../../Pages/Review/Review'
import SignUp from '../../Pages/SignUp/SignUp'
import PrivateRoute from '../PrivateRoute/PrivateRoute'

const { createBrowserRouter } = require('react-router-dom')

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
      },
      {
        path: '/login',
        element: <Login></Login>,
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>,
      },
      {
        path: '/allServices',
        element: <AllServices></AllServices>,
      },
      {
        path: '/services/:id',
        element: <ServiceDetails></ServiceDetails>,
        loader: ({ params }) =>
          fetch(
            `https://sakibs-new-kitchen-server.vercel.app/services/${params.id}`,
          ),
      },
      {
        path: '/review/:id',
        element: (
          <PrivateRoute>
            <Review></Review>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://sakibs-new-kitchen-server.vercel.app/review/${params.id}`,
          ),
      },
      {
        path: '/myReview',
        element: (
          <PrivateRoute>
            <MyReview></MyReview>
          </PrivateRoute>
        ),
      },
      {
        path: '/blog',
        element: <Blog></Blog>,
      },
    ],
  },
])

export default router
