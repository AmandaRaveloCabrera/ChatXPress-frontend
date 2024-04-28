import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { user } from "../../data/user";
import { IMessageProp } from "../../interfaces/IMessageProp";

const Message = (message: IMessageProp) => {
  return (
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
  );
};

export default Message;

const styles = StyleSheet.create({
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
