import { IUsersResponse } from "./IUsers";

export interface IAllUsersContext {
  users: IUsersResponse[];
  setUsers: Function;
}
