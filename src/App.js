import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import { lazy, Suspense } from "react";
import Loading from "./components/common/Loading";
import { routes } from './routesConfig'
import ProtectedRoute from "./ProtectedRoute";
import { useSelector } from "react-redux";
import { HeaderProvider } from "./context/HeaderContext";



const App = () => {


  const { isAuthenticated } = useSelector(state => state.auth)
  const Header = lazy(() => import('./components/layouts/Header'))
  const Footer = lazy(() => import('./components/layouts/Footer'))



  return (
    <BrowserRouter>
      <HeaderProvider>
        <Suspense fallback={<Loading />}>
          <Header />
          <main>
            <div className="app-div">

              <Routes>
                {routes.map(({ path, element, isProtected }, index) => (
                  <Route
                    key={index}
                    path={path}
                    element={
                      isProtected ?
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                          {element}
                        </ProtectedRoute>
                        : (
                          element
                        )
                    }
                  />
                ))}
              </Routes>
            </div>
          </main>
          <Footer />
        </Suspense>
      </HeaderProvider>

    </BrowserRouter>

  );
}

export default App;
