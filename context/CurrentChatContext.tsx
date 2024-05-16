import React from "react";
import { ICurrentChatContext } from "../interfaces/chats/ICurrentChatContext";

const currentChatContext = React.createContext({} as ICurrentChatContext);

export { currentChatContext };
