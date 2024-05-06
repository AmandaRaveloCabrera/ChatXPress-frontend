import React from "react";
import { ICurrentUserContext } from "../interfaces/ICurrentUserContext";

const currentUserContext = React.createContext({} as ICurrentUserContext);

export { currentUserContext };
