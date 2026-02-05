import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authType, setAuthType] = useState(null);
  const [user, setUser] = useState(null);
  const [notification, setNotification] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("gpt3_user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (email) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem("gpt3_user", JSON.stringify(userData));

    setNotification("Welcome back 👋");
    setTimeout(() => setNotification(null), 3000);
  };

  const signup = (email) => {
    const userData = { email };
    setUser(userData);
    localStorage.setItem("gpt3_user", JSON.stringify(userData));

    setNotification("Account created successfully !");
    setTimeout(() => setNotification(null), 3000);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("gpt3_user");
    setNotification("Logged out");
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <AuthContext.Provider
      value={{
        authType,
        setAuthType,
        user,
        login,
        signup,
        logout,
        notification,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export const useAuth = () => useContext(AuthContext);
