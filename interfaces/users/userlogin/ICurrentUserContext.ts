import { IUserLoginResponse } from "./IUserLoginResponse";
/**
 * Interface of the user context found in the application.
 */

export interface ICurrentUserContext {
  currentUser: IUserLoginResponse;
  setCurrentUser: Function;
}
