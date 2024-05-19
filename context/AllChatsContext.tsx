import React from "react";
import { IAllChatsContext } from "../interfaces/chats/IAllChatsContext";

/**
 * Initialisation of the context where all the chats
 * of the user logged into the application will be stored.
 */

const allChatsFromUserContext = React.createContext({} as IAllChatsContext);

export { allChatsFromUserContext };
