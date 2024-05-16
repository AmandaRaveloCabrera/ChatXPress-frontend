import { IMessageResponse } from "../messages/IMessagesResonse";

export interface ICurrentChatResponse {
  idChat: string;
  name: String;
  messages: IMessageResponse[];
}
