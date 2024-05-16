import React from "react";
import { IAllChatsContext } from "../interfaces/chats/IAllChatsContext";

const allChatsFromUserContext = React.createContext({} as IAllChatsContext);

export { allChatsFromUserContext };
