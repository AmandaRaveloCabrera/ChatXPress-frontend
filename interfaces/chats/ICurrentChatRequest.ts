/**
 * Interface for the object to send to the api which should get the current chat.
 */

export interface ICurrentChatRequest {
  idUser: string;
  idGuestUser: string;
  name: string;
}
