import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { currentChat } from "../../data/CurrentChat";
import Message from "../message/Message";

const MessagesContainer = () => {
  return (
    <ScrollView style={styles.allMessagesContainer}>
      {currentChat.messages.map((message) => (
        <Message
          id={message.id}
          content={message.content}
          time={message.time}
          iduser={message.iduser}
          key={message.id}
        />
      ))}
    </ScrollView>
  );
};

export default MessagesContainer;

const styles = StyleSheet.create({
  allMessagesContainer: {
    height: "75%",
    width: "100%",
  },
});
