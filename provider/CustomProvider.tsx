import React from "react";

import { ICurrentUserContext } from "../interfaces/users/currentuser/ICurrentUserContext";
import { currentUserContext } from "../context/CurrentUserContext";
import { IUserLoginResponse } from "../interfaces/users/userlogin/IUserLoginResponse";
import { IChatsResponse } from "../interfaces/chats/IChatsResponse";
import { IAllChatsContext } from "../interfaces/chats/IAllChatsContext";
import { allChatsFromUserContext } from "../context/AllChatsContext";
import { ICurrentChatResponse } from "../interfaces/chats/ICurrentChatResponse";
import { ICurrentChatContext } from "../interfaces/chats/ICurrentChatContext";
import { currentChatContext } from "../context/CurrentChatContext";
import { IGuestUser } from "../interfaces/users/guestuser/IGuestUser";
import { ICurrentGuestUserContext } from "../interfaces/users/guestuser/ICurrentGuestUserContext";
import { currentGuestUserContext } from "../context/CurrentGuestUserContetxt";
import { IAllUsersContext } from "../interfaces/users/allusers/IAllUsersContext";
import { allUsersContext } from "../context/AllUsersContext";
import { IUsersResponse } from "../interfaces/users/allusers/IUsersResponse";

type CustomProviderProps = {
  children: JSX.Element | JSX.Element[];
};

const CustomProvider = ({ children }: CustomProviderProps) => {
  const [isLogin, setIsLogin] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState<IUserLoginResponse>(
    {} as IUserLoginResponse
  );
  const [chats, setChats] = React.useState<IChatsResponse[]>(
    [] as IChatsResponse[]
  );
  const [currentChat, setCurrentChat] = React.useState<ICurrentChatResponse>({
    idChat: "",
    name: "",
    messages: [],
  });
  const [guestUser, setGuestUser] = React.useState<IGuestUser>(
    {} as IGuestUser
  );

  const [allUsers, setAllUsers] = React.useState<IUsersResponse[]>(
    [] as IUsersResponse[]
  );

  const currentUserData: ICurrentUserContext = {
    currentUser: currentUser,
    setCurrentUser: setCurrentUser,
    isActive: isLogin,
    setIsActive: setIsLogin,
  };
  const chatsData: IAllChatsContext = {
    chats: chats,
    setChats: setChats,
  };

  const currentChatData: ICurrentChatContext = {
    currentChat: currentChat,
    setCurrentChat: setCurrentChat,
  };
  const guestUserData: ICurrentGuestUserContext = {
    guestUser: guestUser,
    setGuestUser: setGuestUser,
  };
  const allUsersData: IAllUsersContext = {
    users: allUsers,
    setUsers: setAllUsers,
  };

  return (
    <currentUserContext.Provider value={currentUserData}>
      <allChatsFromUserContext.Provider value={chatsData}>
        <currentChatContext.Provider value={currentChatData}>
          <allUsersContext.Provider value={allUsersData}>
            <currentGuestUserContext.Provider value={guestUserData}>
              {children}
            </currentGuestUserContext.Provider>
          </allUsersContext.Provider>
        </currentChatContext.Provider>
      </allChatsFromUserContext.Provider>
    </currentUserContext.Provider>
  );
};

export default CustomProvider;
