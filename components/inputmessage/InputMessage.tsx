import { Pressable, StyleSheet, TextInput, View } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { ChatService } from "../../services/ChatService";
import { IMessageRequest } from "../../interfaces/messages/IMessageRequest";
import { currentUserContext } from "../../context/CurrentUserContext";
import { AsyncStore } from "../../services/AsyncStoreService";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { IInputChatProps } from "../../interfaces/messages/IInputChatProps";
import SocketService from "../../services/SocketService";
import Colors from "../../assets/styles/Colors";

/**
 * This component is the input where messages are sent within the chat screen.
 */

const InputMessage = ({ idChat, room, updateCurrentChat }: IInputChatProps) => {
  const [content, setContent] = React.useState("");
  const { currentUser } = React.useContext(currentUserContext);
  const { setChats } = React.useContext(allChatsFromUserContext);

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
            currentUser.id,
            token
          );
          SocketService.sendMessage(room, data);
          updateCurrentChat(data);
          if (chats) {
            setChats(chats);
          }
        }
      }
    };
    if (content === "") {
      alert("A blank message cannot be sent. Please try again!");
    } else {
      fetchData();
      setContent("");
    }
  };
  return (
    <View style={styles.inputMessageContainer}>
      <Entypo name="emoji-happy" size={32} color={Colors.inputMessage} />
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Text input"
          style={styles.inputMessageStyle}
          placeholderTextColor={Colors.letterPrimary}
          value={content}
          onChangeText={setContent}
        />
      </View>
      <Pressable onPress={fetchAddMessage}>
        <AntDesign name="caretright" size={36} color={Colors.ternary} />
      </Pressable>
    </View>
  );
};

export default InputMessage;

const styles = StyleSheet.create({
  inputMessageContainer: {
    backgroundColor: Colors.secondary,
    height: "10%",
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    borderTopRightRadius: 25,
    borderTopLeftRadius: 25,
  },
  inputContainer: {
    backgroundColor: Colors.inputMessage,
    width: "75%",
    paddingHorizontal: "5%",
    borderRadius: 20,
  },
  inputMessageStyle: {
    color: Colors.letterPrimary,
  },
});
