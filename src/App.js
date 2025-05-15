import { BrowserRouter, Routes, Route } from "react-router-dom";
import  './App.css'
import { lazy, Suspense } from "react";
import Loading from "./components/common/Loading";



const App=() =>{  

  const Home=lazy(() => import('./components/pages/Home'))
  const Header=lazy(() => import('./components/layouts/Header'))
  const Footer=lazy(() => import('./components/layouts/Footer'))
  const Restaurants1=lazy(() => import('./components/pages/Restaurants'))
  const Orders=lazy(() => import('./components/pages/Orders'))
  const SelectedRes=lazy(() => import('./components/pages/SelectedRes'))
  const Items=lazy(() => import('./components/ReusableComponents/Items'))
  const Category=lazy(() => import('./components/pages/Category'))

  return (
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Header  />
        <div className="app-div">
          <Routes>
          <Route path='/' element={<Home />} />
          <Route path='items' element={<Items />} />
          <Route path='restaurants' element={<Restaurants1 />} />
          <Route path='category' element={<Category />} />
          <Route path='orders' element={<Orders />} />
          <Route path='selectedRestaurant' element={<SelectedRes />} />
          <Route path='restaurantItems' element={<Orders />} />
        </Routes>
        </div>  
        <Footer />
        </Suspense>
      </BrowserRouter>

  );
}

export default App;
