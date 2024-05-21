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
import SocketService from "../../services/SocketService";
import { IMessageResponse } from "../../interfaces/messages/IMessagesResonse";
import { ICurrentChatInfo } from "../../interfaces/chats/ICurrentChatInfo";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { IChatsResponse } from "../../interfaces/chats/IChatsResponse";

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
  const { setChats } = React.useContext(allChatsFromUserContext);
  const room = `${currentUser.id}--with--${guestUser.id}`;
  const [loading, setLoading] = React.useState(false);
  const [currentChat, setCurrentChat] = React.useState<ICurrentChatInfo>({
    idChat: "",
    name: "",
  });

  const [messages, setMessages] = React.useState([] as IMessageResponse[]);

  const updateCurrentChat = (msg: IMessageResponse) => {
    setMessages((oldMessages) => [...oldMessages, msg]);
    setChats((oldState: IChatsResponse[]) => {
      const chatUpdated: IChatsResponse = {
        idChats: currentChat.idChat,
        idGuestUser: guestUser.id,
        nameGuestUser: guestUser.name,
        time: msg.dateCreated,
        lastMessage: msg.content,
      };
      const newData = oldState.filter((it) => it.idGuestUser !== guestUser.id);
      return [...newData, chatUpdated].reverse();
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
            setCurrentChat(() => {
              const newData: ICurrentChatInfo = {
                idChat: data.idChat,
                name: data.name,
              };
              return newData;
            });
            setMessages(data.messages);
          } else {
            setCurrentChat({
              idChat: "",
              name: "",
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

    return () => {
      SocketService.disconnectSocket();
    };
  }, [room]);

  React.useEffect(() => {
    SocketService.subcribeToChat((err, msg) => {
      if (err) {
        return;
      }

      console.log("Mensaje recibido: " + msg.content);
      updateCurrentChat(msg);
    });
  }, []);

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
          <MessagesContainer messages={messages} />
        )}

        <InputMessage
          updateCurrentChat={updateCurrentChat}
          idChat={currentChat.idChat}
          room={room}
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
