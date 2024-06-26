import {
  ImageProps,
  Pressable,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import React from "react";
import { NavigationContext } from "@react-navigation/native";
import { currentGuestUserContext } from "../../context/CurrentGuestUserContetxt";
import { IGuestUser } from "../../interfaces/users/guestuser/IGuestUser";
import { IChatsResponse } from "../../interfaces/chats/IChatsResponse";
import TimeFormatter from "../../utils/TimeFormatter";
import Colors from "../../assets/styles/Colors";

/**
 * This component displays a chat that is used within
 * the ChatContainer component which in turn is within
 * the chatmenu screen.
 */

const Chat = (chat: IChatsResponse) => {
  const navigation = React.useContext(NavigationContext);
  const { setGuestUser } = React.useContext(currentGuestUserContext);
  const avatarDefault: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const navigateChat = (id: string, name: string) => {
    const data: IGuestUser = {
      id: id,
      name: name,
    };
    setGuestUser(data);
    navigation?.navigate("Chat");
  };
  return (
    <Pressable
      onPress={() => navigateChat(chat.idGuestUser, chat.nameGuestUser)}
      key={chat.idChats}
    >
      <View style={styles.chatContainer}>
        <View style={styles.chatSubContainer}>
          <View style={styles.avatarContainer}>
            <Image source={avatarDefault} style={styles.avatarStyle} />
          </View>
          <View>
            <Text style={styles.textStyle}>{chat.nameGuestUser}</Text>
            <Text style={styles.lastMessageStyle}>{chat.lastMessage}</Text>
          </View>
        </View>
        <Text style={styles.textStyle}>
          {TimeFormatter.formatTimeInChat(chat.time)}
        </Text>
      </View>
    </Pressable>
  );
};

export default Chat;

const styles = StyleSheet.create({
  chatContainer: {
    backgroundColor: Colors.secondary,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-evenly",
    paddingHorizontal: 15,
    paddingVertical: 8,
  },
  chatSubContainer: {
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  avatarContainer: {
    paddingRight: 10,
  },
  lastMessageStyle: {
    color: Colors.letterSecondary,
    width: 200,
  },
  textStyle: {
    color: Colors.letterDark,
    fontSize: 16,
    fontWeight: "500",
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
});
