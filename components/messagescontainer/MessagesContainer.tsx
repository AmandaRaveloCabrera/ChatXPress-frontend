import { ScrollView, StyleSheet } from "react-native";
import React from "react";
import Message from "../message/Message";
import { currentChatContext } from "../../context/CurrentChatContext";

const MessagesContainer = () => {
  const scrollViewRef = React.useRef<ScrollView>(null);
  const { currentChat } = React.useContext(currentChatContext);

  return (
    <ScrollView
      style={styles.allMessagesContainer}
      onContentSizeChange={() => scrollViewRef.current?.scrollToEnd()}
      ref={scrollViewRef}
    >
      {currentChat.messages.map((message) => (
        <Message
          id={message._id}
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
