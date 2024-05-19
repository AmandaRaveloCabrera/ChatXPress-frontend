import { IChatsResponse } from "./IChatsResponse";
/**
 * Interface of all chats context of the logged in user.
 */
export interface IAllChatsContext {
  chats: IChatsResponse[];
  setChats: Function;
}
