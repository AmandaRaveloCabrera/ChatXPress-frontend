import { IUsersResponse } from "./IUsersResponse";

export interface IAllUsersContext {
  users: IUsersResponse[];
  setUsers: Function;
}
