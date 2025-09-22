import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error.jsx'
import Header from './Pages/Header.jsx'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './Utils/store.js'
const Recharge = lazy(() => import('./Pages/Recharge.jsx')) 
const Bill = lazy(() => import('./Pages/Bill.jsx'))  
const Insuarance = lazy(() => import('./Pages/Insuarance.jsx'))  
const Login = lazy(() => import('./Pages/login.jsx'))
const Home = lazy(() => import('./Pages/Home.jsx'))
const Register = lazy(() => import('./Pages/register.jsx'))
const Reduxx = lazy(() => import('./Pages/Reduxx.jsx'))
const Transaction = lazy(() => import('./Pages/Transaction.jsx'))
const Merchant = lazy(() => import('./Pages/Merchant.jsx'))
const Rewards = lazy(() => import('./Pages/FetchReward.jsx'))
const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement:<Error/>,
    children: [
      {
        path: '/home',
        element: <Suspense fallback='loading....'>
          <Home/>
        </Suspense>
      },
      {
        path: '/login',
        element: <Suspense fallback='loading....'>
          <Login/>
        </Suspense>
      },
      {
        path: '/register',
        element: <Suspense fallback='loading....'>
          <Register/>
        </Suspense>
      },
      {
        path: '/redux',
        element: <Suspense fallback='loading....'>
          <Reduxx/>
        </Suspense>
      },
      {
        path: '/transaction',
        element: <Suspense fallback='loading....'>
          <Transaction/>
        </Suspense>
      },
      {
        path: '/recharge',
        element: <Suspense fallback='loading....'>
          <Recharge/>
        </Suspense>
      },
      {
        path: '/bill',
        element: <Suspense fallback='loading....'>
          <Bill/>
        </Suspense>
      },
      {
        path: '/insuarance',
        element: <Suspense fallback='loading....'>
          <Insuarance/>
        </Suspense>
      },
      {
        path: '/merchant',
        element: <Suspense fallback='loading....'>
          <Merchant/>
        </Suspense>
      },
      {
        path: '/rewards',
        element: <Suspense fallback='loading....'>
          <Rewards/>
        </Suspense>
      },
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={appRouter}>
  </RouterProvider>
  <ToastContainer position='top-center' autoClose={3000}/>
  </Provider>
)
