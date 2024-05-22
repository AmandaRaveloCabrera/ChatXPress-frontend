import { IMessageResponse } from "../messages/IMessagesResonse";

/**
 * Interface to the object received from the api which displays the current chat.
 */

export interface ICurrentChatResponse {
  idChat: string;
  name: string;
  messages: IMessageResponse[];
}
