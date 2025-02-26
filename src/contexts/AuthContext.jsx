import { useState, createContext, useEffect } from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({ users: [], currentUser: null });

  useEffect(() => {
    const storedUsers = JSON.parse(localStorage.getItem("users")) || [];
    setAuthState({ users: storedUsers, currentUser: null });
  }, []);

  const register = (name, email, password) => {
    if (authState.users.some((user) => user.email === email)) {
      return { success: false, message: "Email already exists." };
    }
    const newUser = { name, email, password };
    const updatedUsers = [...authState.users, newUser];
    localStorage.setItem("users", JSON.stringify(updatedUsers));
    setAuthState({ ...authState, users: updatedUsers });
    return { success: true, message: "Registration successful!" };
  };

  const login = (email, password) => {
    const user = authState.users.find((user) => user.email === email);
    if (!user) {
      return { success: false, message: "Email not found." };
    }
    if (user.password !== password) {
      return { success: false, message: "Incorrect password." };
    }
    localStorage.setItem("currentUser", JSON.stringify(user));
    setAuthState({ ...authState, currentUser: user });
    return { success: true, message: "Login successful!" };
  };

  return (
    <AuthContext.Provider value={{ authState, register, login }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
