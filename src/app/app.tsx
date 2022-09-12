import React, { useEffect, useState } from "react";
import AuthService, { Providers } from "@services/auth-service";
import { User } from "oidc-client-ts";

export default () => {
  const [user, setUser] = useState<User>();

  const providers = Object.keys(Providers) as (keyof typeof Providers)[];
  const authServices = providers.map((key) => new AuthService(key));
  const loginActions = authServices.map((service) => () => service.login());
  const logoutActions = authServices.map((service) => () => service.logout());

  useEffect(() => {
    if (!user || user.expired) {
      authServices.forEach((service) =>
        service.user.then((u) => u && setUser(u))
      );
    }
  }, [user]);

  const authProvider = localStorage.getItem("authProvider");

  return (
    <main>
      {user ? (
        <>
          {providers.map(
            (key, i) =>
              authProvider === key && (
                <button key={i} onClick={logoutActions[i]}>
                  logout
                </button>
              )
          )}

          <p children={JSON.stringify(user)} />
        </>
      ) : (
        <>
          {providers.map((key, i) => (
            <button key={i} onClick={loginActions[i]}>
              login {key}
            </button>
          ))}
        </>
      )}
    </main>
  );
};
