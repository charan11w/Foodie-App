import { lazy } from 'react'

const Home = lazy(() => import('./components/pages/Home'))

const Restaurants1 = lazy(() => import('./components/pages/Restaurants'))
const Orders = lazy(() => import('./components/pages/Orders'))
const SelectedRes = lazy(() => import('./components/pages/SelectedRes'))
const Items = lazy(() => import('./components/ReusableComponents/Items'))
const Category = lazy(() => import('./components/pages/Category'))
const OrdersHistory = lazy(() => import('./components/pages/OrdersHistory'))

export const routes=[
  {path:'/',element:<Home />,isProtected:false},
  {path:'/items',element:<Items />,isProtected:true},
  {path:'/restaurants',element:<Restaurants1 />,isProtected:true},
  {path:'/category',element:<Category />,isProtected:true},
  {path:'/orders',element:<Orders />,isProtected:true},
  {path:'/selectedRestaurant',element:<SelectedRes />,isProtected:true},
  {path:'/ordersHistory',element:<OrdersHistory />,isProtected:true},
]