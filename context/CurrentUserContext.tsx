import React from "react";
import { ICurrentUserContext } from "../interfaces/users/userlogin/ICurrentUserContext";

/**
 * Initialisation of the context where the logged-in user
 * will be stored in the application.
 */

const currentUserContext = React.createContext({} as ICurrentUserContext);

export { currentUserContext };
