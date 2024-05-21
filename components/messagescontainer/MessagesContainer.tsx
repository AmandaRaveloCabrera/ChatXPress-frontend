import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import Message from "../message/Message";
import { IContainerMessageProps } from "../../interfaces/messages/IContainerMessageProps";
/**
 * This component displays a container of all message components
 * which is used in the chat screen
 */

const MessagesContainer = ({ messages }: IContainerMessageProps) => {
  const scrollViewRef = React.useRef<ScrollView>(null);

  return (
    <ScrollView
      style={styles.allMessagesContainer}
      onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
      ref={scrollViewRef}
    >
      {messages.map((message) => (
        <Message
          content={message.content.toString()}
          time={message.dateCreated}
          iduser={message.idUser}
          key={message._id}
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
    paddingHorizontal: 10,
  },
});
