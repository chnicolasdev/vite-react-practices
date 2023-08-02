import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../SignIn'
import './App.css'

const AppRoutes = () => {
  
  // Se crea un array y dentro objetos
  let routes = useRoutes([
    { path: '/vite-react-practices/', element: <Home /> },
    { path: '/vite-react-practices/my-account', element: <MyAccount /> },
    { path: '/vite-react-practices/my-order', element: <MyOrder /> },
    { path: '/vite-react-practices/my-orders', element: <MyOrders /> },
    { path: '/vite-react-practices/*', element: <NotFound /> },
    { path: '/vite-react-practices/sign-in', element: <SignIn /> }
  ])

  return routes
}

const App = () => {
  
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
