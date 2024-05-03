import React from "react";
import { IAllChatsContext } from "../interfaces/IAllChatsContext";

const allChatsFromUserContext = React.createContext({} as IAllChatsContext);

export { allChatsFromUserContext };
