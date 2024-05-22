/**
 * Interface for the object to be sent to the api which is to send a new message.
 */

export interface IMessageRequest {
  idUser: string;
  content: string;
}
