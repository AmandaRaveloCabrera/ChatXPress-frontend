/**
 * Interface for the object that is sent to the api to log the user in.
 */

export interface IUserLoginRequest {
  email: string;
  password: string;
  nameRole: string;
}
