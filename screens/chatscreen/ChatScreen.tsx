import {
  ImageBackground,
  ImageBackgroundProps,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import React from "react";
import HeaderChat from "../../components/headerchat/HeaderChat";
import InputMessage from "../../components/inputmessage/InputMessage";
import { currentChat } from "../../data/CurrentChat";
import { user } from "../../data/user";

const ChatScreen = () => {
  const background: ImageBackgroundProps = require("../../assets/images/fondo.jpg");
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.backgroundContainer}
    >
      <View style={styles.mainContainer}>
        <HeaderChat />
        <ScrollView style={styles.allMessagesContainer}>
          {currentChat.messages.map((message) => (
            <View
              style={
                message.iduser === user.id
                  ? styles.messageContainerUser
                  : styles.messageContainerChat
              }
              key={message.id}
            >
              <View
                style={
                  message.iduser === user.id
                    ? styles.messageTextContainerUser
                    : styles.messageTextContainerChat
                }
              >
                <Text>{message.content}</Text>
              </View>
              <View style={styles.timeContainer}>
                <Text style={styles.timeStyle}>{message.time}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
        <InputMessage />
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
  allMessagesContainer: {
    height: "75%",
    width: "100%",
  },
  messageContainerChat: {
    height: 65,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  messageContainerUser: {
    height: 65,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  timeContainer: {
    paddingHorizontal: 15,
  },
  timeStyle: {
    color: "white",
  },
  messageTextContainerUser: {
    backgroundColor: "#67D6EE",
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  messageTextContainerChat: {
    backgroundColor: "#D9D9D9",
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
