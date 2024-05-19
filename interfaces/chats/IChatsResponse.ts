/**
 * Interface for the object we receive from the api to show all the chats of a user.
 */

export interface IChatsResponse {
  idChats: string;
  time: string;
  idGuestUser: String;
  nameGuestUser: String;
  lastMessage: String;
}
