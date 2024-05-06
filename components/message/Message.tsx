import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMessageProp } from "../../interfaces/IMessageProp";
import { currentUserContext } from "../../context/CurrentUserContext";

const Message = (message: IMessageProp) => {
  const { currentUser } = React.useContext(currentUserContext);
  return (
    <View
      style={
        message.iduser == currentUser.id
          ? styles.messageContainerUser
          : styles.messageContainerChat
      }
      key={message.id}
    >
      <View
        style={
          message.iduser === currentUser.id
            ? styles.messageTextContainerUser
            : styles.messageTextContainerChat
        }
      >
        <Text>{message.content}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeStyle}>12:12</Text>
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
