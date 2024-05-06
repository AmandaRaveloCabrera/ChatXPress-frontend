import URL_API from "../data/UrlApi";
import { IChatsResponse } from "../interfaces/IChatsResponse";
import { ICurrentChatRequest } from "../interfaces/ICurrentChatRequest";
import { ICurrentChatResponse } from "../interfaces/ICurrentChatResponse";
import { getInitRequest, postInitRequest } from "./RequestService";
const GET_CHATS_BY_ID_USER = URL_API + "/chats/";
const GET_CURRENT_CHAT = URL_API + "/chat";

const getChatsByIdUser = async (id: string) => {
  const request: RequestInfo = `${GET_CHATS_BY_ID_USER}${id}`;
  const response: Response = await fetch(request, getInitRequest());
  console.log(response.status);

  if (response.status == 200) {
    const jsonResponse: IChatsResponse[] = await response.json();
    return jsonResponse;
  }
  return null;
};

const getCurrentChat = async (body: ICurrentChatRequest) => {
  const request: RequestInfo = `${GET_CURRENT_CHAT}`;
  const response: Response = await fetch(request, postInitRequest(body));
  if (response.status == 200) {
    const jsonReponse: ICurrentChatResponse = await response.json();
    return jsonReponse;
  }
  return null;
};

export const ChatService = {
  getChatsByIdUser,
  getCurrentChat,
};
