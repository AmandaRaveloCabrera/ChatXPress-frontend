import React from "react";

import { ICurrentUserContext } from "../interfaces/ICurrentUserContext";
import { currentUserContext } from "../context/LoginContext";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { IChatsResponse } from "../interfaces/IChatsResponse";
import { IAllChatsContext } from "../interfaces/IAllChatsContext";
import { allChatsFromUserContext } from "../context/AllChatsContext";
import { ICurrentChatResponse } from "../interfaces/ICurrentChatResponse";
import { ICurrentChatContext } from "../interfaces/ICurrentChatContext";
import { currentChatContext } from "../context/CurrentChatContext";

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
  const [currentChat, setCurrentChat] = React.useState<ICurrentChatResponse>(
    {} as ICurrentChatResponse
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

  return (
    <currentUserContext.Provider value={currentUserData}>
      <allChatsFromUserContext.Provider value={chatsData}>
        <currentChatContext.Provider value={currentChatData}>
          {children}
        </currentChatContext.Provider>
      </allChatsFromUserContext.Provider>
    </currentUserContext.Provider>
  );
};

export default CustomProvider;
