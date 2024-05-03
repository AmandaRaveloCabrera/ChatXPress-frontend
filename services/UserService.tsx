import URL_API from "../data/UrlApi";
import { IUserLoginRequest } from "../interfaces/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { AsyncStore } from "./AsyncStoreService";
import { getInitRequest, postInitRequestLogin } from "./RequestService";

const LOGIN_PATH = URL_API + "/user/login";
const GET_USER_PATH = URL_API + "/user/email/";

const login = async (
  user: IUserLoginRequest
): Promise<IUserLoginResponse | null> => {
  const request: RequestInfo = `${LOGIN_PATH}`;
  const response: Response = await fetch(request, postInitRequestLogin(user));

  if (response.status === 200) {
    // const cookie: string | null = response.headers.get("Set-Cookie");
    // if (cookie) {
    //   await AsyncStore.storeData(cookie);
    // }
    const jsonResponse: IUserLoginResponse = await response.json();
    return jsonResponse;
  }
  return null;
};

const logout = async () => {
  await AsyncStore.removeData();
};

const getUserByEmail = async (email: string, cookie: string) => {
  const request: RequestInfo = `${GET_USER_PATH}${email}`;
  const response: Response = await fetch(request, getInitRequest(cookie));
  console.log(response.status);
  console.log(await response.json());
};

export const UserService = {
  login,
  logout,
  getUserByEmail,
};
