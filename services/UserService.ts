import URL_API from "../data/UrlApi";
import { IUserLoginRequest } from "../interfaces/users/userlogin/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/users/userlogin/IUserLoginResponse";
import { IUsersResponse } from "../interfaces/users/allusers/IUsers";
import { AsyncStore } from "./AsyncStoreService";
import { getInitRequest, postInitRequest } from "./RequestService";

const LOGIN_PATH = URL_API + "/user/login";
const ALL_USERS_PATH = URL_API + "/users";
const LOGOUT_PATH = URL_API + "/user/logout";

const login = async (
  user: IUserLoginRequest
): Promise<IUserLoginResponse | null> => {
  const request: RequestInfo = `${LOGIN_PATH}`;
  const response: Response = await fetch(request, postInitRequest(user));

  if (response.status === 200) {
    const jsonResponse: IUserLoginResponse = await response.json();
    return jsonResponse;
  }
  return null;
};

const logout = async (email: string) => {
  const body = {
    email: email,
  };
  const request: RequestInfo = `${LOGOUT_PATH}`;
  const response: Response = await fetch(request, postInitRequest(body));
  if (response.status === 200) {
    await AsyncStore.removeData();
    return true;
  }
  return false;
};

const getContacts = async (token: string) => {
  const request: RequestInfo = `${ALL_USERS_PATH}`;
  const response: Response = await fetch(request, getInitRequest(token));
  if (response.status === 200) {
    const jsonResponse: IUsersResponse[] = await response.json();
    return jsonResponse;
  }
  return null;
};

export const UserService = {
  login,
  logout,
  getContacts,
};
