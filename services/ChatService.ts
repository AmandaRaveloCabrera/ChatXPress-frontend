import Config from "../data/Config";
import { IBodyChatRequest } from "../interfaces/chats/IBodyChatRequest";
import { IChatsResponse } from "../interfaces/chats/IChatsResponse";
import { ICurrentChatRequest } from "../interfaces/chats/ICurrentChatRequest";
import { ICurrentChatResponse } from "../interfaces/chats/ICurrentChatResponse";
import { IMessageRequest } from "../interfaces/messages/IMessageRequest";
import { IMessageResponse } from "../interfaces/messages/IMessagesResonse";
import RequestService from "./RequestService";

/**
 * All the urls of the endpoints that we will be calling.
 */

const GET_CHATS_BY_ID_USER = Config.URL_API + "/chats/";
const GET_CURRENT_CHAT = Config.URL_API + "/chat";
const POST_MESSAGE = Config.URL_API + "/message";
const UPDATE_CHAT = Config.URL_API + "/chat/";

/**
 * This function calls the api to get all the chats of a given user.
 * If the response is successful we return the data,
 * otherwise we return a null.
 * @param id -> The id of the user whose chats we want to get.
 * @param token -> The token needed to make requests.
 * @returns A promise with the data of the correct answer or the null.
 */

const getChatsByIdUser = async (id: string, token: string) => {
  const request: RequestInfo = `${GET_CHATS_BY_ID_USER}${id}`;
  const response: Response = await fetch(
    request,
    RequestService.getInitRequest(token)
  );

  if (response.status == 200) {
    const jsonResponse: IChatsResponse[] = await response.json();
    return jsonResponse;
  }
  return null;
};

/**
 * This function calls the api to get a certain chat between two users.
 * If the response is successful we return the data,
 * otherwise we return a null.
 * @param body -> The data we need in order to get the chat we want.
 * @param token -> The token needed to make requests.
 * @returns A promise with the data of the correct answer or the null.
 */

const getCurrentChat = async (body: ICurrentChatRequest, token: string) => {
  const request: RequestInfo = `${GET_CURRENT_CHAT}`;
  const response: Response = await fetch(
    request,
    RequestService.postInitRequest(body, token)
  );
  if (response.status == 200) {
    const jsonReponse: ICurrentChatResponse = await response.json();
    return jsonReponse;
  }
  return null;
};

/**
 * This function calls the api twice, the first time to enter the message
 * and the second time to modify the chat with that new message.
 * If the response is successful we return the data,
 * otherwise we return a null.
 * @param body -> The data we need in order to get the chat we want.
 * @param id -> The id of the chat we want to modify.
 * @param token -> The token needed to make requests.
 * @returns A promise with the data of the correct answer or the null.
 */

const updateCurrentChat = async (
  body: IMessageRequest,
  id: string,
  token: string
) => {
  const requestMessage: RequestInfo = `${POST_MESSAGE}`;
  const requestChat: RequestInfo = `${UPDATE_CHAT}${id}`;
  const responseMessage: Response = await fetch(
    requestMessage,
    RequestService.postInitRequest(body, token)
  );

  if (responseMessage.status === 200) {
    const jsonReponseMessage: IMessageResponse = await responseMessage.json();
    if (jsonReponseMessage) {
      const bodyChat: IBodyChatRequest = {
        idMessage: jsonReponseMessage._id,
      };
      const responseChat: Response = await fetch(
        requestChat,
        RequestService.putInitRequest(bodyChat, token)
      );
      if (responseChat.status === 200) {
        return jsonReponseMessage;
      }
    }
  }
  return null;
};

/**
 * The object to be exported with the above-mentioned functions.
 */

export const ChatService = {
  getChatsByIdUser,
  getCurrentChat,
  updateCurrentChat,
};
