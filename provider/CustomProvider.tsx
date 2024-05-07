import React from "react";

import { ICurrentUserContext } from "../interfaces/ICurrentUserContext";
import { currentUserContext } from "../context/CurrentUserContext";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { IChatsResponse } from "../interfaces/IChatsResponse";
import { IAllChatsContext } from "../interfaces/IAllChatsContext";
import { allChatsFromUserContext } from "../context/AllChatsContext";
import { ICurrentChatResponse } from "../interfaces/ICurrentChatResponse";
import { ICurrentChatContext } from "../interfaces/ICurrentChatContext";
import { currentChatContext } from "../context/CurrentChatContext";
import { IGuestUser } from "../interfaces/IGuestUser";
import { ICurrentGuestUserContext } from "../interfaces/ICurrentGuestUserContext";
import { currentGuestUserContext } from "../context/CurrentGuestUserContetxt";
import { IAllUsersContext } from "../interfaces/IAllUsersContext";
import { allUsersContext } from "../context/AllUsersContext";
import { IUsers } from "../interfaces/IUsers";

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

  const [allUsers, setAllUsers] = React.useState<IUsers[]>([] as IUsers[]);

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
