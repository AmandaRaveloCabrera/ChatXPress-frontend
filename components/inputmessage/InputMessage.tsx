import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { ChatService } from "../../services/ChatService";
import { IMessageRequest } from "../../interfaces/messages/IMessageRequest";
import { currentUserContext } from "../../context/CurrentUserContext";
import { AsyncStore } from "../../services/AsyncStoreService";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { IInputChatProp } from "../../interfaces/messages/IInputChatProp";
import SocketService from "../../services/socketService";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";
import { IMessageResponse } from "../../interfaces/messages/IMessagesResonse";
import { ICurrentChatResponse } from "../../interfaces/chats/ICurrentChatResponse";

/**
 * This component is the input where messages are sent within the chat screen.
 */

const InputMessage = ({
  idChat,
  room,
  setRoom,
  setCurrentChat,
}: IInputChatProp) => {
  const [content, setContent] = React.useState("");
  const { currentUser } = React.useContext(currentUserContext);
  const { guestUser } = React.useContext(currentGuestUserContext);
  const { setChats } = React.useContext(allChatsFromUserContext);

  const updateCurrentChat = (msg: IMessageResponse) => {
    setCurrentChat((oldState: ICurrentChatResponse) => {
      let newState = oldState;
      newState.messages.push(msg);
      return newState;
    });
  };

  const fetchAddMessage = () => {
    const fetchData = async () => {
      const message: IMessageRequest = {
        idUser: currentUser.id,
        content: content,
      };
      const token = await AsyncStore.getToken();
      if (token) {
        const data = await ChatService.updateCurrentChat(
          message,
          idChat,
          token
        );
        if (data) {
          const chats = await ChatService.getChatsByIdUser(
            currentUser.id.toString(),
            token
          );
          SocketService.sendMessage(room, data);
          updateCurrentChat(data);
          setRoom(`${currentUser.id}--with--${guestUser.id}`);
          if (chats) {
            setChats(chats);
          }
        }
      }
    };

    fetchData();
    setContent("");
  };
  return (
    <View style={styles.inputMessageContainer}>
      <Entypo name="emoji-happy" size={32} color="#7D7C7C" />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Text input"
          style={styles.inputMessageStyle}
          placeholderTextColor={"#FFF"}
          value={content}
          onChangeText={setContent}
        />
      </View>
      <Pressable onPress={fetchAddMessage}>
        <AntDesign name="caretright" size={36} color="#51A0B1" />
      </Pressable>
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  inputMessageContainer: {
    backgroundColor: "#D9D9D9",
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputContainer: {
    backgroundColor: "#7D7C7C",
    width: "75%",
    paddingHorizontal: "5%",
    borderRadius: 20,
  },
  inputMessageStyle: {
    color: "white",
  },
});
