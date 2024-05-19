import React from "react";

import { ICurrentUserContext } from "../interfaces/users/userlogin/ICurrentUserContext";
import { currentUserContext } from "../context/CurrentUserContext";
import { IUserLoginResponse } from "../interfaces/users/userlogin/IUserLoginResponse";
import { IChatsResponse } from "../interfaces/chats/IChatsResponse";
import { IAllChatsContext } from "../interfaces/chats/IAllChatsContext";
import { allChatsFromUserContext } from "../context/AllChatsContext";
import { IGuestUser } from "../interfaces/users/guestuser/IGuestUser";
import { ICurrentGuestUserContext } from "../interfaces/users/guestuser/ICurrentGuestUserContext";
import { currentGuestUserContext } from "../context/CurrentGuestUserContetxt";
import { CustomProviderProps } from "../interfaces/provider/CustomProviderProps";

/**
 * This provider component is created to use all the contexts
 * created here within the application.
 * @param children -> All child components.
 * @returns The context layer surrounding the application.
 */

const CustomProvider = ({ children }: CustomProviderProps) => {
  /**
   * Here are all the useState that we will need in our contexts.
   */
  const [currentUser, setCurrentUser] = React.useState<IUserLoginResponse>(
    {} as IUserLoginResponse
  );
  const [chats, setChats] = React.useState<IChatsResponse[]>(
    [] as IChatsResponse[]
  );
  const [guestUser, setGuestUser] = React.useState<IGuestUser>(
    {} as IGuestUser
  );

  /**
   * All contexts are initialised here
   */

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
