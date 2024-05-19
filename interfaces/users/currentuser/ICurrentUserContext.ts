import { IUserLoginResponse } from "../userlogin/IUserLoginResponse";

export interface ICurrentUserContext {
  currentUser: IUserLoginResponse;
  setCurrentUser: Function;
}
