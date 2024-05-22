/**
 * Interface for the object we receive from the api to log in the user.
 */

export interface IUserLoginResponse {
  id: string;
  username: string;
  email: string;
  token: string;
}
