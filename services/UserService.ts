import URL_API from "../data/UrlApi";
import { IUserLoginRequest } from "../interfaces/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { AsyncStore } from "./AsyncStoreService";
import { postInitRequest } from "./RequestService";

const LOGIN_PATH = URL_API + "/user/login";

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

export const UserService = {
  login,
  logout,
};
