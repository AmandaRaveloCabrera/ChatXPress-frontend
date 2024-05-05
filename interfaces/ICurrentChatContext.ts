import { ICurrentChatResponse } from "./ICurrentChatResponse";

export interface ICurrentChatContext {
  currentChat: ICurrentChatResponse;
  setCurrentChat: Function;
}
