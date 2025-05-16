import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../redux-slices/AuthSlice";


const useHeader = () => {
  const dispatch = useDispatch();
  const [models, setModels] = useState({
    loginOpen: false,
    logoutOpen: false,
    checkOut: false
  });

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuOpen = () => setMobileMenuOpen(true);
  const handleMobileMenuClose = () => setMobileMenuOpen(false);

  const handleLogin = useCallback(() => {
    setModels(prev => ({ ...prev, loginOpen: true }));
  }, []);

  const handleLogOut = useCallback(() => {
    setModels(prev => ({ ...prev, logoutOpen: true }));
  }, []);

  const handleCheckout = useCallback(() => {
    setModels(prev => ({ ...prev, checkOut: true }));
  }, []);

  const handleClose = useCallback(() => {
    setModels({ loginOpen: false, logoutOpen: false, checkOut: false });
  }, []);

  const handleLogOutClose = useCallback(() => {
    setModels(prev => ({ ...prev, logoutOpen: true }));
    dispatch(logout({ isAuthenticated: false }));
  }, [dispatch]);


   return {
    loginOpen: models.loginOpen,
    logoutOpen: models.logoutOpen,
    checkOut: models.checkOut,
    mobileMenuOpen,
    handleMobileMenuOpen,
    handleMobileMenuClose,
    handleLogin,
    handleLogOut,
    handleCheckout,
    handleClose,
    handleLogOutClose
  };

}

export default useHeader;