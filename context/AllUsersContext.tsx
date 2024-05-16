import React from "react";

import { IAllUsersContext } from "../interfaces/users/allusers/IAllUsersContext";

const allUsersContext = React.createContext({} as IAllUsersContext);

export { allUsersContext };
