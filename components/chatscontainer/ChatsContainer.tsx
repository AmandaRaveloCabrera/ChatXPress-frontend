import { ScrollView, StyleSheet, View, Text, Pressable } from "react-native";
import React from "react";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { IChatsResponse } from "../../interfaces/chats/IChatsResponse";
import { Entypo } from "@expo/vector-icons";
import Chat from "../chat/Chat";
import { IChatContainerProps } from "../../interfaces/chats/IChatContainerProps";

/**
 * This component displays a container of all
 * chat components which is used in the chatmenu screen.
 */

const ChatsContainer = ({ setVisibleChats }: IChatContainerProps) => {
  const { chats } = React.useContext(allChatsFromUserContext);

  const goToContact = () => {
    setVisibleChats(false);
  };

  if (chats.length != 0) {
    return (
      <ScrollView style={styles.ScrollContainer}>
        {chats.map((chat: IChatsResponse) => (
          <Chat
            key={chat.idChats}
            idChats={chat.idChats}
            time={chat.time}
            idGuestUser={chat.idGuestUser}
            nameGuestUser={chat.nameGuestUser}
            lastMessage={chat.lastMessage}
          />
        ))}
      </ScrollView>
    );
  }
  return (
    <View style={styles.emptyChatContainer}>
      <Text style={styles.textStyle}>Inicia un nuevo chat</Text>
      <Pressable onPress={goToContact}>
        <Entypo name="squared-plus" size={70} color="#32659D" />
      </Pressable>
    </View>
  );
};

export default ChatsContainer;

const styles = StyleSheet.create({
  ScrollContainer: {
    marginBottom: 25,
    height: "100%",
  },
  emptyChatContainer: {
    width: "100%",
    height: "30%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  textStyle: {
    width: "70%",
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
});
