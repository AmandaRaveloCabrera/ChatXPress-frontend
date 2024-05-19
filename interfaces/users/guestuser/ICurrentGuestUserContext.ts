import { IGuestUser } from "./IGuestUser";

/**
 * Interface of the user context with which we want to chat in the application.
 */
export interface ICurrentGuestUserContext {
  guestUser: IGuestUser;
  setGuestUser: Function;
}
