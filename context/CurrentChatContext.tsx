import React from "react";
import { ICurrentChatContext } from "../interfaces/ICurrentChatContext";

const currentChatContext = React.createContext({} as ICurrentChatContext);

export { currentChatContext };
