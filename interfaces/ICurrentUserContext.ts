import { IUserLoginResponse } from "./IUserLoginResponse";

export interface ICurrentUserContext {
  currentUser: IUserLoginResponse;
  setCurrentUser: Function;
  isActive: boolean;
  setIsActive: Function;
}
