import React from "react";
import { ICurrentGuestUserContext } from "../interfaces/ICurrentGuestUserContext";

const currentGuestUserContext = React.createContext(
  {} as ICurrentGuestUserContext
);

export { currentGuestUserContext };
