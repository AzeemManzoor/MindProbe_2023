import React, { createContext, useContext, useState } from 'react';

const NavbarContext = createContext();

export const NavbarProvider = ({ children }) => {
  const [navbarItems, setNavbarItems] = useState([]);

  const addNavbarItem = (item) => {
    setNavbarItems((prevItems) => [...prevItems, item]);
  };

  const value = {
    navbarItems,
    addNavbarItem,
  };

  return <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>;
};

export const useNavbar = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error('useNavbar must be used within a NavbarProvider');
  }
  return context;
};
