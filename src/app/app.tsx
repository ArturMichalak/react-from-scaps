import React, { useEffect, useState } from "react";
import AuthService, { Providers } from "@services/auth-service";
import { User } from "oidc-client-ts";

export default () => {
  const msAuthService = new AuthService("MS");
  const isAuthService = new AuthService("IS");
  const [user, setUser] = useState<User>();

  useEffect(() => {
    if (!user || user.expired) {
      isAuthService.user.then((u) => {
        u && setUser(u);
      });
      msAuthService.user.then((u) => {
        u && setUser(u);
      });
    }
  }, [user]);

  const msLogin = () => msAuthService.login();
  const msLogout = () => msAuthService.logout();
  const isLogin = () => isAuthService.login();
  const isLogout = () => isAuthService.logout();

  return (
    <main>
      {user ? (
        <>
          <button onClick={msLogout}>MS Logout</button>
          <button onClick={isLogout}>IS Logout</button>
          <p children={JSON.stringify(user)} />
        </>
      ) : (
        <>
          <button onClick={msLogin}>MS Login</button>
          <button onClick={isLogin}>IS Login</button>
        </>
      )}
    </main>
  );
};
