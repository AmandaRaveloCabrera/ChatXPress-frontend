/**
 * Interface to the object received from the api which is to send a new message.
 */

export interface IMessageResponse {
  _id: string;
  content: string;
  dateCreated: string;
  idUser: string;
}
