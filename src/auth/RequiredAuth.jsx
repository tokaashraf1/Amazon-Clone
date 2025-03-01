import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RequiredAuth = () => {
  const navegate = useNavigate();
  const [user, setUser] = useState();
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);
  return user ? navegate("/") : <Outlet />;
};

export default RequiredAuth;
