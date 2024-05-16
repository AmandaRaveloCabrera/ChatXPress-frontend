import { IChatsResponse } from "./IChatsResponse";

export interface IAllChatsContext {
  chats: IChatsResponse[];
  setChats: Function;
}
