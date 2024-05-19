import io, { Socket } from "socket.io-client";
import { IMessageResponse } from "../interfaces/messages/IMessagesResonse";

let socket: Socket;

/**
 * This function is in charge of starting the socket and
 * sending the room to which the users connect to the server.
 * @param room -> The room / chat to which users want to connect.
 */

export const initiateScoket = (room: string) => {
  socket = io("http://192.168.0.23:3001");
  console.log("Connecting socket ....");
  if (socket) socket.emit("join", room);
};

/**
 * This function disconnects the used socket
 */

export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

/**
 * This function uses a callback function to interact
 * with the emitMessage event.
 * The parameter msg is the message sent by the server.
 */

export const subcribeToChat = (
  cb: (err: boolean | null, msg: IMessageResponse) => void
) => {
  if (!socket) return true;
  socket.on("emitMessage", (msg) => {
    return cb(null, msg);
  });
};

/**
 * This function sends a message with your room to the server.
 * @param room -> The room / chat to which users want to connect.
 * @param message -> The message we want to send.
 */

export const sendMessage = (room: string, message: IMessageResponse) => {
  console.log("Room: " + room + ", message: " + message.content);
  if (socket) socket.emit("emitMessage", { room, message });
};
