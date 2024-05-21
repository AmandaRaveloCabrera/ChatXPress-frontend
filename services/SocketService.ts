import io, { Socket } from "socket.io-client";
import { IMessageResponse } from "../interfaces/messages/IMessagesResonse";
import Config from "../data/Config";

let socket: Socket;

/**
 * This function is in charge of starting the socket and
 * sending the room to which the users connect to the server.
 * @param room -> The room / chat to which users want to connect.
 */

const initiateScoket = (room: string) => {
  socket = io(Config.URL_SOCKET);
  console.log("Connecting socket ....");
  if (socket) socket.emit("join", room);
};

/**
 * This function disconnects the used socket
 */

const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

/**
 * This function uses a callback function to interact
 * with the emitMessage event.
 * The parameter msg is the message sent by the server.
 */

const subcribeToChat = (
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

const sendMessage = (room: string, message: IMessageResponse) => {
  console.log("chat: " + room + ", mensaje enviado: " + message.content);
  if (socket) socket.emit("emitMessage", { room, message });
};

/**
 * The object to be exported with the above-mentioned functions.
 */

const SocketService = {
  initiateScoket,
  disconnectSocket,
  subcribeToChat,
  sendMessage,
};

export default SocketService;
