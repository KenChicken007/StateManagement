import { createContext, useState, useContext } from "react";

const useStore = () => {
  const [user, setUser] = useState("");
  const [cartCount, setCartCount] = useState(0);

  return {
    user,
    cartCount,
    login: () => setUser("jack"),
    logout: () => setUser(""),
    addtocart: () => setCartCount(cartCount + 1),
  };
};

const StoreContext = createContext(null);

export const StoreContextProvider = ({ children }) => (
  <StoreContext.Provider value={useStore()}>{children}</StoreContext.Provider>
);

export const useLogin = () => useContext(StoreContext).login;
export const useLogout = () => useContext(StoreContext).logout;
export const useUser = () => useContext(StoreContext).user;
export const useAddToCart = () => useContext(StoreContext).addtocart;
export const useCartCount = () => useContext(StoreContext).cartCount;
