import { IGuestUser } from "./IGuestUser";

export interface ICurrentGuestUserContext {
  guestUser: IGuestUser;
  setGuestUser: Function;
}
