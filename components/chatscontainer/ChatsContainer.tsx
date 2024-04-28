import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React from "react";
import { chats } from "../../data/chats";
import { NavigationContext } from "@react-navigation/native";

/**
 * The ChatsContainer component is responsible for displaying chats
 * in the chatmenu screen.
 */

const ChatsContainer = () => {
  const navigation = React.useContext(NavigationContext);
  const navigateChat = () => {
    navigation?.navigate("Chat");
  };
  return (
    <ScrollView style={styles.ScrollContainer}>
      {chats.map((chat) => (
        <Pressable onPress={navigateChat} key={chat.id}>
          <View style={styles.chatContainer}>
            <View style={styles.chatSubContainer}>
              <View style={styles.avatarContainer}>
                <Image source={chat.avatar} style={styles.avatarStyle} />
              </View>
              <View>
                <Text style={styles.textStyle}>{chat.name}</Text>
                <Text style={styles.lastMessageStyle}>{chat.lastMessage}</Text>
              </View>
            </View>
            <Text style={styles.textStyle}>{chat.time}</Text>
          </View>
        </Pressable>
      ))}
    </ScrollView>
  );
};

export default ChatsContainer;

const styles = StyleSheet.create({
  chatContainer: {
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
  ScrollContainer: {
    marginBottom: 25,
    height: "100%",
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
});
