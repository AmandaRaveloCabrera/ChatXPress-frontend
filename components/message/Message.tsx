import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { IMessageProps } from "../../interfaces/messages/IMessageProps";
import { currentUserContext } from "../../context/CurrentUserContext";
import TimeFormatter from "../../utils/TimeFormatter";
import Colors from "../../assets/styles/Colors";

/**
 * This component displays a message that is used within
 * the MessageContainer component which in turn is within
 * the chat screen.
 */

const Message = (message: IMessageProps) => {
  const { currentUser } = React.useContext(currentUserContext);
  return (
    <View
      style={
        message.iduser == currentUser.id
          ? styles.messageContainerCurrentUser
          : styles.messageContainerGuestUser
      }
    >
      <View
        style={
          message.iduser === currentUser.id
            ? styles.messageTextContainerCurrentUser
            : styles.messageTextContainerGuestUser
        }
      >
        <Text>{message.content}</Text>
      </View>
      <View style={styles.timeContainer}>
        <Text style={styles.timeStyle}>
          {TimeFormatter.formatTimeInMessage(message.time)}
        </Text>
      </View>
    </View>
  );
};

export default Message;

const styles = StyleSheet.create({
  messageContainerGuestUser: {
    height: 65,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  messageContainerCurrentUser: {
    height: 65,
    justifyContent: "center",
    alignItems: "flex-end",
  },
  timeContainer: {
    paddingHorizontal: 15,
  },
  timeStyle: {
    color: Colors.letterPrimary,
  },
  messageTextContainerCurrentUser: {
    backgroundColor: Colors.quaternary,
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  messageTextContainerGuestUser: {
    backgroundColor: Colors.secondary,
    height: "60%",
    borderRadius: 20,
    justifyContent: "center",
    paddingHorizontal: 15,
  },
});
