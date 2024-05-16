import React from "react";
import { ICurrentUserContext } from "../interfaces/users/guestuser/ICurrentUserContext";

const currentUserContext = React.createContext({} as ICurrentUserContext);

export { currentUserContext };
