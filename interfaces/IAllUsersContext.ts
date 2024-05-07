import { IGuestUser } from "./IGuestUser";
import { IUsers } from "./IUsers";

export interface IAllUsersContext {
  users: IUsers[];
  setUsers: Function;
}
