import URL_API from "../data/UrlApi";
import { IBodyChatRequest } from "../interfaces/IBodyChatRequest";
import { IChatsResponse } from "../interfaces/IChatsResponse";
import { ICurrentChatRequest } from "../interfaces/ICurrentChatRequest";
import { ICurrentChatResponse } from "../interfaces/ICurrentChatResponse";
import { IMessageCreatedResponse } from "../interfaces/IMessageCreatedResponse";
import { IMessageRequest } from "../interfaces/IMessageRequest";
import { IMessageResponse } from "../interfaces/IMessagesResonse";
import {
  getInitRequest,
  postInitRequest,
  putInitRequest,
} from "./RequestService";
const GET_CHATS_BY_ID_USER = URL_API + "/chats/";
const GET_CURRENT_CHAT = URL_API + "/chat";
const POST_MESSAGE = URL_API + "/message";
const UPDATE_CHAT = URL_API + "/chat/";

const getChatsByIdUser = async (id: string, token: string) => {
  const request: RequestInfo = `${GET_CHATS_BY_ID_USER}${id}`;
  const response: Response = await fetch(request, getInitRequest(token));

  if (response.status == 200) {
    const jsonResponse: IChatsResponse[] = await response.json();
    return jsonResponse;
  }
  return null;
};

const getCurrentChat = async (body: ICurrentChatRequest, token: string) => {
  const request: RequestInfo = `${GET_CURRENT_CHAT}`;
  const response: Response = await fetch(request, postInitRequest(body, token));
  if (response.status == 200) {
    const jsonReponse: ICurrentChatResponse = await response.json();
    return jsonReponse;
  }
  return null;
};

const updateCurrentChat = async (
  body: IMessageRequest,
  id: string,
  token: string
) => {
  const requestMessage: RequestInfo = `${POST_MESSAGE}`;
  const requestChat: RequestInfo = `${UPDATE_CHAT}${id}`;
  const responseMessage: Response = await fetch(
    requestMessage,
    postInitRequest(body, token)
  );

  if (responseMessage.status === 200) {
    const jsonReponseMessage: IMessageCreatedResponse =
      await responseMessage.json();
    if (jsonReponseMessage) {
      const bodyChat: IBodyChatRequest = {
        idMessage: jsonReponseMessage.idMessage,
      };
      const responseChat: Response = await fetch(
        requestChat,
        putInitRequest(bodyChat, token)
      );
      if (responseChat.status === 200) {
        return true;
      }
    }
  }
  return null;
};

export const ChatService = {
  getChatsByIdUser,
  getCurrentChat,
  updateCurrentChat,
};
