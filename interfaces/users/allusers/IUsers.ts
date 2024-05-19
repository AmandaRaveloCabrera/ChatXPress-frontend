/**
 * Interface to collect all user data sent by the api.
 */

export interface IUsersResponse {
  _id: string;
  name: string;
  lastname: string;
  email: string;
  department: string;
  isActive: Boolean;
  password: string;
  idRole: string;
}
