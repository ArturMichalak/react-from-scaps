import AuthService, { Providers } from "@services/auth-service";
import React, { FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Callback: FC<{
  provider: keyof typeof Providers;
}> = ({ provider = "IS" }) => {
  const authService = new AuthService(provider);
  const navigate = useNavigate();

  useEffect(() => {
    authService.loginCallback.then(() => {
      localStorage.setItem("authProvider", provider);
      navigate("/");
    });
  }, []);
  return <h2>Redirect...</h2>;
};

export default Callback;
