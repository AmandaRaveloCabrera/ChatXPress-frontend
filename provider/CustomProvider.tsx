import React from "react";

import { ICurrentUserContext } from "../interfaces/ICurrentUserContext";
import { currentUserContext } from "../context/LoginContext";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";

type CustomProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const CustomProvider = ({ children }: CustomProviderProps) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<IUserLoginResponse>(
    {} as IUserLoginResponse
  );

  const currentUserData: ICurrentUserContext = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    isActive: isLogin,
    setIsActive: setIsLogin,
  };

  return (
    <currentUserContext.Provider value={currentUserData}>
      {children}
    </currentUserContext.Provider>
  );
};

export default CustomProvider;
