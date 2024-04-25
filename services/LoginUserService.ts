import URL_API from "../data/UrlApi";
import { IUserLoginRequest } from "../interfaces/IUserLoginRequest";
import { IUserLoginResponse } from "../interfaces/IUserLoginResponse";
import { postInitRequest } from "./RequestService";

const LOGIN_PATH = URL_API + "/user/login";

const loginUser = async (
  user: IUserLoginRequest
): Promise<IUserLoginResponse | null> => {
  const request: RequestInfo = `${LOGIN_PATH}`;
  const response = await fetch(request, postInitRequest(user));

  if (response.status === 200) {
    const jsonResponse: IUserLoginResponse = await response.json();
    return jsonResponse;
  }
  return null;
};

export default loginUser;
