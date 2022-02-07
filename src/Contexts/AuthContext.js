import react, { useState } from "react";

export const authContext = react.createContext({
  userId: null,
  token: null,
  productItems: null,
  login: (token, userId) => {},
  addProductItems: (items) => {},
  logout: () => {},
});

const AuthProvider = ({ children }) => {
  let cachedtoken = localStorage.getItem("token");
  let cachedId = localStorage.getItem("userId");
  const [token, setToken] = useState(cachedtoken);
  const [userId, setUserId] = useState(cachedId);
  const [itemsList, setItemsList] = useState(null);
  const login = (token, userId) => {
    setToken(token);
    setUserId(userId);
  };
  const logout = () => {
    setUserId(null);
    setToken(null);
  };
  const addProductItems = (items) => {
    setItemsList(items);
  };

  return (
    <authContext.Provider
      value={{
        token: token,
        userId: userId,
        productItems: itemsList,
        login: login,
        addProductItems: addProductItems,
        logout: logout,
      }}
    >
      {children}
    </authContext.Provider>
  );
};

export default AuthProvider;
