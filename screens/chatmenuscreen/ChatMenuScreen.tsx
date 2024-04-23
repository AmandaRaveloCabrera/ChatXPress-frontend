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
import ChatsContainer from "../../components/chatscontainer/ChatsContainer";

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
        <ChatsContainer />
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
});
