import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Error from './Pages/Error.jsx'
import Header from './Pages/Header.jsx'
import { lazy, Suspense } from 'react'
import { Provider } from 'react-redux'
import store from './Utils/store.js'
const Login = lazy(() => import('./Pages/login.jsx'))
const Home = lazy(() => import('./Pages/Home.jsx'))
const Register = lazy(() => import('./Pages/register.jsx'))
const Reduxx = lazy(() => import('./Pages/Reduxx.jsx'))
const Transaction = lazy(() => import('./Pages/Transaction.jsx'))
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
    ]
  }
])
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <RouterProvider router={appRouter}>
  </RouterProvider>
  </Provider>
)
