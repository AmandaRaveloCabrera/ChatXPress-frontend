import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Pressable,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { chats } from "../../data/chats";
import { NavigationContext } from "@react-navigation/native";

const ChatMenuScreen = () => {
  const navigation = React.useContext(NavigationContext);
  const signOut = () => {
    navigation?.navigate("Home");
  };

  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.titleStyle}>Chats</Text>
        <Pressable onPress={signOut}>
          <FontAwesome name="sign-out" size={36} color="white" />
        </Pressable>
      </View>
      <View style={styles.chatsContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../assets/images/icono.png")}
            style={styles.imagenStyle}
          />
        </View>
        <View style={styles.tabContainer}>
          <View style={styles.tabBorder}>
            <Text>All</Text>
          </View>
          <View style={styles.tabBorder}>
            <Text>New Message</Text>
          </View>
        </View>
        <ScrollView style={styles.ScrollContainer}>
          {chats.map((chat, index) => (
            <View style={styles.chatContainer} key={index}>
              <View style={styles.chatSubContainer}>
                <View style={styles.avatarContainer}>
                  <Image source={chat.avatar} style={styles.avatarStyle} />
                </View>
                <View>
                  <Text style={styles.textStyle}>{chat.name}</Text>
                  <Text style={styles.lastMessageStyle}>
                    {chat.lastMessage}
                  </Text>
                </View>
              </View>
              <Text style={styles.textStyle}>{chat.time}</Text>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default ChatMenuScreen;

const styles = StyleSheet.create({
  imagenStyle: {
    height: 50,
    width: 50,
  },
  avatarStyle: {
    height: 80,
    width: 80,
  },
  imageContainer: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },

  mainContainer: {
    backgroundColor: "#32659D",
    height: "100%",
    width: "100%",
  },
  headerContainer: {
    height: "15%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 30,
    paddingTop: 20,
  },
  titleStyle: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  chatsContainer: {
    backgroundColor: "#D9D9D9",
    height: "100%",
    paddingTop: 20,
    borderTopRightRadius: 35,
    borderTopLeftRadius: 35,
  },
  tabContainer: {
    height: 45,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  tabBorder: {
    borderBottomWidth: 2,
    borderBottomColor: "black",
    paddingBottom: 8,
    width: 130,
    alignItems: "center",
  },
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
});
