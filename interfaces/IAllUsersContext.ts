import { IGuestUser } from "./IGuestUser";

export interface IAllUsersContext {
  users: IGuestUser[];
  setUsers: Function;
}
