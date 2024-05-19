import URL_API from "../data/UrlApi";
import { IUserLoginRequest } from "../interfaces/users/userlogin/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/users/userlogin/IUserLoginResponse";
import { IUsersResponse } from "../interfaces/users/allusers/IUsers";
import { AsyncStore } from "./AsyncStoreService";
import { getInitRequest, postInitRequest } from "./RequestService";

/**
 * All the urls of the endpoints that we will be calling.
 */

const LOGIN_PATH = URL_API + "/user/login";
const ALL_USERS_PATH = URL_API + "/users";
const LOGOUT_PATH = URL_API + "/user/logout";

/**
 * This function will make a call to the api in order to log the user in,
 * if all goes well we will send the api's satisfactory response,
 * otherwise we return a null.
 * @param user -> User who wants to log in to the application.
 * @returns A promise with the data of the correct answer or the null.
 */

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

/**
 * This function must call the api to unlog the user
 * who is already in the application. If the response is successful
 * we return true, otherwise false.
 * @param email -> The email of the user we want to unlog out of the application.
 * @param token -> The token needed to make requests.
 * @returns A promise with a boolean.
 */

const logout = async (email: string, token: string) => {
  const body = {
    email: email,
  };
  const request: RequestInfo = `${LOGOUT_PATH}`;
  const response: Response = await fetch(request, postInitRequest(body, token));
  if (response.status === 200) {
    await AsyncStore.removeData();
    return true;
  }
  return false;
};

/**
 * This function calls the api to get all the users of the application.
 * If the response is successful it returns them, otherwise it returns a null.
 * @param token -> Token needed to make requests.
 * @returns A promise with the data of the correct answer or the null.
 */

const getContacts = async (token: string) => {
  const request: RequestInfo = `${ALL_USERS_PATH}`;
  const response: Response = await fetch(request, getInitRequest(token));
  if (response.status === 200) {
    const jsonResponse: IUsersResponse[] = await response.json();
    return jsonResponse;
  }
  return null;
};

/**
 * The object to be exported with the above-mentioned functions.
 */

export const UserService = {
  login,
  logout,
  getContacts,
};
