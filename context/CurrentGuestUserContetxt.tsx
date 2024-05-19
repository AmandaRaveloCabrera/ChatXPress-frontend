import React from "react";
import { ICurrentGuestUserContext } from "../interfaces/users/guestuser/ICurrentGuestUserContext";

/**
 * Initialisation of the context where the user with whom
 * we want to chat in the application will be stored.
 */

const currentGuestUserContext = React.createContext(
  {} as ICurrentGuestUserContext
);

export { currentGuestUserContext };
