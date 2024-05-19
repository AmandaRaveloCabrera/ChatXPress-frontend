/**
 * Interface to collect all user data sent by the api.
 */

export interface IUsersResponse {
  _id: String;
  name: String;
  lastName: String;
  email: String;
  department: String;
  isActive: Boolean;
  password: String;
  idRole: String;
}
