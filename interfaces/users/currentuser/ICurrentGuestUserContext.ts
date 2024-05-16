import { IGuestUser } from "../guestuser/IGuestUser";

export interface ICurrentGuestUserContext {
  guestUser: IGuestUser;
  setGuestUser: Function;
}
