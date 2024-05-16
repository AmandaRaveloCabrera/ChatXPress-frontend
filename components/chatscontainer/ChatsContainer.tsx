import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import { allChatsFromUserContext } from "../../context/AllChatsContext";
import { IChatsResponse } from "../../interfaces/chats/IChatsResponse";
import Chat from "../chat/Chat";

/**
 * The ChatsContainer component is responsible for displaying chats
 * in the chatmenu screen.
 */

const ChatsContainer = () => {
  const { chats } = React.useContext(allChatsFromUserContext);

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
};

export default ChatsContainer;

const styles = StyleSheet.create({
  ScrollContainer: {
    marginBottom: 25,
    height: "100%",
  },
});
