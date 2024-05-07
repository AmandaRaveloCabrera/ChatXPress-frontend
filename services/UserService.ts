import URL_API from "../data/UrlApi";
import { IUserLoginRequest } from "../interfaces/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { IUsers } from "../interfaces/IUsers";
import { IUsersResponse } from "../interfaces/IUsersResponse";
import { AsyncStore } from "./AsyncStoreService";
import { getInitRequest, postInitRequest } from "./RequestService";

const LOGIN_PATH = URL_API + "/user/login";
const ALL_USERS_PATH = URL_API + "/users";

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

const logout = async () => {
  await AsyncStore.removeData();
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
