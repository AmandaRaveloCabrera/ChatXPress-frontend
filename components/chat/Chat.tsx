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
import { IGuestUser } from "../../interfaces/IGuestUser";
import { IChatsResponse } from "../../interfaces/IChatsResponse";
import TimeFormatter from "../../utils/TimeFormatter";

const Chat = (chat: IChatsResponse) => {
  const navigation = React.useContext(NavigationContext);
  const { setGuestUser } = React.useContext(currentGuestUserContext);
  const avatarDefault: ImageProps = require("../../assets/images/avatarPredefinido.png");
  const navigateChat = (id: String, name: String) => {
    const data: IGuestUser = {
      id: id.toString(),
      name: name.toString(),
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
    backgroundColor: "#D9D9D9",
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
    color: "#606060",
    width: 200,
  },
  textStyle: {
    color: "black",
    fontSize: 16,
    fontWeight: "500",
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
});
