import React from "react";

import { ICurrentUserContext } from "../interfaces/users/currentuser/ICurrentUserContext";
import { currentUserContext } from "../context/CurrentUserContext";
import { IUserLoginResponse } from "../interfaces/users/userlogin/IUserLoginResponse";
import { IChatsResponse } from "../interfaces/chats/IChatsResponse";
import { IAllChatsContext } from "../interfaces/chats/IAllChatsContext";
import { allChatsFromUserContext } from "../context/AllChatsContext";
import { IGuestUser } from "../interfaces/users/guestuser/IGuestUser";
import { ICurrentGuestUserContext } from "../interfaces/users/guestuser/ICurrentGuestUserContext";
import { currentGuestUserContext } from "../context/CurrentGuestUserContetxt";
import { CustomProviderProps } from "../interfaces/provider/CustomProviderProps";

const CustomProvider = ({ children }: CustomProviderProps) => {
  const [currentUser, setCurrentUser] = React.useState<IUserLoginResponse>(
    {} as IUserLoginResponse
  );
  const [chats, setChats] = React.useState<IChatsResponse[]>(
    [] as IChatsResponse[]
  );
  const [guestUser, setGuestUser] = React.useState<IGuestUser>(
    {} as IGuestUser
  );

  const currentUserData: ICurrentUserContext = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
  };
  const chatsData: IAllChatsContext = {
    chats: chats,
    setChats: setChats,
  };
  const guestUserData: ICurrentGuestUserContext = {
    guestUser: guestUser,
    setGuestUser: setGuestUser,
  };

  return (
    <currentUserContext.Provider value={currentUserData}>
      <allChatsFromUserContext.Provider value={chatsData}>
        <currentGuestUserContext.Provider value={guestUserData}>
          {children}
        </currentGuestUserContext.Provider>
      </allChatsFromUserContext.Provider>
    </currentUserContext.Provider>
  );
};

export default CustomProvider;
