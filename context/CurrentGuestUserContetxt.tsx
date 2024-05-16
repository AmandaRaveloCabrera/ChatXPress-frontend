import React from "react";
import { ICurrentGuestUserContext } from "../interfaces/users/currentuser/ICurrentGuestUserContext";

const currentGuestUserContext = React.createContext(
  {} as ICurrentGuestUserContext
);

export { currentGuestUserContext };
