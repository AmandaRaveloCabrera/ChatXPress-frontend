import io, { Socket } from "socket.io-client";
import { IMessageResponse } from "../interfaces/messages/IMessagesResonse";
let socket: Socket;

export const initiateScoket = (room: string) => {
  socket = io("http://192.168.0.23:3001");
  console.log("Connecting socket ....");
  if (socket) socket.emit("join", room);
};

export const disconnectSocket = () => {
  console.log("Disconnecting socket...");
  if (socket) socket.disconnect();
};

export const subcribeToChat = (
  cb: (err: boolean | null, msg: IMessageResponse) => void
) => {
  if (!socket) return true;
  socket.on("emitMessage", (msg) => {
    return cb(null, msg);
  });
};

export const sendMessage = (room: string, message: IMessageResponse) => {
  console.log("Room: " + room + ", message: " + message.content);
  if (socket) socket.emit("emitMessage", { room, message });
};
