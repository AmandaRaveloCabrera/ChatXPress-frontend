import { IMessageResponse } from "./IMessagesResonse";

export interface ICurrentChatResponse {
  idChat: string;
  name: String;
  messages: IMessageResponse[];
}
