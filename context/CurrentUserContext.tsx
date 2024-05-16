import React from "react";
import { ICurrentUserContext } from "../interfaces/users/currentuser/ICurrentUserContext";

const currentUserContext = React.createContext({} as ICurrentUserContext);

export { currentUserContext };
