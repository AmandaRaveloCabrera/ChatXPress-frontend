/**
 * Interface for the object we receive from the api to log in the user.
 */

export interface IUserLoginResponse {
  id: String;
  username: String;
  email: String;
  token: String;
}
