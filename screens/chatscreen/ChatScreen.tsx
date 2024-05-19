import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  View,
  Text,
} from "react-native";
import React from "react";
import HeaderChat from "../../components/headerchat/HeaderChat";
import InputMessage from "../../components/inputmessage/InputMessage";
import MessagesContainer from "../../components/messagescontainer/MessagesContainer";
import { ChatService } from "../../services/ChatService";
import { ICurrentChatRequest } from "../../interfaces/chats/ICurrentChatRequest";
import { currentUserContext } from "../../context/CurrentUserContext";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";
import { AsyncStore } from "../../services/AsyncStoreService";
import { ICurrentChatResponse } from "../../interfaces/chats/ICurrentChatResponse";
import SocketService from "../../services/socketService";
import { IMessageResponse } from "../../interfaces/messages/IMessagesResonse";

/**
 * This is the chat screen.
 * In it, the user can see all the messages already written
 * as well as the name of the user he/she is chatting with.
 * You can send messages via an input at the bottom.
 * There is an icon at the top to navigate back to the chatmenu screen.
 */

const ChatScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");

  const { currentUser } = React.useContext(currentUserContext);
  const { guestUser } = React.useContext(currentGuestUserContext);

  const [room, setRoom] = React.useState(
    `${currentUser.id}--with--${guestUser.id}`
  );
  const [loading, setLoading] = React.useState(false);
  const [currentChat, setCurrentChat] = React.useState<ICurrentChatResponse>({
    idChat: "",
    name: "",
    messages: [],
  });

  const updateCurrentChat = (msg: IMessageResponse) => {
    setCurrentChat((oldState: ICurrentChatResponse) => {
      let newState = oldState;
      newState.messages.push(msg);
      return newState;
    });
  };

  React.useEffect(() => {
    setLoading(true);

    const retrieveCurrentChat = async () => {
      try {
        const dataRequest: ICurrentChatRequest = {
          idUser: currentUser.id.toString(),
          idGuestUser: guestUser.id,
          name: guestUser.name,
        };
        const token = await AsyncStore.getToken();

        if (token) {
          const data = await ChatService.getCurrentChat(dataRequest, token);
          if (data) {
            setCurrentChat(data);
          } else {
            setCurrentChat({
              idChat: "",
              name: "",
              messages: [],
            });
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    retrieveCurrentChat();
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  React.useEffect(() => {
    if (room) SocketService.initiateScoket(room);

    SocketService.subcribeToChat((err, msg) => {
      if (err) return;
      console.log("Mensaje recibido: " + msg.content);
      updateCurrentChat(msg);
    });

    return () => {
      SocketService.disconnectSocket();
    };
  }, [room]);

  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View style={styles.mainContainer}>
        <HeaderChat nameGuestUser={currentChat.name.toString()} />
        {loading ? (
          <View>
            <Text style={styles.styleText}>Cargando...</Text>
          </View>
        ) : (
          <MessagesContainer messages={currentChat.messages} />
        )}

        <InputMessage
          idChat={currentChat.idChat}
          room={room}
          setRoom={setRoom}
        />
      </View>
    </ImageBackground>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  backgroundContainer: {
    height: "100%",
    width: "100%",
    zIndex: 1,
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "#2F5D95CC",
    alignItems: "center",
    justifyContent: "space-between",
  },
  styleText: {
    color: "white",
    fontSize: 24,
  },
});
