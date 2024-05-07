import React from "react";

import { IAllUsersContext } from "../interfaces/IAllUsersContext";

const allUsersContext = React.createContext({} as IAllUsersContext);

export { allUsersContext };
