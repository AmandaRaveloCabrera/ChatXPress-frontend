import React from "react";
import { ICurrentGuestUserContext } from "../interfaces/users/guestuser/ICurrentGuestUserContext";

const currentGuestUserContext = React.createContext(
  {} as ICurrentGuestUserContext
);

export { currentGuestUserContext };
